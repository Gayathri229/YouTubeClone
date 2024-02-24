import React, { useEffect, useState } from "react";
import { searchResultsApi } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import SearchPageVideoCard from "./SearchPageVideoCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchResultUrl = searchResultsApi(searchParams.get("q"));
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSearchResults();
  }, [searchParams.get("q")]);

  const fetchSearchResults = async () => {
    const data = await fetch(searchResultUrl);
    const json = await data.json();
    console.log("Search Results", json.items);
    setSearchResults(json?.items);
  };

  return searchResults.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col mx-20 my-10">
      {searchResults.map((video) => {
        if (video?.id?.kind === "youtube#video") {
          return (
            <Link to={"watch?v=" + video?.id} key={video?.id?.videoId}>
              <SearchPageVideoCard info={video} query={searchParams.get("q")}/>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default SearchResults;
