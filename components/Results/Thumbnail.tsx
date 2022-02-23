import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const name = result.title || result.original_name;
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${result.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        className="rounded-lg group-hover:rounded-none"
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt={name}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type}`} &#9679;{" "}
          {result.release_date || result.first_air_date} &#9679;{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
