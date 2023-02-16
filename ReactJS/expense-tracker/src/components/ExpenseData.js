import React from 'react'

const ExpenseData = ({ data }) => {
    return (
        <div className="bg-white shadow-md rounded my-6">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">REASON</th>
                        <th className="py-3 px-6 text-left">ADDED AMOUNT</th>
                        <th className="py-3 px-6 text-left">DATE</th>
                        <th className="py-3 px-6 text-left">REMOVED AMOUNT</th>
                        <th className="py-3 px-6 text-left">LATEST BALANCE</th>
                        <th className="py-3 px-6 text-left"></th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">

                    {
                        data.length === 0 ? <tr>
                            <td colSpan={6} className='p-4 text-left'>No Data Found</td>
                        </tr> : data.map(item => {
                            return (
                                <tr key={data.indexOf(item) + 1} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{data.indexOf(item) + 1}</td>
                                    <td className="py-3 px-6 text-left">{item.reason}</td>
                                    <td className="py-3 px-6 text-left">{item.amount}</td>
                                    <td className="py-3 px-6 text-left">{item.transactionTime}</td>
                                    <td className="py-3 px-6 text-left">100</td>
                                    <td className="py-3 px-6 text-left">1000</td>
                                    <td className="py-3 px-6 text-left">
                                        <button onClick={() => console.log(item)} type="button" className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-red-600">Remove</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseData;