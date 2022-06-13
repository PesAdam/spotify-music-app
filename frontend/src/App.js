import Home from './components/Home';
import CreateRoomPage from './components/CreateRoomPage';
import JoinRoomPage from './components/JoinRoomPage';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/join" exact element={<JoinRoomPage/>}/>
          <Route path="/create" exact element={<CreateRoomPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
