import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./components/AppRoutes";

import "./styles/App.scss";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
