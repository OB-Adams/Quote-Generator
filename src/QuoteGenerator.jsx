import { useState } from "react";

function QuoteGenerator() {
  const Quotes = [
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    {
      quote: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius",
    },
    {
      quote: "May you live all the days of your life.",
      author: "Jonathan Swift",
    },
    {
      quote: "Life itself is the most wonderful fairy tale.",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Do not let making a living prevent you from making a life.",
      author: "John Wooden",
    },
    {
      quote: "Life is made of ever so many partings welded together.",
      author: "Charles Dickens",
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      quote: "Life is trying things to see if they work.",
      author: "Ray Bradbury",
    },
    {
      quote:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      quote:
        "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "Oscar Wilde",
    },
    {
      quote:
        "Good friends, good books, and a sleepy conscience: this is the ideal life.",
      author: "Mark Twain",
    },
    {
      quote: "Life would be tragic if it weren't funny.",
      author: "Stephen Hawking",
    },
    {
      quote: "Live in the sunshine, swim the sea, drink the wild air.",
      author: "Ralph Waldo Emerson",
    },
    { quote: "The unexamined life is not worth living.", author: "Socrates" },
    { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    {
      quote: "The best way to predict your future is to create it.",
      author: "Abraham Lincoln",
    },
    {
      quote:
        "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha",
    },
    {
      quote:
        "Life is ten percent what happens to us and ninety percent how we respond to it.",
      author: "Charles R. Swindoll",
    },
    { quote: "Keep calm and carry on.", author: "Winston Churchill" },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
    {
      quote:
        "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
    },
    {
      quote:
        "If you want to live a happy life, tie it to a goal, not to people or things.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Never let the fear of striking out keep you from playing the game.",
      author: "Babe Ruth",
    },
    {
      quote:
        "Money and success don’t change people; they merely amplify what is already there.",
      author: "Will Smith",
    },
    {
      quote:
        "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      quote: "Not how long, but how well you have lived is the main thing.",
      author: "Seneca",
    },
    {
      quote:
        "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt",
    },
    {
      quote:
        "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
      author: "Henry Ford",
    },
    {
      quote: "In order to write about life first you must live it.",
      author: "Ernest Hemingway",
    },
    {
      quote:
        "The big lesson in life, baby, is never be scared of anyone or anything.",
      author: "Frank Sinatra",
    },
    {
      quote:
        "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",
      author: "Unknown",
    },
    {
      quote:
        "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
      author: "Leo Burnett",
    },
    {
      quote:
        "Life is not a problem to be solved, but a reality to be experienced.",
      author: "Soren Kierkegaard",
    },
    { quote: "The unexamined life is not worth living.", author: "Socrates" },
    { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    {
      quote:
        "The way I see it, if you want the rainbow, you gotta put up with the rain.",
      author: "Dolly Parton",
    },
    {
      quote:
        "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.",
      author: "Hillary Clinton",
    },
    {
      quote:
        "Don't settle for what life gives you; make life better and build something.",
      author: "Ashton Kutcher",
    },
    {
      quote:
        "Everything negative – pressure, challenges – is all an opportunity for me to rise.",
      author: "Kobe Bryant",
    },
    { quote: "I like criticism. It makes you strong.", author: "LeBron James" },
    {
      quote: "You never really learn much from hearing yourself speak.",
      author: "George Clooney",
    },
    {
      quote:
        "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
      author: "Celine Dion",
    },
    {
      quote:
        "Life is never easy. There is work to be done and obligations to be met—obligations to truth, to justice, and to liberty.",
      author: "John F. Kennedy",
    },
    { quote: "Live for each second without hesitation.", author: "Elton John" },
    {
      quote: "Life is short, and it is here to be lived.",
      author: "Kate Winslet",
    },
  ];

  let randomNo = Math.floor(Math.random() * Quotes.length);
  const [quote, setQuote] = useState(Quotes[randomNo]);

  const handleClick = () => {
    randomNo = Math.floor(Math.random() * Quotes.length);
    setQuote(Quotes[randomNo]);
  };

  const tweetQuote = () => {
    const tweetText = `${quote.quote} - ${quote.author}`;
    const twitterURL = `https://twitter.com/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterURL, '_blank')
  }
  return (
    <>
    <div id="quote-box">
      <p id="text"><i className="fa-solid fa-quote-left" style={{color: "#333"}}></i> {quote.quote}</p>
      <p id="author">- {quote.author}</p>
      <div className="nfooter">
        <div className="socials">
          <button onClick={tweetQuote}>
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><i className="fa-brands fa-x-twitter" style={{color: "#fff"}}></i></a>
          </button>
        </div>
        <button id="new-quote" onClick={handleClick}>New quote</button>
      </div>
    </div>
    <div className="footer"> by <a href="https://github.com/OB-Adams">OB</a></div>
    </>
  );
}

export default QuoteGenerator;
