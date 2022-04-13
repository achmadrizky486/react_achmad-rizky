import './App.css';
import About_app from './Pages/About_app'
import About_author from './Pages/About_author'
import { BrowserRouter as Deklarasi, Routes, Route } from 'react-router-dom';
import Home from './EventHandling/Home'

function App() {
  return (
    <Deklarasi>
      <Routes>
        {/* <Route path="/" element={</>}/> */}
        <Route index element={<Home />} />
        <Route path="About_app" element={<About_app />} />
        <Route path="About_author" element={<About_author />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Deklarasi>
  );
}

export default App;
