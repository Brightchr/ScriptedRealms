import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.tsx";
import PublicLayout from "./layouts/PublicLayout.tsx";
import LobbyPage from "./pages/LobbyPage.tsx";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout.tsx";

function App() {
  return (
      <Routes>
          <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
          </Route>
          <Route element={<AuthenticatedLayout />}>
              <Route path="/lobby" element={<LobbyPage />} />
          </Route>
      </Routes>
  );
};

export default App;