import { getVideos } from "@/app/api/videoOnline";
import CardVideo from "./CardVideo";



interface VideoInterface {
  _id: string;
  title: string;
  description: string;
  like: boolean;
  url: string;
  __v: number;
}

export default async function ListaVideos() {
  const data = await getVideos()
 console.log({data})
  return (
    <ul className=" grid gap-8">
      {data.videos.map(({ _id, title, url }: VideoInterface) => (
        <>
          <CardVideo key={_id} id={_id} title={title} url={url} />
        </>
      ))}
    </ul>
  );
}
