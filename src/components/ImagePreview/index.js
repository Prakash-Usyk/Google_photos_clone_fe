import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, IconButton, Box, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function PhotoGallery({
  open,
  handleClose,
  selectedImage,
  images = [],
  handleDelete,
  fieldKey,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (selectedImage && images.length > 0) {
      const index = images.findIndex((img) => img._id === selectedImage);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [selectedImage, images]);

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const goNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const currentImage = images[currentIndex]?.image;

  return (
    <Dialog open={open} onClose={handleClose} fullScreen>
      <DialogContent
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: 0,
        }}
      >
        {/* Top Bar */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
            zIndex: 10,
            color: "white",
          }}
        >
          <IconButton onClick={handleClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
          <Box>
            <Tooltip title="Share">
              <IconButton sx={{ color: "white" }}>
                <ShareIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Info">
              <IconButton sx={{ color: "white" }}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton sx={{ color: "white" }}>
                <DeleteIcon
                  onClick={() => handleDelete(images[currentIndex]?.[fieldKey])}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="More">
              <IconButton sx={{ color: "white" }}>
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Left arrow */}
        {currentIndex > 0 && (
          <IconButton
            onClick={goPrev}
            sx={{
              position: "absolute",
              left: "10px",
              color: "white",
              zIndex: 10,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}

        {/* Image */}
        <img
          src={currentImage}
          alt="preview"
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
          }}
        />

        {/* Right arrow */}
        {currentIndex < images.length - 1 && (
          <IconButton
            onClick={goNext}
            sx={{
              position: "absolute",
              right: "10px",
              color: "white",
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default PhotoGallery;
