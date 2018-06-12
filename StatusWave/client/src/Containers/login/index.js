import React, {
  Component
} from 'react'

export default class Login extends Component {

async  login(e) {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const authToken = 'Basic ' + btoa(`${email}:${password}`);

    try {
      var response = await fetch("http://localhost:3000/login", {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          'Authorization': authToken
        },
        //body: body
      });

      if (response.status !== 200) {
        alert("Incorrect login details. Please try again.");
        return;
      }

      localStorage.setItem("token", authToken);

      window.location = "/authorize-twitter.html";
      console.log('response', response);

    } catch (e) {
        alert("Incorrect login details. Please try again." + e.message);
        return;
    }
  }

render() {
  return ( <form>
    <label> Email </label> 
    <input id="email" type="email" placeholder="Enter email" / >
    <label>Password </label> 
    <input id="password" type="password" placeholder="Enter password" />
    <button onClick={(e) => this.login(e)}value="Login" / >
    </form>
  );
}

}
