import React from "react";
import { useFavorites } from "../hooks/useFavorites";
import { useActions } from "../hooks/useActions";
import { LazyLoadImage } from "react-lazy-load-image-component";


function CatItem({ props }) {
  const { url, id } = props;
  const { favorites } = useFavorites();
  const { toggleFavorites } = useActions()
  const isExists = favorites.some((cat) => cat.id === props.id)
  return (
    <div className="wrapper__cat-container">
      <LazyLoadImage className="cat-container__img" src={url} alt={"Кошка " + id} width={255} height={255}/>
      <span className={isExists ? "cat-container__favourite-icon-container_like" : "cat-container__favourite-icon-container_no-like"} onClick={() => toggleFavorites(props)}>
        <svg
          className="favourite-icon-container__empty"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="37"
          viewBox="0 0 40 37"
          fill="none"
        >
          <path
            d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z"
            fill="#F24E1E"
          />
        </svg>
        <svg
          className="favourite-icon-container__filled"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <g clipPath="url(#clip0_1_2180)">
            <path
              d="M24 42.7L21.1 40.06C10.8 30.72 4 24.56 4 17C4 10.84 8.84 6 15 6C18.48 6 21.82 7.62 24 10.18C26.18 7.62 29.52 6 33 6C39.16 6 44 10.84 44 17C44 24.56 37.2 30.72 26.9 40.08L24 42.7Z"
              fill="#F24E1E"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2180">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  );
}

export default CatItem;
