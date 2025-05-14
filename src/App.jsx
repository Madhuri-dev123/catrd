import logo from './logo.svg';
import './App.css';
import UserCard from './component/UserCard';
import Counter from './component/Counter';

function App() {
  return (
    
    <div className="App">
      <h1 style={{alignItems:"center"}}>this is React App</h1>
      <UserCard/>
       <UserCard/>
        <UserCard/>
        <Counter/>
    </div> 
    
  );
}

export default App;
