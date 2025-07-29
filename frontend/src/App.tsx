import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.tsx";
import PublicLayout from "./layouts/PublicLayout.tsx";

function App() {
  return (
      <Routes>
          <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
          </Route>
      </Routes>
  );
};

export default App;