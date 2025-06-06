import * as React from "react";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import MovieIcon from "@mui/icons-material/Movie";
import AnimationIcon from "@mui/icons-material/Animation";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from "react-redux";
import { postphotosRequest } from "../../Redux/Photos/PhotosActions";

export default function PhotoMenu() {
  const fileInputRef = React.useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const dispatch = useDispatch();

  const handleFileChange = async (event) => {
    const files = event.target.files;

    if (!files || files.length === 0) return;

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("image", files[i]);
    }

    dispatch(postphotosRequest(formData));

    // try {
    //   const response = await fetch("http://localhost:5000/photos", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   const result = await response.json();
    //   console.log("Upload successful:", result);
    // } catch (error) {
    //   console.error("Upload failed:", error);
    // }
  };

  const handleMenuItemClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input manually
    }
  };
  return (
    <div>
      <MenuItem>
        <ListItemIcon>
          <PhotoAlbumIcon />
        </ListItemIcon>
        <ListItemText primary="Album" />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary="Collage" />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary="Highlight video" />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <AnimationIcon />
        </ListItemIcon>
        <ListItemText primary="Animation" />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PeopleAltIcon />
        </ListItemIcon>
        <ListItemText primary="Share with a partner" />
      </MenuItem>

      <Divider />

      <MenuItem onClick={handleMenuItemClick}>
        <ListItemIcon>
          <UploadFileIcon />
        </ListItemIcon>
        <ListItemText primary="Import photos" />
      </MenuItem>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        multiple
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <MenuItem>
        <ListItemIcon>
          <FolderZipIcon />
        </ListItemIcon>
        <ListItemText
          primary="Back up folders"
          secondary="Back up automatically"
        />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DriveFolderUploadIcon />
        </ListItemIcon>
        <ListItemText primary="Google Drive" />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <MoreHorizIcon />
        </ListItemIcon>
        <ListItemText primary="From other places" />
      </MenuItem>
    </div>
  );
}
