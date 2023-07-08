import "./css/global/global.css"
import "./css/style/style.css"
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
