import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 10%;
  padding: 5%;

  button {
    align-self: center;
    padding: 12px;
    background: none;
    border-radius: 5px;
    background-color: #ff6600;
    border: none;
    transition: all 0.1s ease-out;
  }
  button:disabled {
    background-color: #ff660045;
    color: grey;
  }
  button:hover {
    transform: translateX(1px) translateY(-1px);
    -webkit-box-shadow: 2px 1px 2px 2px rgba(232, 232, 232, 1);
    box-shadow: 2px 1px 2px 2px rgba(232, 232, 232, 1);
  }
  label {
    padding: 12px 0;
    font-size: 18px;
  }
  .form-image {
    background: transparent;
    padding: 12px 0;
  }
  input,
  textarea {
    padding: 12px;
    background-color: #e8e8e8;
    border: none;
    border-radius: 5px;
  }
  textarea {
    height: 50vh;
  }
  input:focus,
  textarea:focus {
    outline: none;
    border: 2px solid grey;
  }
  .progress {
    position: absolute;
    top: 45vh;
    right: 50vw;
    z-index: 10;
  }
`;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CreateArticle() {
  const token =
    useSelector((state) => state.token) ||
    window.sessionStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [description, setDes] = useState("");
  const [file, setFile] = useState();
  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (title.length > 2 && description.length > 10 && file) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [title, file, description]);

  const submit = () => {
    setLoading(true);
    const formData = new FormData();

    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    fetch("https://teshank.pythonanywhere.com/api/create/", {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.response === "success") {
          setOpen(true);
          setLoading(false);
        }
      });
    setLoading(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "20%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "20%" }}
      transition={{ transition: "easeOut" }}
    >
      <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Article uploaded successfully!
        </Alert>
      </Snackbar>
      <StyledForm>
        {isLoading ? (
          <div className="progress">
            <CircularProgress />
          </div>
        ) : null}
        <label>Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          id="description"
          onChange={(e) => setDes(e.target.value)}
        ></textarea>
        <label id="image">Upload Image</label>
        <input
          className="form-image"
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button className="submit" onClick={submit} disabled={!isValid}>
          Upload
        </button>
      </StyledForm>
    </motion.div>
  );
}
