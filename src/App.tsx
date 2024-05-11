import { Routes, Route } from "react-router-dom";
import './App.scss';
import { About, Footer, Header, HomePage, PageNotReady} from './index';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotReady />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
