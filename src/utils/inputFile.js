import store from "../store";
import { postFile } from "@/api";

async function sendFile(value) {
  if (value) {
    const isValidFormat = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ].includes(value.type);
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

export { sendFile };
