import { Routes, Route } from "react-router-dom";
import './App.scss';
import { Footer, Header, HomePage, AboutPage, PageNotReady} from './index';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageNotReady />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
