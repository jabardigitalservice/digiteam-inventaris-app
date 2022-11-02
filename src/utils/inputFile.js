import store from "../store";

function sendFile(value) {
  if (value) {
    const isValidFormat = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ].includes(value.type);
    if (isValidFormat) {
      const formData = new FormData();
      formData.append("file", value);
      store.dispatch("sendFile", formData);
      return true;
    } else {
      store.dispatch("sweetalert/errorAlert", {
        title: "File ini tidak didukung!",
        text: "Silakan ganti file dengan format yg sesuai!",
      });
      return false;
    }
  }
}

function checkFile() {}

export { sendFile };
