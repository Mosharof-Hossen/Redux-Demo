import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import CakeCountHook from './components/CakeCountHook';
import IceCreamCounter from './components/IceCreamCounter';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer  from "./components/ItemContainer.jsx"
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        {/* <CakeCountHook></CakeCountHook>
        <CakeContainer></CakeContainer>
        <IceCreamCounter></IceCreamCounter>
        <NewCakeContainer></NewCakeContainer>
        <ItemContainer></ItemContainer> */}
        <UserContainer></UserContainer>
      </div>
    </Provider>

  );
}

export default App;
