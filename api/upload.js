// import multer from 'multer';
// import sharp from 'sharp';

// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: {
//     fileSize: 10 * 1024 * 1024, // 10MB
//   },
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//       cb(null, true);
//     } else {
//       cb(new Error('Only JPEG and PNG files are allowed.'));
//     }
//   },
// });

// export default upload.single('file');
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG and PNG files are allowed.'));
    }
  },
});

export default upload.single('file');
