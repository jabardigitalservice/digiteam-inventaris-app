import store from "../store";
import { postFile } from "@/api";

const fileSizeImage = 1000000;
const fileSizeDocuments = 2000000;

async function sendFile(value, typeFile) {
  if (value) {
    const isValidFormat = checkTypeFile(value.type, typeFile);
    const isValidSize = checkSizeFile(value.size, typeFile);

    if (isValidFormat && isValidSize) {
      store.dispatch("sweetalert/loadingAlert");
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
  } else if (typeFile === "doc") {
    fileFormat = [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
      "application/pdf",
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
  let typeFileText = "Gambar";
  let valueLimitFileSize = fileSizeImage;
  let textLimitFileSize = "1MB";
  let isValid = false;

  if (typeFile !== "image") {
    typeFileText = "Documents";
    valueLimitFileSize = fileSizeDocuments;
    textLimitFileSize = "2MB";
  }

  if (fileSize <= valueLimitFileSize) {
    isValid = true;
  } else {
    store.dispatch("sweetalert/errorAlert", {
      title: "File terlalu besar!",
      text: `File ${typeFileText} yang diupload maximal adalah ${textLimitFileSize}!`,
    });
  }

  return isValid;
}

export { sendFile };
