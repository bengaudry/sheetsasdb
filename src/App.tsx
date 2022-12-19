import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import { Docs } from "./pages/Docs";
import { Dashboard } from "./pages/Dashboard";
import { NoPage } from "./pages/NoPage";
import { Overview } from "./components/Dashboard/sub-pages/Overview";
import { Manage } from "./components/Dashboard/sub-pages/Manage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="docs" element={<Docs />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/overview" element={<Dashboard><Overview/></Dashboard>} />
          <Route path="dashboard/manage" element={<Dashboard><Manage /></Dashboard>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
