import "./Header.css";
import AddIcon from "@mui/icons-material/Add";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import PhotoMenu from "../model-components/header-add-model";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => setAnchorEl(true);
  const handleClose = () => setAnchorEl(false);
  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        open={anchorEl}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            borderRadius: 2,
            padding: 1,
            width: 260,
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <PhotoMenu />
      </Menu>
      <div className="header">
        <div className="search-bar-wrapper">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search your photos and albums" />
        </div>

        <div className="icons">
          <AddIcon
            onClick={() => handleClick()}
            style={{ fontSize: 20, marginRight: "4px" }}
          />
          <HelpOutlineIcon style={{ fontSize: 20, marginRight: "4px" }} />
          <SettingsIcon style={{ fontSize: 20, marginRight: "4px" }} />
          <AppsIcon style={{ fontSize: 20, marginRight: "4px" }} />
          <div class="avatar">P</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
