import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import Photos from "./pages/photos/photos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Albums from "./pages/albums";
import AlbumForm from "./pages/albums/new-album";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const fullPageRoutes = ["/albums/new"];
  const isFullPage = fullPageRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      <Toaster position="top-center" reverseOrder={false} />
      {!isFullPage && <Sidebar />}
      <div className="main-section">
        {!isFullPage && <Header />}

        <div className="body-section">
          <Routes>
            <Route path="/" element={<Photos />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/updates" element={<Photos />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/albums/new" element={<AlbumForm />} />
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
  );
}
export default App;
