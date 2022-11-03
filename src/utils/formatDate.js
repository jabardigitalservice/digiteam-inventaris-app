function formatDateTime(date) {
  if (date) {
    const newDate = new Date(date);
    const optionsDate = { year: "numeric", month: "long", day: "numeric" };
    const optionsTime = { hour: "2-digit", minute: "2-digit" };
    const formattedDate = `${newDate.toLocaleDateString(
      "id",
      optionsDate
    )} - ${newDate
      .toLocaleTimeString("id", optionsTime)
      .replace(/\./g, ":")} WIB`;
    return formattedDate;
  } else {
    return "-";
  }
}

export { formatDateTime };
