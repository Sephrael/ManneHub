import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;