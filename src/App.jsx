import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Todolist from './Todolist';


function App() {
  return (
    
    <div className="App">
      <h1>this is React App</h1>
     <Counter/>
     <Todolist/>
    </div> 
    
  );
}

export default App;
