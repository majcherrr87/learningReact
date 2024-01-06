import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";

export function Favourites() {
  const favourites = useLoaderData();

  return <FavouritesList favourites={favourites} />;
}
