import "./App.css";
import logo from "./images/logo.png";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="joserecart-logo" />
      </div>
      <div className="main-todo-list">
        <h1 className="todo-title">My to do list</h1>
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
