import React from 'react'

const AllUsers = ({ users, selectedUser }) => {

    const selectUser = (user) => {
        console.log(user);
        selectedUser(user);
    }

    return (
        <div className="w-1/2 p-4 flex-1">
            <h2 className='bg-gray-100 p-4 mb-4  font-bold'>User List</h2>
            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Id</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Gender</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Email</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-1/12">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td className="px-4 py-3 border-b-2 border-gray-200">{user.id}</td>
                                    <td className="px-4 py-3 border-b-2 border-gray-200">{user.firstName + " " + user.lastName}</td>
                                    <td className="px-4 py-3 border-b-2 border-gray-200">{user.gender}</td>
                                    <td className="px-4 py-3 text-sm text-gray-900 border-b-2 border-gray-200">{user.email}</td>
                                    <td className="px-4 py-3 text-sm text-gray-900 w-1/12 border-b-2 border-gray-200">
                                        <button
                                            onClick={selectUser.bind(this, user)}
                                            className="float-right bg-black text-white py-2 px-4 text-sm rounded-lg hover:bg-gray-200 hover:text-black whitespace-nowrap">
                                            Show More
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
}

export default AllUsers