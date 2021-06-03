export const checkImage = (file) => {
  let err = "";
  if (!file) return (err = "file does not exist");
  if (file.size > 1024 * 1024)
    //1mb
    err = "Upload file upto 1 mb";
};

export const imageUpload = async (images) => {
  let imgArr = [];
  for (const item of images) {
    const formData = new FormData();
    if (item.camera) {
      formData.append("file", item.camera);
    } else {
      formData.append("file", item);
    }
 

    const data = await res.json();
    imgArr.push({ public_id: data.public_id, url: data.secure_url });
  }
  return imgArr;
};
