const Minio = require("minio");
// const Fs = require("fs");

// const MinioConfig = {
//   endPoint: "192.168.199.200",
//   port: 9000,
//   useSSL: false,
//   accessKey: "AA0wKk8iKGU0q5OV9X2M",
//   secretKey: "M8d0zKr4FsKJG3DC6A3SScE2AjjAGVM8uUBLmcUB",
// };

// const test = () => {
//   const minioClient = new Minio.Client(MinioConfig);
//   const fileStream = Fs.readFile(`${__dirname}/jdk_8.0.1310.11_64.exe`);
//   // console.log(fileStream);
//   console.log(fileStream);
// const fileName = "jdk_8.0.1310.11_64.exe";

// minioClient.putObject(
//   "app-store",
//   fileName,
//   fileStream,
//   function (err, objInfo) {
//     if (err) {
//       return console.log(err); // err should be null
//     }
//     console.log("Success", objInfo);
//   }
// );
// };

export function initMinio(MinioConfig) {
  if (!MinioConfig) {
    throw new Error("MinioConfig is error!");
  }
  console.log("init");
  return new Minio.Client(MinioConfig);
}

export function putObject({
  minioClient,
  bucketNmae,
  file,
  fileName,
  size,
  callback,
}) {
  const fileStream = Buffer.from(file);
  minioClient.putObject(
    bucketNmae,
    fileName,
    fileStream,
    size,
    callback ||
      function (err, objInfo) {
        if (err) {
          return console.log(err); // err should be null
        }
        console.log("Success", objInfo);
      }
  );
}

// module.exports = {
//   initMinio,
//   putObject,
// };
