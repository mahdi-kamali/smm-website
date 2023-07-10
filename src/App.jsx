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



// ProgressBar
import "react-sweet-progress/lib/style.css";



import MainPage from "./jsx/pages/main-page/MainPage";
import Header from "./jsx/primaries/header/Header";
import Footer from "./jsx/primaries/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
