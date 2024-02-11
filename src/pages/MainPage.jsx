import CatItem from "../components/CatItem"
import { useGetCatsQuery } from "../stores/cats/catsApi"


export default function MainPage() {
  let { data: catsData, isLoading, refetch, isFetching } = useGetCatsQuery();
  console.log(catsData?.length)
  return (
    <div className="container">
      {(isLoading || isFetching) && (
        <p className="container__loading">...загрузка котиков...</p>
      )}
      <div className="wrapper">
        {!isFetching &&
          !isLoading &&
          catsData.map((item) => <CatItem key={item.id} props={item} />)}
      </div>
      {!isFetching && !isLoading && (
        <button className="container__load-more" onClick={() => refetch()}>
          Загрузить новых котиков
        </button>
      )}
    </div>
  );
}
