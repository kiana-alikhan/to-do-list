import { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';
const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleCLick = () => {
    setIsShowModal(true);
  };

  return (
    <>
      <div className="content">
        <h1>TODO LIST</h1>
        <form>
          <label className="header-list">
            <button className="toggle-button">Add Task</button>
            <select className="selected">
              <option>All</option>
              <option>works</option>
              <option>classes</option>
              <option>celebraite</option>
            </select>
          </label>
          <div className="container">
            <label className="todo">
              <input type="checkbox"></input>
              <span>
                <i className="fa fa-trash-o  fa-border" onClick={handleCLick} />
                <i className="fa fa-pencil fa-border " aria-hidden="true" />
              </span>
            </label>
          </div>
        </form>
      </div>
      {isShowModal && (
        <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
      )}
    </>
  );
};

export default App;
