import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./photos.css";
import {
  getphotosListRequest,
  postphotosResponseClear,
} from "../../Redux/Photos/PhotosActions";
import { appUrl } from "../../utils/axios";
import toast from "react-hot-toast";
import PhotoGallery from "../../components/ImagePreview";

const Photos = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
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
    if (putphotosLoading || postphotosLoading) return;

    dispatch(
      getphotosListRequest({
        quickFilter,
        filter: { sortBy, page },
        keyword: "",
        count: pagelimit,
      })
    );
  }, [putphotosLoading, postphotosLoading, page, pagelimit, sortBy]);

  useEffect(() => {
    if (!postphotosResponse) return;

    if (postphotosResponse?.type === "success") {
      toast.success(postphotosResponse?.data?.message);
    }
    dispatch(postphotosResponseClear());
  }, [postphotosResponse]);

  return (
    <div className="main-content">
      <h3>September 2023</h3>
      <div className="timing-cls">{/* <h5>Time 15.00 - 15.15</h5> */}</div>

      <div className="photo-grid">
        {getphotosResponse?.data?.data?.length > 0 ? (
          getphotosResponse?.data?.data?.map((each, index) => {
            return (
              <img
                key={index}
                src={appUrl + each.image}
                alt="snap"
                onClick={() => handleImageClick(each?._id)}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
      {console.log(open, selectedImage, "checkingggg")}
      <PhotoGallery
        open={open}
        selectedImage={selectedImage}
        handleClose={handleClose}
        images={getphotosResponse?.data?.data?.map((each, index) => ({
          _id: each?._id,
          image: appUrl + each.image,
        }))}
      />
    </div>
  );
};

export default Photos;
