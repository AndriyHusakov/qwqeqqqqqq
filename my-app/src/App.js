import './App.css';

function App() {
  return (
    <div class="todo">
        <h1>To-Do List</h1>
        <div class="form">
          <input type="text" />
          <button>Add</button>
        </div>
        <ul>
      
          <li>
            <span>Item</span>
            <span class="delete"><i class="fa fa-trash"></i></span>
          </li>
          <li>
            <span>Item</span>
            <span class="delete"><i class="fa fa-trash"></i></span>
          </li>
          <li>
            <span>Item</span>
            <span class="delete"><i class="fa fa-trash"></i></span>
          </li>
        </ul>
      </div>
  );
}

export default App;
