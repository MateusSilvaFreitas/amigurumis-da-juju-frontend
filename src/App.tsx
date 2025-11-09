import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Homepage } from "./pages/homepage/Homepage";
import "./App.css";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="geral-container">
        <HashRouter>
          <Header />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/store" element={<p>Store Page</p>} />
          </Routes>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
}

export default App;
