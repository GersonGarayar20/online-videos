import CardVideo from "./CardVideo";

const url = "http://localhost:3001/videos";

const getVideos = async () => {
  const res = await fetch(url).then((res) => res.json());
  // console.log(res);
  return res;
};

interface VideoInterface {
  _id: string;
  title: string;
  description: string;
  like: boolean;
  url: string;
  __v: number;
}

export default async function ListaVideos() {
  const data = await getVideos();

  return (
    <ul className=" grid md:grid-cols-3 gap-8">
      {data.videos.map(({ _id, title, url }: VideoInterface) => (
        <>
          <CardVideo key={_id} id={_id} title={title} url={url} />
          <CardVideo key={_id} id={_id} title={title} url={url} />
          <CardVideo key={_id} id={_id} title={title} url={url} />
          <CardVideo key={_id} id={_id} title={title} url={url} />
          <CardVideo key={_id} id={_id} title={title} url={url} />
        </>
      ))}
    </ul>
  );
}
