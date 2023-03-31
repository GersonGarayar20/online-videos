import Categorias from "@/components/Categorias";
import ListaVideos from "@/components/ListaVideos";
import Nav from "@/components/Nav";

export default function page() {
  return (
    <div>
      <Nav/>
      <Categorias />
     {/* <ListaVideos/> */}
    </div>
  );
}
