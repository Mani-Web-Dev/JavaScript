import React, { Component } from 'react'

import Axios from 'axios';
import AllUsers from './AllUsers';
import UserDetails from './UserDetails';

class UserApp extends Component {

    state = {
        user: {},
        selectedUser: {}
    }

    selectedUser = (user) => {
        console.log(user);
        this.setState({
            selectedUser: user,
        })
    }

    componentDidMount() {
        Axios.get("https://dummyjson.com/users")
            .then(response => {
                this.setState({
                    user: response.data
                });
            }).catch(error => {
                console.log("Loading data failed", error);
            })
    }

    render() {
        return (
            <div className="user-app p-5">
                <h1 className="text-2xl font-bold leading-7 text-gray-900 p-3 pb-0 mb-5 sm:truncate sm:text-3xl sm:tracking-tight">User App</h1>

                <div className="bg-gray-700 h-48 overflow-y-auto p-4 text-white mb-10">
                    {JSON.stringify(this.state.user)}
                </div>

                <div className="flex gap-5">
                    {
                        Object.keys(this.state.user).length > 0 ?
                            <AllUsers
                                users={this.state.user.users}
                                selectedUser={this.selectedUser}
                            /> :
                            null
                    }
                    {
                        Object.keys(this.state.user).length > 0 ?
                            <UserDetails user={this.state.selectedUser} /> : null
                    }

                </div>
            </div>
        )
    }
}

export default UserApp

