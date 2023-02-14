import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mx-auto mt-10 px-5">
        <div className="bg-white rounded-lgp-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Expense Tracker</h1>
          <form className="mb-4">
            <input type="text" className="border border-gray-300 p-2 rounded-lg w-full mb-3" placeholder="Add a new todo" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600">Add</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600">Remove</button>
          </form>

          <div className="mt-10 text-right">
            <div className="currentBalance">The Current Balance : <b>{"1000"}</b></div>
          </div>
          <div className="bg-white shadow-md rounded my-6">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Title</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">John Doe</td>
                  <td className="py-3 px-6 text-left">Web Developer</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">Jane Doe</td>
                  <td className="py-3 px-6 text-left">UX Designer</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">Bob Smith</td>
                  <td className="py-3 px-6 text-left">Marketing Specialist</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
