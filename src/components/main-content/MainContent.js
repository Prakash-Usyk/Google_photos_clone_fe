import { useEffect, useState } from "react";
import "./MainContent.css";

const MainContent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "dataaa");
        const formatted = data?.data?.data.map((photo, index) => ({
          id: index,
          src: `http://localhost:5000/${photo.image}`,
        }));
        console.log(formatted, "formatterd");
        setImages(formatted);
      })
      .catch((err) => {
        console.error("Failed to load images", err);
      });
  }, []);

  return (
    <div className="main-content">
      <h3>September 2023</h3>
      <div className="timing-cls">{/* <h5>Time 15.00 - 15.15</h5> */}</div>

      <div className="photo-grid">
        {images.map((img) => (
          <img key={img.id} src={img.src} alt="snap" />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
