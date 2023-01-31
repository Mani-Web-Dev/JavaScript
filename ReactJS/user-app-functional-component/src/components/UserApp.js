import React, { useState, useEffect } from 'react'

import AllUsers from './AllUsers';
import UserDetails from './UserDetails';

import Axios from "axios";


const UserApp = () => {

    const [user, setUser] = useState({})
    const [selectedUser, setSelectedUser] = useState({})

    const handleSelectedUser = (user) => {
        setSelectedUser(user);
    }

    useEffect(() => {
        Axios.get("https://dummyjson.com/users")
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => { console.log("Data Loading failed", error) });
    }, []);

    return (
        <div className="user-app p-5">
            <h1 className="text-2xl font-bold leading-7 text-gray-900 p-3 pb-0 mb-5 sm:truncate sm:text-3xl sm:tracking-tight">User App</h1>
            <div className="bg-gray-700 h-48 overflow-y-auto p-4 text-white mb-10">
                {JSON.stringify(user)}
            </div>
            <div className="flex gap-5">
                {
                    Object.keys(user).length > 0 ? <AllUsers users={user.users} selectedUser={handleSelectedUser} /> : null
                }
                {
                    Object.keys(user).length > 0 ? <UserDetails user={selectedUser} /> : null
                }
            </div>
        </div>
    );
}

export default UserApp

