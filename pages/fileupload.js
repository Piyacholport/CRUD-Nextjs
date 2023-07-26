import React from 'react';
import { useState } from "react";
function checkFileType(file) {
  const acceptedTypes = ['image/jpeg', 'image/png'];

  if (acceptedTypes.includes(file.type)) {
    console.log('File is a JPEG or PNG image.');
  } else {
    console.log('File is not a JPEG or PNG image.');
  }
}

function MyFileInput() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      checkFileType(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default MyFileInput;



  