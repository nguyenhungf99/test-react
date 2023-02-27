import './App.css';
import Main from './Components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='home' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
