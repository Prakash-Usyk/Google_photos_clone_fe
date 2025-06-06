import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postalbumsRequest,
  postalbumsResponseClear,
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

const dummyImages = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/160",
  "https://via.placeholder.com/170",
];

export default function AlbumForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [submitFormik, setSubmitFormik] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const { postalbumsResponse } = useSelector((state) => state.albums);

  const { getphotosResponse } = useSelector((state) => state.photos);

  useEffect(() => {
    if (!postalbumsResponse) return;

    if (postalbumsResponse?.type === "success") {
      toast.success(postalbumsResponse?.data?.message);
      navigate("/albums");
    }
    dispatch(postalbumsResponseClear());
  }, [postalbumsResponse]);

  const handleImageSelect = (image) => {
    setSelectedImages((prev) =>
      prev.includes(image)
        ? prev.filter((img) => img !== image)
        : [...prev, image]
    );
  };

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

  const handleModalSubmit = () => {
    if (submitFormik) {
      const updatedValues = {
        ...submitFormik.values,
        images: selectedImages,
        meta_data: submitFormik.values.meta_data
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
      };

      dispatch(postalbumsRequest(updatedValues));
      setImageModalOpen(false);
    }
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
            backgroundColor: "w",
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
            {getphotosResponse?.data?.data?.map((each, index) => (
              <img
                key={index}
                src={appUrl + each.image}
                alt="snap"
                onClick={() => handleImageSelect(each?._id)}
                style={{
                  width: 300,
                  height: 300,
                  border: selectedImages.includes(each?._id)
                    ? "3px solid blue"
                    : "1px solid gray",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
              />
            ))}
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
            sx={{ color: "#fff" }}
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

      <Formik
        initialValues={{
          name: "",
          description: "",
          meta_data: "",
          images: [],
        }}
        onSubmit={(values, actions) => {
          setSubmitFormik({ values, actions });
          setImageModalOpen(true);
        }}
      >
        {() => (
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

            <button type="submit" className="add-photos-button">
              Add Photos
            </button>
          </Form>
        )}
      </Formik>
      <div className="album-image-add"></div>
    </>
  );
}
