import store from "../store";
import { postFile } from "@/api";

const fileSizeImage = 1000000;
const fileSizeDocuments = 2000000;
let typeFileText = "";
async function sendFile(value, typeFile) {
  if (value) {
    const isValidFormat = checkTypeFile(value.type, typeFile);
    const isValidSize = checkSizeFile(value.size, typeFile);

    if (isValidFormat && isValidSize) {
      const formData = new FormData();
      formData.append("file", value);
      try {
        const response = await postFile("/files/upload", formData);
        return response.data.filename;
      } catch (error) {
        store.dispatch("sweetalert/errorAlert", {
          title: "Server Error!",
          text: "Silahkan coba kembali!",
        });
      }
    } else {
      return false;
    }
  }
}

function checkTypeFile(valueTypeFile, typeFile) {
  let fileFormat = ["image/png", "image/jpeg"];
  if (typeFile === "xls") {
    fileFormat = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ];
  }
  const isValidFormat = fileFormat.includes(valueTypeFile);
  if (!isValidFormat) {
    store.dispatch("sweetalert/errorAlert", {
      title: "File ini tidak didukung!",
      text: "Silakan ganti file dengan format yg sesuai!",
    });
  }

  return isValidFormat;
}

function checkSizeFile(fileSize, typeFile) {
  let limitFileSize =
    typeFile === "image"
      ? (fileSizeImage, (typeFileText = "Gambar"))
      : (fileSizeDocuments, (typeFileText = "Documentes"));
  let textLimitFileSize = typeFile === "image" ? "1MB" : "2MB";
  let isValid = false;
  if (fileSize <= limitFileSize) {
    isValid = true;
  } else {
    store.dispatch("sweetalert/errorAlert", {
      title: "File terlalu besar!",
      text: `File ${typeFileText} diupload maximal adalah ${textLimitFileSize}!`,
    });
  }
  return isValid;
}

export { sendFile };
