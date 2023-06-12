import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Todo from "./components/todo/Todo";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Todo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer theme="colored" autoClose={1000} />
    </>
  );
}

export default App;
