import Sidebar from "./containers/sidebar/Sidebar";
import MainPage from "./containers/main-page/MainPage";
import Footer from "./containers/footer/Footer";
import { useSelector } from "react-redux";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-col md:flex-row bg-[#121212] h-[100%]">
        <Sidebar />
        <MainPage />
      </div>
      {Object.entries(activeSong).length ?
       (
        <div className="sticky bottom-0">
          <Footer />
        </div>)
        : ''
      }
    </div>
  );
}

export default App;
