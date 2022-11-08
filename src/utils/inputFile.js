import store from "../store";
import { postFile } from "@/api";

async function sendFile(value, typeFile) {
  if (value) {
    const isValidFormat = checkTypeFile(value.type, typeFile);
    const isValidSize = checkSizeFile(value.size);

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

function checkSizeFile(fileSize) {
  let isValid = false;
  if (fileSize <= 2000000) {
    isValid = true;
  } else {
    store.dispatch("sweetalert/errorAlert", {
      title: "File terlalu besar!",
      text: "File yang diupload maximal adalah 2MB!",
    });
  }
  return isValid;
}

export { sendFile };
