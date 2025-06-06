import React, { useEffect, useState } from "react";
import "./index.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getalbumsListRequest } from "../../Redux/Albums/AlbumsActions";

const albums = [
  {
    id: "1",
    name: "a1",
    description: "1 item",
    thumbnail: "",
  },
];

const Albums = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pagelimit, setPagelimit] = useState(10);
  const [quickFilter, setQuickFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [albumstate, setalbumstate] = useState("all");

  const {
    getalbumsLoading,
    getalbumsResponse,
    getalbumsByidLoading,
    getalbumsByidResponse,
    postalbumsLoading,
    postalbumsResponse,
    putalbumsLoading,
    putalbumsResponse,
    deletealbumsLoading,
    deletealbumsResponse,
  } = useSelector((state) => state.albums);

  useEffect(() => {
    if (putalbumsLoading || postalbumsLoading) return;

    dispatch(
      getalbumsListRequest({
        quickFilter,
        filter: { sortBy, page },
        keyword: "",
        count: pagelimit,
      })
    );
  }, [putalbumsLoading, postalbumsLoading, page, pagelimit, sortBy]);
  return (
    <div className="album-container">
      <div className="album-header">
        <h2>Albums</h2>

        <div className="header-actions">
          <button className="icon-button" onClick={() => navigate("new")}>
            <span className="material-icons">add_box</span>
            Create album
          </button>
          <button className="icon-button">
            <span className="material-icons">swap_vert</span>
            Most recent photo
          </button>
        </div>
      </div>

      <div className="album-filters">
        <button
          className={albumstate === "all" && "active"}
          onClick={() => {
            setalbumstate("all");
          }}
        >
          All
        </button>
        <button
          className={albumstate === "my_album" && "active"}
          onClick={() => {
            setalbumstate("my_album");
          }}
        >
          My albums
        </button>
        <button
          className={albumstate === "shared_with_me" && "active"}
          onClick={() => {
            setalbumstate("shared_with_me");
          }}
        >
          Shared with me
        </button>
      </div>

      {/* Albums Grid */}
      <div className="album-grid">
        {getalbumsResponse?.data?.data?.length > 0 ? (
          getalbumsResponse?.data?.data?.map((each, index) => {
            return (
              <div key={index} className="album-card">
                <div className="album-thumbnail">
                  {each.thumbnail ? (
                    <img src={each?.thumbnail} alt={each?.name} />
                  ) : (
                    <span>No items</span>
                  )}
                </div>
                <div className="album-info">
                  <h3>{each.name}</h3>
                  <p>{each.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Albums;
