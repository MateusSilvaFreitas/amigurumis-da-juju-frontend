import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Homepage } from "./pages/homepage/Homepage";
import "./App.css";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="geral-container">
        <Header />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/store" element={<p>Store Page</p>} />
            <Route path="/amigurumis-da-juju-frontend" element={<p>Teste</p>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
