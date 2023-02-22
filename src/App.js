import logo from './logo.svg';
import { Routes,Route } from 'react-router';
import Header from './Components/Header';
import Main from './Pages/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
