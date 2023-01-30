import React from 'react'

class UserDetails extends React.Component {
    render() {
        return (
            <>
                <div className="w-1/3 p-4">
                    <h2 className='bg-gray-100 p-4 mb-4 font-bold'>User Detailed Data</h2>
                    {
                        Object.keys(this.props.user).length > 0 ? (
                            <section className="sticky top-0 text-gray-600 body-font border-gray-300">
                                <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
                                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={this.props.user.image} />
                                    <div className="text-center w-full">
                                        <h1 className="title-font sm:text-1xl text-2xl mb-4 font-medium text-gray-900">{this.props.user.firstName + " " + this.props.user.lastName}</h1>
                                        <table className=" text-left whitespace-no-wrap w-full border-gray-500">
                                            <tbody>
                                                <tr>
                                                    <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl border border-gray-200">Age</td>
                                                    <td className="px-4 py-3 border border-gray-200">{this.props.user.age}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl border border-gray-200">Gender</td>
                                                    <td className="px-4 py-3 border border-gray-200">{this.props.user.gender}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl border border-gray-200">Email</td>
                                                    <td className="px-4 py-3 border border-gray-200">{this.props.user.email}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl border border-gray-200">User Agent</td>
                                                    <td className="px-4 py-3 border border-gray-200">{this.props.user.userAgent}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl border border-gray-200">University</td>
                                                    <td className="px-4 py-3 border border-gray-200">[{this.props.user.university}]</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl border border-gray-200">Eye Color</td>
                                                    <td className="px-4 py-3 border border-gray-200">{this.props.user.eyeColor}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl border border-gray-200">Domain</td>
                                                    <td className="px-4 py-3 border border-gray-200">{this.props.user.domain}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                        ) : <div className="sticky top-10 w-1/3 p-4 bg-gray-100 mt-4 w-full text-center h-48 flex items-center justify-center"><span>Click on any item to view full details</span></div>
                    }
                </div>
            </>
        )
    }

}

export default UserDetails;