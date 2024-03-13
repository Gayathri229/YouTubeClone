import React, { useEffect, useState } from "react";
import { searchResultsApi } from "../utils/constants";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import SearchPageVideoCard from "./SearchPageVideoCard";
import { useDispatch } from "react-redux";
import { showShortMenu } from "../utils/appSlice";
import SearchResultShimmer from "./SearchResultShimmer";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchResultUrl = searchResultsApi(searchParams.get("q"));
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const currentPath = location.pathname;
  const urlPrefix = currentPath.startsWith("/search") && "";
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(showShortMenu());
    fetchSearchResults();
  }, [searchParams.get("q")]);

  const fetchSearchResults = async () => {
    const data = await fetch(searchResultUrl);
    const json = await data.json();
    setSearchResults(json?.items);
  };

  return searchResults.length === 0 ? (
    <SearchResultShimmer />
  ) : (
    <div className="flex flex-col w-10/12 m-6 ml-12 mt-14 font-roboto sm:w-screen sm:ml-0">
      {searchResults.map((video) => {
        if (video?.id?.kind === "youtube#video") {
          return (
            <Link to={`${urlPrefix}/watch?v=` + video?.id?.videoId} key={video?.id?.videoId}>
              <SearchPageVideoCard info={video} query={searchParams.get("q")} />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default SearchResults;
