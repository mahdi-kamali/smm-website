import "./css/global/global.css"
import "./css/style/style.css"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';



// React SeelctBox
import 'react-select-search/style.css'



// ProgressBar
import "react-sweet-progress/lib/style.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import MainPage from "./jsx/pages/main-page/MainPage";
import ServicesPage from './jsx/pages/services-page/ServicesPage';
import Header from "./jsx/primaries/header/Header";
import Footer from "./jsx/primaries/footer/Footer";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<MainPage />} />
          <Route path='services' element={<ServicesPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
