import React, { useEffect, useState } from "react";
import NewsItem from "./components/NewsItem";
import Navbar from "./components/Navbar";
import { useEmail } from "./components/EmailContext";

const News = (props) => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);
  const { email } = useEmail();

  const country = "in";
  const category = "sports";
  const apiKey = "40aee97bdb7e4bc9b2be903d9ece70df";

  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

  const handleNextClick = () => {
    console.log("Next page");
  };
  const handlePrevClick = () => {
    console.log("Previous page");
  };

  useEffect(() => {
    const fetchUserPreferences = async () => {
      try {
        const response = await fetch("/getPref/bhavya@poddar.com");
        if (!response.ok) {
          throw new Error("Failed to fetch user preferences");
        }
        const data = await response.json();
        // setUserPreferences(data);

        console.log("Prefdata :" + data);
      } catch (error) {
        setError(error.message);
        // setLoading(false);
      }
    };

    fetchUserPreferences();
  }, [email]);

  const fetchData = async () => {
    console.log("Fetching data");
    let data = await fetch(apiUrl);
    let parsedData = await data.json();

    setNewsData(parsedData.articles);
    console.log(parsedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar title="NewsMonkey" />

      <div className="container mx-auto my-3">
        <h1 className="text-3xl font-bold mb-3">NewsMonkey - Top Headlines</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {newsData.map((article) => (
            <div key={article.url}>
              <NewsItem
                title={article.title}
                description={article.description}
                newsUrl={article.url}
                imageUrl={article.urlToImage}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between py-3">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-600"
            type="button"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-600"
            type="button"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
