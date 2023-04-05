import Categorias from "@/components/Categorias";
import ListaVideos from "@/components/ListaVideos";
import MenuAside from "@/components/MenuAside";

export default function page() {
  return (
    <div className="flex">
      <MenuAside />
      <div className="flex-1">
        <div className="py-4">
          <nav>buscador</nav>
        </div>
        <Categorias />
        <ListaVideos />
      </div>
    </div>
  );
}
