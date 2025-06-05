import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import MainContent from "./components/main-content/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <Sidebar />
          <div className="main-section">
            <Header />

            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/photos" element={<MainContent />} />
              <Route path="/updates" element={<MainContent />} />
              <Route path="/albums" element={<MainContent />} />
              <Route path="/documents" element={<MainContent />} />

              <Route path="/favourites" element={<MainContent />} />
              <Route path="/people" element={<MainContent />} />
              <Route path="/places" element={<MainContent />} />
              <Route path="/videos" element={<MainContent />} />

              <Route path="/rec-added" element={<MainContent />} />
              <Route path="/archive" element={<MainContent />} />
              <Route path="/locked-folder" element={<MainContent />} />
              <Route path="/trash" element={<MainContent />} />

              <Route path="/storage" element={<MainContent />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
