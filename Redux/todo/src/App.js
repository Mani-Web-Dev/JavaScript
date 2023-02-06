
import './App.css';
import Message from './Message';

import { Provider } from 'react-redux';
import { store } from "./Redux/Message/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Message />
      </div>
    </Provider>
  );
}

export default App;
