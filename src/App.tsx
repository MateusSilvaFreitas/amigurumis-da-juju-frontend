import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Homepage } from "./pages/homepage/Homepage";
import "./App.css";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="geral-container">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/store" element={<p>Store Page</p>} />
          <Route path="/amigurumis-da-juju-frontend" element={<p>Teste</p>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
