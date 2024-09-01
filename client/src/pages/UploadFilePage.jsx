import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './FileUpload.css'; // Import your external CSS file here

const FileUpload = () => {
  let navigate = useNavigate();
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSize((file.size / 1024).toFixed(2) + " KB");
    }
  };

  const handleUploadClick = () => {
    // Handle the file upload logic here
    console.log("File uploaded");
  };

  return (
    <div>

   
<button
  type="button"
  className="upload-button"
  onClick={() => {
    navigate('/');
  }}
  style={{ position: "relative", width: "0px", justifyContent: "center", padding: "4.5px 27px"}}
>
  <span className="material-icons-outlined" style={{ verticalAlign: "middle" }}>arrow_back</span>
</button>
    <form className="form-container" encType="multipart/form-data">
      <div className="upload-files-container">
        <div className="drag-file-area">
          <span className="material-icons-outlined upload-icon">file_upload</span>
          <h3 className="dynamic-message">Drag & drop any file here</h3>
          <label className="label">
            or{" "}
            <span className="browse-files">
              <input
                type="file"
                className="default-file-input"
                onChange={handleFileChange}
              />
              <span className="browse-files-text">browse file  </span>
              <span>from device</span>
            </span>
          </label>
        </div>
        <span className="cannot-upload-message">
          <span className="material-icons-outlined">error</span> Please select a file first{" "}
          <span className="material-icons-outlined cancel-alert-button">cancel</span>
        </span>
        {fileName && (
          <div className="file-block">
            <div className="file-info">
              <span className="material-icons-outlined file-icon">description</span>
              <span className="file-name">{fileName}</span> | <span className="file-size">{fileSize}</span>
            </div>
            {/* <span className="material-icons remove-file-icon">delete</span> */}
            {/* <div className="progress-bar"></div>
             */}
    
            
          </div>
          
        )}
        <button type="button" className="upload-button" onClick={handleUploadClick} style={{position:"relative", width: "auto"}}>
                 Upload
        </button>
       
      </div>
     
    </form>
    </div>
  );
};

export default FileUpload;
