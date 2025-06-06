import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import Photos from "./pages/photos/photos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="app-container">
          <Sidebar />
          <div className="main-section">
            <Header />

            <Routes>
              <Route path="/" element={<Photos />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/updates" element={<Photos />} />
              <Route path="/albums" element={<Photos />} />
              <Route path="/documents" element={<Photos />} />

              <Route path="/favourites" element={<Photos />} />
              <Route path="/people" element={<Photos />} />
              <Route path="/places" element={<Photos />} />
              <Route path="/videos" element={<Photos />} />

              <Route path="/rec-added" element={<Photos />} />
              <Route path="/archive" element={<Photos />} />
              <Route path="/locked-folder" element={<Photos />} />
              <Route path="/trash" element={<Photos />} />

              <Route path="/storage" element={<Photos />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
