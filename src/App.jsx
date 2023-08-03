

// Application styles
import "./css/global/global.css"
import "./css/style/style.css"
import "./css/animation/aniamtions.css"
import "./css/dashboard/dashboard.css"
import "./css/pop-up/pop-up.css"


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
import 'react-circular-progressbar/dist/styles.css';


// React Time Line
import 'react-vertical-timeline-component/style.min.css';




// React Routers
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// Pages
import MainPage from "./jsx/pages/main-page/MainPage";
import ServicesPage from './jsx/pages/services-page/ServicesPage';
import Header from "./jsx/primaries/header/Header";
import Footer from "./jsx/primaries/footer/Footer";
import AuthPage from "./jsx/pages/auth/AuthPage";



// Dashboards
import UserDashboard from "./jsx/dashboards/user/UserDashboard";
import PopUopContainer from "./jsx/pop-ups/PopUopContainer";











function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<MainPage />} />
          <Route path='/Login' element={<AuthPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path="*" element={<MainPage />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
        <Footer />

        <PopUopContainer />

      </BrowserRouter>
    </div>
  );
}

export default App;
