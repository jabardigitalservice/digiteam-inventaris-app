import https from "@/utils/https";

export function fetchList(url, method, params) {
  return https({
    url: url,
    method: method,
    params: params,
  });
}

export function doDetailDelete(url, method, id) {
  return https({
    url: `${url}/${id}`,
    method: method,
  });
}

export function doPostUpdate(url, method, data) {
  return https({
    url: url,
    method: method,
    data,
  });
}

export function getDetail(url, method, id) {
  return https({
    url: `${url}/${id}`,
    method: method,
  });
}

export function putRequest(url, id, data) {
  return https({
    url: `${url}/${id}`,
    method: "PUT",
    data,
  });
}

export function postFile(url, data) {
  return https({
    url: `${url}`,
    method: "POST",
    data,
  });
}

export function downloadFile(url) {
  return https({
    url: `${url}`,
    method: "GET",
    responseType: "blob",
  });
}

export default {
  fetchList,
  doDetailDelete,
  doPostUpdate,
};
