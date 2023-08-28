const Minio = require("minio");
const Fs = require("fs");

const MinioConfig = {
  endPoint: "192.168.199.200",
  port: 9000,
  useSSL: false,
  accessKey: "AA0wKk8iKGU0q5OV9X2M",
  secretKey: "M8d0zKr4FsKJG3DC6A3SScE2AjjAGVM8uUBLmcUB",
};

const test = () => {
  const minioClient = new Minio.Client(MinioConfig);
  console.log(Fs.readFile)
  const fileStream = Fs.readFileSync(`${__dirname}/banner.jpg`);
  console.log(fileStream);
  const fileName = "banner.jpg";

  minioClient.putObject(
    "app-store",
    fileName,
    fileStream,
    function (err, objInfo) {
      if (err) {
        return console.log(err); // err should be null
      }
      console.log("Success", objInfo);
    }
  );
};

// test();

// function initMinio(MinioConfig) {
//   if (!MinioConfig) {
//     throw new Error("MinioConfig is error!");
//   }
//   console.log("init");
//   return new Minio.Client(MinioConfig);
// }

// function putObject({
//   minioClient,
//   bucketNmae,
//   file,
//   fileName,
//   size,
//   callback,
// }) {
//   const fileStream = Buffer.from(file);
//   minioClient.putObject(
//     bucketNmae,
//     fileName,
//     fileStream,
//     size,
//     callback ||
//       function (err, objInfo) {
//         if (err) {
//           return console.log(err); // err should be null
//         }
//         console.log("Success", objInfo);
//       }
//   );
// }

// module.exports = {
//   // initMinio,
//   // putObject,
//   Minio
// };

module.exports = test