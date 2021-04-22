
import './App.css';
import User from './User';
import HomeContainer from './container/HomeContainer';
import HeaderContainer from './container/HeaderContainer';

function App() {
  return (
    <div className="App">
    {/*  <h1>App Components</h1> */} 
    {/*  <User data={{name:'Nirbhai Tiwari', girlFriend: 'Komal Sagar'}}/> */} 
    <HeaderContainer />
     <HomeContainer />
    </div>
  );
}

export default App;
