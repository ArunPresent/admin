import axios from "axios";

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`${process.env.REACT_APP_API}/admin/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

// post

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`${process.env.REACT_APP_API}/admin/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`${process.env.REACT_APP_API}/admin/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

// update

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(`${process.env.REACT_APP_API}/admin/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

//deleteData
export const deleteDataAPI = async (url, token, data) => {
  const res = await axios.delete(`${process.env.REACT_APP_API}/admin/${url}`, {
    headers: { Authorization: token, id: data },
  });
  return res;
};
