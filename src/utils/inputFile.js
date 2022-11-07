import store from "../store";
import { postFile } from "@/api";

async function sendFile(value, type_file) {
  if (value) {
    const isValidFormat = checkTypeFile(value.type, type_file);

    if (isValidFormat) {
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
      store.dispatch("sweetalert/errorAlert", {
        title: "File ini tidak didukung!",
        text: "Silakan ganti file dengan format yg sesuai!",
      });
      return false;
    }
  }
}

function checkTypeFile(value_type_file, type_file) {
  let fileFormat = ["image/png", "image/jpeg"];
  if (type_file === "xls") {
    fileFormat = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ];
  }

  const isValidFormat = fileFormat.includes(value_type_file);

  return isValidFormat;
}

export { sendFile };
