import { useRouter } from "next/router";
import requests from "../../utils/requests";

function Nav() {
  const router = useRouter();
  const query = router.query;

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide py-3">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className={`cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500 last:pr-24 ${
              query.genre === key && "text-green-500 hover:text-green-500"
            }`}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-14 w-1/12"></div>
    </nav>
  );
}

export default Nav;
