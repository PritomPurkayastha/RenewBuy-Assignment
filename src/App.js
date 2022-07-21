import "./App.css";
import Sidebar from "./Components/Sidebar";
import Overview from "./Components/Overview";
import AddTodo from "./Components/AddTodo";
import State from "./Context/State";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <State>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                <Overview />
              </>
            }
          />
          <Route path="/add" element={<AddTodo />} />
        </Routes>
      </div>
    </State>
  );
}

export default App;
