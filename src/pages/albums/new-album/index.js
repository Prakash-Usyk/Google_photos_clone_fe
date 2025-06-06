import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getalbumsByIdRequest,
  postalbumsRequest,
  postalbumsResponseClear,
  putalbumsRequest,
  putalbumsResponseClear,
} from "../../../Redux/Albums/AlbumsActions";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { getphotosListRequest } from "../../../Redux/Photos/PhotosActions";
import { appUrl } from "../../../utils/axios";
import {
  deletephotosAlbumMappingRequest,
  deletephotosAlbumMappingResponseClear,
  getphotosAlbumMappingListRequest,
} from "../../../Redux/PhotosAlbumMapping/PhotosAlbumMappingActions";
import PhotoGallery from "../../../components/ImagePreview";

const dummyImages = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/160",
  "https://via.placeholder.com/170",
];

export default function AlbumForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode, id } = useParams();
  const isEdit = mode === "edit";
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [submitFormik, setSubmitFormik] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [alreadyselectedImages, setalreadyselectedImages] = useState([]);
  const [initialData, setInitialData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imgId) => {
    setSelectedImage(imgId);
    setOpen(true);
  };

  const { postalbumsResponse, putalbumsResponse } = useSelector(
    (state) => state.albums
  );

  const { getphotosResponse } = useSelector((state) => state.photos);

  const { getphotosAlbumMapResponse, deletephotosAlbumMapResponse } =
    useSelector((state) => state.photosAlbum);

  useEffect(() => {
    if (!postalbumsResponse) return;

    if (postalbumsResponse?.type === "success") {
      toast.success(postalbumsResponse?.data?.message);
      navigate("/albums");
    }
    dispatch(postalbumsResponseClear());
  }, [postalbumsResponse]);

  useEffect(() => {
    if (putalbumsResponse?.type === "success") {
      toast.success(putalbumsResponse?.data?.message);
      navigate("/albums");
    }
    dispatch(putalbumsResponseClear());
  }, [putalbumsResponse]);

  useEffect(() => {
    if (deletephotosAlbumMapResponse?.type === "success") {
      toast.success(deletephotosAlbumMapResponse?.data?.message);
    }
    dispatch(deletephotosAlbumMappingResponseClear());
  }, [deletephotosAlbumMapResponse]);

  const handleImageSelect = (image) => {
    setSelectedImages((prev) =>
      prev.includes(image)
        ? prev.filter((img) => img !== image)
        : [...prev, image]
    );
  };

  useEffect(() => {
    if (!id || !isEdit) return;

    dispatch(
      getphotosAlbumMappingListRequest({
        quickFilter: {},
        filter: { sortBy: "", page: 1 },
        keyword: "",
        count: "all",
        album_id: id,
      })
    );
  }, [mode, id, deletephotosAlbumMapResponse]);

  useEffect(() => {
    dispatch(
      getphotosListRequest({
        quickFilter: {},
        filter: { sortBy: "", page: 1 },
        keyword: "",
        count: "all",
      })
    );
  }, []);

  useEffect(() => {
    if (isEdit && getphotosAlbumMapResponse?.type === "success") {
      const images = getphotosAlbumMapResponse?.data?.data?.map((x) => {
        return {
          _id: x?.photos?._id,
          image: x?.photos?.image,
        };
      });
      const album = getphotosAlbumMapResponse?.data?.data?.[0]?.album || {};
      setInitialData({
        name: album.name || "",
        description: album.description || "",
        meta_data: album.meta_data || "",
        images: images || [],
      });
      setalreadyselectedImages(images?.map((x) => x?._id));
      setIsLoading(false);
    }
  }, [id, getphotosAlbumMapResponse]);

  const handleModalSubmit = () => {
    if (submitFormik) {
      const updatedValues = {
        ...submitFormik.values,
        images: selectedImages,
        meta_data: submitFormik.values.meta_data
          ?.split("\n")
          ?.map((s) => s.trim())
          .filter(Boolean),
      };

      dispatch(postalbumsRequest(updatedValues));
      setImageModalOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  const handleDelete = (id) => {
    dispatch(deletephotosAlbumMappingRequest(id));
  };

  return (
    <>
      <Dialog
        open={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        fullScreen
      >
        <DialogTitle
          sx={{
            backgroundColor: "white",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 16px",
          }}
        >
          Select Images
          <Button
            variant="text"
            onClick={() => setImageModalOpen(false)}
            sx={{ color: "#fff" }}
          >
            Close
          </Button>
        </DialogTitle>

        <DialogContent
          sx={{
            backgroundColor: "white",
            flex: 1,
            overflowY: "auto",
            padding: 2,
          }}
        >
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {(() => {
              const filteredImages = getphotosResponse?.data?.data?.filter(
                (each) =>
                  !alreadyselectedImages.some(
                    (img) => img.toString() === each._id.toString()
                  )
              );

              if (!filteredImages || filteredImages.length === 0) {
                return (
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      padding: "40px 0",
                      color: "#666",
                      fontSize: "18px",
                      fontStyle: "italic",
                      border: "2px dashed #ccc",
                      borderRadius: "12px",
                      background: "#f9f9f9",
                    }}
                  >
                    No images found
                  </div>
                );
              }

              return filteredImages.map((each, index) => (
                <img
                  key={index}
                  src={appUrl + each.image}
                  alt="snap"
                  onClick={() => handleImageSelect(each._id)}
                  style={{
                    width: 300,
                    height: 300,
                    border: selectedImages.includes(each._id)
                      ? "3px solid blue"
                      : "1px solid gray",
                    cursor: "pointer",
                    objectFit: "cover",
                  }}
                />
              ));
            })()}
          </div>
        </DialogContent>

        <DialogActions
          sx={{
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <Button
            onClick={() => setImageModalOpen(false)}
            sx={{ color: "black", border: "1px solid black" }}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleModalSubmit}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <div className="album-header">
        <div className="left-icons" onClick={() => navigate("/albums")}>
          <span className="material-icons">arrow_back</span>
        </div>

        <div className="right-icons">
          <span className="material-icons">ios_share</span>
          <span className="material-icons">more_vert</span>
        </div>
      </div>

      {!isEdit || !isLoading ? (
        <Formik
          initialValues={
            initialData || {
              name: "",
              description: "",
              meta_data: "",
              images: [],
            }
          }
          enableReinitialize
          onSubmit={(values, actions) => {
            if (isEdit) {
              dispatch(putalbumsRequest(values, id));
            } else {
              setSubmitFormik({ values, actions });
              setImageModalOpen(true);
            }
          }}
        >
          {({ handleSubmit }) => (
            <Form className="album-form-container">
              <Field
                name="name"
                placeholder="Add a title"
                className="album-title-input"
              />

              <Field
                as="textarea"
                name="description"
                placeholder="Add a description"
                className="album-textarea"
              />

              <Field
                as="textarea"
                name="meta_data"
                placeholder="Enter meta data (one per line)"
                className="album-textarea"
              />

              <div className="album-form-btns">
                <button type="submit" className="add-photos-button">
                  Add Photos
                </button>

                {isEdit && (
                  <button
                    type="button"
                    className="add-photos-button"
                    onClick={handleSubmit}
                  >
                    Update Album
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <p>Loading form...</p>
      )}

      {isEdit && (
        <div className="photo-grid">
          {getphotosAlbumMapResponse?.data?.data?.length > 0 ? (
            getphotosAlbumMapResponse?.data?.data?.map((each, index) => {
              return (
                <img
                  key={index}
                  src={appUrl + each?.photos?.image}
                  alt="snap"
                  onClick={() => handleImageClick(each?._id)}
                />
              );
            })
          ) : (
            <div className="album-image-add"></div>
          )}
        </div>
      )}

      <PhotoGallery
        open={open}
        selectedImage={selectedImage}
        handleClose={handleClose}
        images={getphotosAlbumMapResponse?.data?.data?.map((each, index) => ({
          _id: each?.photos?._id,
          image: appUrl + each?.photos.image,
          parent_id: each?._id,
        }))}
        handleDelete={handleDelete}
        fieldKey="parent_id"
      />
    </>
  );
}
