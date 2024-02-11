import CatItem from "../components/CatItem";
import { useFavorites } from "../hooks/useFavorites";

function FavouritePage() {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      {favorites.length === 0 && (
        <h2 className="container__nothing">Здесь пока пусто :(</h2>
      )}
      <div className="wrapper">
        {favorites.length > 0 &&
          favorites.map((item) => <CatItem key={item.id} props={item} />)}
      </div>
    </div>
  );
}

export default FavouritePage;
