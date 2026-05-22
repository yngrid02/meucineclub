import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";

import {
  ThemeProvider
} from "./contexts/ThemeContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";

function App() {

  return (

    <ThemeProvider>

      <BrowserRouter>

        <Header />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/favoritos"
            element={<Favoritos />}
          />

        </Routes>

      </BrowserRouter>

    </ThemeProvider>

  );
}

export default App;