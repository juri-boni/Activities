import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Todos from "./routes/todos/todos.component";

import Completed from "./routes/completed/completed.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/completed" element={<Completed />} />
    </Routes>
  );
};

export default App;
