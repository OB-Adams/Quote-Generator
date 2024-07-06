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
      <div id="quote-box">
        {error && <p>Something went wrong. Please try again!</p>}
        <p id="text">
          <i className="fa-solid fa-quote-left" style={{ color: "#333" }}></i>{" "}
          {quote ? quote.quote : "Loading..."}
        </p>
        <p id="author">- {quote ? quote.author : "Unknown"}</p>
        <div className="nfooter">
          <button onClick={tweetQuote} className="socials">
            <i className="fa-brands fa-x-twitter" style={{ color: "#fff" }}></i>
          </button>
          <button id="new-quote" onClick={handleClick}>
            New quote
          </button>
        </div>
      </div>
      <div className="footer">
        Designed and Coded by <a href="https://github.com/OB-Adams">OB</a>
      </div>
    </>
  );
}

export default QuoteGenerator;
