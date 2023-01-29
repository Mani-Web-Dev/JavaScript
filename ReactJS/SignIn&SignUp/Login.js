import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    handleEmail = (event) => {
        console.log(event.target.value);
        this.setState({
            email: event.target.value
        })
    };

    handlePassword = (event) => {
        console.log(event.target.value);
        this.setState({
            password: event.target.value
        })
    };

    handleForm = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div className="login-form">
                <h2>Login Form</h2>


                <form onSubmit={this.handleForm}>
                    <input
                        type="text"
                        onChange={this.handleEmail}
                        placeholder="Enter Email ID"
                    />

                    <br />
                    <br />

                    <input
                        type="text"
                        onChange={this.handlePassword}
                        placeholder="Password"
                    />
                    <br />
                    <br />

                    <button type="submit">Submit</button>
                </form>

                <p>Login Details : {JSON.stringify(this.state)}</p>
            </div>
        );
    }
}

export default Login;
