import React from 'react'

const UserList = () => {
    return (
        <div className="table-block">
            <h3>All Users</h3>
            <table className="table-data">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mani</td>
                        <td>male</td>
                        <td>28</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserList