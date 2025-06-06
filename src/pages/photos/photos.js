import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./photos.css";
import {
  deletephotosRequest,
  deletephotosResponseClear,
  getphotosListRequest,
  postphotosResponseClear,
  putphotosRequest,
  putphotosResponseClear,
} from "../../Redux/Photos/PhotosActions";
import { appUrl } from "../../utils/axios";
import toast from "react-hot-toast";
import PhotoGallery from "../../components/ImagePreview";
import { formatTimeGroup, groupPhotosBy15Min } from "../../utils/groupBy";
import { useLocation } from "react-router-dom";

const Photos = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const location = useLocation();
  const [pagelimit, setPagelimit] = useState(10);
  const [quickFilter, setQuickFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imgId) => {
    setSelectedImage(imgId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  const {
    getphotosLoading,
    getphotosResponse,
    getphotosByidLoading,
    getphotosByidResponse,
    postphotosLoading,
    postphotosResponse,
    putphotosLoading,
    putphotosResponse,
    deletephotosLoading,
    deletephotosResponse,
  } = useSelector((state) => state.photos);

  useEffect(() => {
    if (putphotosLoading || postphotosLoading || deletephotosLoading) return;

    dispatch(
      getphotosListRequest({
        quickFilter,
        filter: { sortBy, page },
        keyword: "",
        count: "",
        is_deleted: location?.pathname === "/trash" ? true : false,
      })
    );
  }, [
    putphotosLoading,
    postphotosLoading,
    page,
    pagelimit,
    sortBy,
    deletephotosResponse,
    location,
  ]);

  useEffect(() => {
    if (!postphotosResponse) return;

    if (postphotosResponse?.type === "success") {
      toast.success(postphotosResponse?.data?.message);
    }
    dispatch(postphotosResponseClear());
  }, [postphotosResponse]);

  useEffect(() => {
    if (putphotosResponse?.type === "success") {
      toast.success(putphotosResponse?.data?.message);
    }
    dispatch(putphotosResponseClear());
  }, [putphotosResponse]);

  const handleDelete = (id) => {
    dispatch(putphotosRequest({ is_deleted: true }, id));
  };

  const groupedPhotos = groupPhotosBy15Min(getphotosResponse?.data?.data || []);
  const timeGroups = Object.entries(groupedPhotos);

  return (
    <div className="main-content">
      <div className="photo-gallery-wrapper">
        {timeGroups.length > 0 ? (
          timeGroups.map(([time, photos]) => (
            <div key={time} className="photo-group-block">
              <h3>{formatTimeGroup(time)}</h3>

              <div className="photo-grid">
                {photos.map((photo, index) => (
                  <img
                    key={photo._id}
                    src={appUrl + photo.image}
                    alt="snap"
                    onClick={() => handleImageClick(photo._id)}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
      <PhotoGallery
        open={open}
        selectedImage={selectedImage}
        handleClose={handleClose}
        images={getphotosResponse?.data?.data?.map((each, index) => ({
          _id: each?._id,
          image: appUrl + each.image,
        }))}
        handleDelete={handleDelete}
        fieldKey="_id"
      />
    </div>
  );
};

export default Photos;
