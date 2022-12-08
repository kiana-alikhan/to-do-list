import './App.css';

const App = () => {
  return (
    <>
      <h1>TODO LIST</h1>
      <div className="header-list">
        <button className="add-task">Add Task</button>
        <select className="selected">
          <option>All</option>
          <option>works</option>
          <option>classes</option>
          <option>celebraite</option>
        </select>
      </div>
      <div className="container">
        <div className="todo">
          <input type="checkbox"></input>
          <span>
            <i className="fa fa-trash-o fa-border"></i>
            <i class="fa fa-pencil fa-border" aria-hidden="true"></i>
          </span>
        </div>
        <div className="todo">
          <input type="checkbox"></input>
          <span>
            <i className="fa fa-trash-o fa-border"></i>
            <i class="fa fa-pencil fa-border" aria-hidden="true"></i>
          </span>
        </div>
        <div className="todo">
          <input type="checkbox"></input>
          <span>
            <i className="fa fa-trash-o  fa-border"></i>
            <i className="fa fa-pencil fa-border " aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default App;
