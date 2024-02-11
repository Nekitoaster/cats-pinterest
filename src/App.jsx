import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import FavouritePage from "./pages/FavouritePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Routes>
    </>
  );
}

export default App;
