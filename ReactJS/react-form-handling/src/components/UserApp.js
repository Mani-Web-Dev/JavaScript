import React, { Component } from 'react'

import Axios from 'axios';
import UserList from './UserList';

var data = fetch("https://dummyjson.com/users");

console.log(data)

class UserApp extends Component {

    state = {
        users: {}
    }

    componentDidMount() {
        Axios.get("https://dummyjson.com/users")
            .then(response => {
                this.setState({
                    users: response.data
                });
            }).catch(error => {
                console.log("Loading data failed", error);
            })
    }

    render() {
        return (
            <div className='feth-api'>

                <h2>UserApp</h2>

                <br />

                <p>{JSON.stringify(this.state.users)}</p>
                {console.log(this.state.users)}

                <br />
                <br />

                <div className="table-flex">
                    <UserList />                    <div className="table-details">
                       
                       















































                    </div>
                </div>

            </div >
        )
    }
}

export default UserApp