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

export default {
  fetchList,
  doDetailDelete,
  doPostUpdate,
};
