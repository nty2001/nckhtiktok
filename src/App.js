
import './App.css';
import Home from "./Page/Home.jsx"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;