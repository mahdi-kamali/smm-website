import "./css/global/global.css"
import "./css/style/style.css"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';




import MainPage from "./jsx/pages/main-page/MainPage";
import Header from "./jsx/primaries/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
