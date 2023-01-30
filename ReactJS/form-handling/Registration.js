import React, { Component } from 'react'

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleInput = (inputtype, event) => {
        // this.setState({
        //     name: inputtype === "name" ? event.target.value : "",
        //     email: inputtype === "email" ? event.target.value : "",
        //     phone: inputtype === "phone" ? event.target.value : "",
        //     password: inputtype === "password" ? event.target.value : "",
        //     confirmPassword: inputtype === "confirmPassword" ? event.target.value : "",
        // });

        this.setState({
            [inputtype]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        console.log("Data updated successfully")
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                <h2>Register</h2>
                <br />
                <input type="text" onChange={this.handleInput.bind(this, "name")} placeholder='Name' />
                <input type="text" onChange={this.handleInput.bind(this, "email")} placeholder='Email' />
                <input type="text" onChange={this.handleInput.bind(this, "phone")} placeholder='Phone' />
                <input type="text" onChange={this.handleInput.bind(this, "password")} placeholder='Password' />
                <input type="text" onChange={this.handleInput.bind(this, "confirmPassword")} placeholder='Confirm Password' />

                <button type='submit'>Register</button>

                <p>{JSON.stringify(this.state)}</p>

            </form>
        )
    }
}

export default Registration;