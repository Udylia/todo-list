import './App.css';
import image from './todo.jpg';
import imageTwo from './todoOne.jpg';
import {Todo} from './Todo';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={image} alt='Todo' width='250px' />
      </div>
      <div className='container'>
        <h1>Todo list</h1>
      </div>
      <Todo />
      <div className='container'>
        <img src={imageTwo} alt='Todo' width='250px' />
      </div>
    </div>
  );
}

export default App;
