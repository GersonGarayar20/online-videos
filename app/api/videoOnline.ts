
const url = "http://localhost:3001/";

export const getVideos = async () => {
  const res = await fetch(`${url}videos`)
  const json= await res.json();
  return json;
};

export const getVideo = async () => {
  const res = await fetch(`${url}videos`)
  const json= await res.json();
  return json;
}