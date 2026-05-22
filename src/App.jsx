import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";

import {
  ThemeProvider
} from "./contexts/ThemeContext";

import {
  AuthProvider
} from "./contexts/AuthContext";

import RotaProtegida
from "./routes/RotaProtegida";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";
import DetalhesFilme from "./pages/DetalhesFilme";

function App() {

  return (

    <ThemeProvider>

      <AuthProvider>

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
              path="/filme/:id"
              element={<DetalhesFilme />}
            />

            <Route element={<RotaProtegida />}>

              <Route
                path="/favoritos"
                element={<Favoritos />}
              />

            </Route>

          </Routes>

        </BrowserRouter>

      </AuthProvider>

    </ThemeProvider>

  );
}

export default App;