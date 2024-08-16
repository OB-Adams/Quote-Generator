import { useState, useEffect, useRef } from "react";

function QuoteGenerator() {
  const baseURL = "https://api.api-ninjas.com/v1/quotes";
  const apiKey = "PfIjtj6Y0SyGD7Ecv8xvIA==15TfHXuBa3rhUidI";

  const [fetchNumber, setFetchNumber] = useState(0);
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchQuote = async () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch(baseURL, {
          headers: {
            "X-Api-Key": apiKey,
          },
          signal: abortControllerRef.current.signal,
        });

        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        console.error(error);

        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }

        setError(error);
      }
    };

    fetchQuote();
  }, [fetchNumber]);

  const handleClick = () => {
    setFetchNumber(fetchNumber + 1);
  };

  const tweetQuote = () => {
    if (quote) {
      const tweetText = `${quote.quote} - ${quote.author}`;
      const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText
      )}`;
      window.open(twitterURL, "_blank");
    }
  };

  return (
    <>
      <div
        id="quote-box"
        className="flex flex-col w-4/5 max-w-lg p-8 text-center bg-white rounded-lg shadow-md font-sans"
      >
        {error ? (
          <p className="text-red-500">Something went wrong. Please try again!</p>
        ) : (
          <>
            <p id="text" className="text-xl mb-5 italic text-gray-800">
              <i className="fa-solid fa-quote-left text-gray-800"></i>{" "}
              {quote ? quote.quote : "Loading..."}
            </p>
            <p id="author" className="text-lg mb-5 text-gray-500">
              - {quote ? quote.author : "Unknown"}
            </p>
          </>
        )}

        <div className="nfooter flex justify-between items-center mt-5">
          <button
            onClick={tweetQuote}
            className="socials bg-black text-white py-2 px-4 rounded-md hover:scale-105 active:scale-100 transition-all duration-300"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </button>
          <button
            id="new-quote"
            onClick={handleClick}
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:scale-105 active:scale-100 transition-colors duration-300"
          >
            New quote
          </button>
        </div>
      </div>
      <div className="footer mt-6 text-center text-white font-mono">
        Designed and Coded by{" "}
        <a href="https://github.com/OB-Adams" className="text-white underline">
          OB
        </a>
      </div>
    </>
  );
}

export default QuoteGenerator;