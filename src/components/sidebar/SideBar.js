import { useLocation, useNavigate, useParams } from "react-router-dom";
import AlbumIcon from "../../assets/icons/side-bar-albums";
import ArchiveIcon from "../../assets/icons/side-bar-archive";
import DocIcon from "../../assets/icons/side-bar-doc";
import FavIcon from "../../assets/icons/side-bar-fav";
import LockedIcon from "../../assets/icons/side-bar-locked";
import PeopleIcon from "../../assets/icons/side-bar-people";
import PhotosIcon from "../../assets/icons/side-bar-photos";
import PlacesIcon from "../../assets/icons/side-bar-places";
import RecaddIcon from "../../assets/icons/side-bar-rec-add";
import StorageIcon from "../../assets/icons/side-bar-storage";
import TrashIcon from "../../assets/icons/side-bar-trash";
import UpdatesIcon from "../../assets/icons/side-bar-updates";
import VideosIcon from "../../assets/icons/side-bar-videos";
import "./Sidebar.css";
import usePagination from "@mui/material/usePagination";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  console.log(currentPath, "params");
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <div className="j8v1Ad">
        <a
          aria-label="All photos"
          href="./"
          jsaction="click:RfWuxb(preventDefault=true)"
        >
          <span className="UDKXKd uuRyud" title="Google"></span>
          <span className="EIug8e">Photos</span>
        </a>
      </div>

      <ul className="sidebar-menu">
        <li
          className={`sidebar-menu-items ${
            currentPath === "" ? "selected-cls" : ""
          }`}
          onClick={() => navigate("/")}
        >
          <PhotosIcon width={24} height={24} />
          <p>Photos</p>
        </li>
        <li
          className={`sidebar-menu-items ${
            currentPath === "updates" ? "selected-cls" : ""
          }`}
          onClick={() => navigate("updates")}
        >
          <UpdatesIcon width={24} height={24} />
          <p>Updates</p>
        </li>

        <div className="menu-label">Collections</div>
        <div className="collection-items">
          <li
            className={`sidebar-menu-items ${
              currentPath === "albums" ? "selected-cls" : ""
            }`}
            onClick={() => navigate("albums")}
          >
            <AlbumIcon width={24} height={24} />
            <p>Albums</p>
          </li>
          <li
            className={`sidebar-menu-items ${
              currentPath === "documents" ? "selected-cls" : ""
            }`}
            onClick={() => navigate("documents")}
          >
            <DocIcon width={24} height={24} />
            <p>Documents</p>
          </li>
          <li
            className={`sidebar-menu-items ${
              currentPath === "favourites" ? "selected-cls" : ""
            }`}
            onClick={() => navigate("favourites")}
          >
            <FavIcon width={24} height={24} />
            <p>Favorites</p>
          </li>
          <li
            className={`sidebar-menu-items ${
              currentPath === "people" ? "selected-cls" : ""
            }`}
            onClick={() => navigate("people")}
          >
            <PeopleIcon width={24} height={24} />
            <p>People</p>
          </li>
          <li
            className={`sidebar-menu-items ${
              currentPath === "places" ? "selected-cls" : ""
            }`}
            onClick={() => navigate("places")}
          >
            <PlacesIcon width={24} height={24} />
            <p>Places</p>
          </li>

          <li
            className={`sidebar-menu-items ${
              currentPath === "videos" ? "selected-cls" : ""
            }`}
            onClick={() => navigate("videos")}
          >
            <VideosIcon width={24} height={24} />
            <p>Videos</p>
          </li>
          <li
            className={`sidebar-menu-items ${
              currentPath === "rec-added" ? "selected-cls" : ""
            }`}
            onClick={() => navigate("rec-added")}
          >
            <RecaddIcon width={24} height={24} />
            <p>Recently Added</p>
          </li>
          <li
            className={`sidebar-menu-items ${
              currentPath === "archive" ? "selected-cls" : ""
            }`}
            onClick={() => navigate("archive")}
          >
            <ArchiveIcon width={24} height={24} />
            <p>Archive</p>
          </li>
          <li
            className={`sidebar-menu-items ${
              currentPath === "locked-folder" ? "selected-cls" : ""
            }`}
            onClick={() => navigate("locked-folder")}
          >
            <LockedIcon width={24} height={24} />
            <p>Locked Folder</p>
          </li>
          <li
            className={`sidebar-menu-items ${
              currentPath === "trash" ? "selected-cls" : ""
            }`}
            onClick={() => navigate("trash")}
          >
            <TrashIcon width={24} height={24} />
            <p>Trash</p>
          </li>
        </div>
        <div className="line-cls"></div>

        <li
          className={`sidebar-menu-items ${
            currentPath === "storage" ? "selected-cls" : ""
          }`}
          onClick={() => navigate("storage")}
        >
          <StorageIcon width={24} height={24} />
          <p>Storage</p>
        </li>
      </ul>

      <div className="sidebar-footer">
        <div className="storage-info">
          <div className="bar">
            <div className="filled" style={{ width: "1%" }}></div>
          </div>
          <div className="storage-tag">
            <p>141.8 MB of 15 GB used</p>
          </div>
          <div className="storage-disc-btn">
            <button className="unlock-btn">
              Unlock storage
              <br />
              discount
            </button>
          </div>
          {/* <div className="privacy-cls">
            <div class="xWzMBf">
              <a
                aria-label="Privacy"
                href="https://policies.google.com/privacy?hl=en"
                target="_blank"
                class="sXdtke"
                role="button"
                tabindex="0"
              >
                Privacy
              </a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
            </div>
            <div class="xWzMBf">
              <a
                aria-label="Terms"
                href="https://policies.google.com/terms?hl=en"
                target="_blank"
                class="sXdtke"
                role="button"
                tabindex="0"
              >
                Terms
              </a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
            </div>
            <div class="xWzMBf">
              <a
                aria-label="Policy"
                href="https://support.google.com/photos/answer/9292998?hl=en"
                target="_blank"
                class="sXdtke"
                role="button"
                tabindex="0"
              >
                Policy
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
