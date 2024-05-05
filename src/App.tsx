import { Routes, Route } from "react-router-dom";
import './App.scss';
import { Header, HomePage } from './index';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
