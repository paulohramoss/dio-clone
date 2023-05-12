import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './pages/Home'
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
     </Routes >
    </Router>
  );
}

export default App;