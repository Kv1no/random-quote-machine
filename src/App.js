
import './App.css';
import React from 'react';


class App extends React.Component {
  COLORS = [
    '#FB6964', '#2C3E50', '#27AE60', '#	9B59B6', '#342224', '#F39C12', '#77B1A9', '#BDBB99', '#73A857', '#16A085'
  ];
  state = {
    quotes: [
      {
        quote: "I don't fit into any stereotypes. And I like myself that way.",
        author: "- C. JoyBell C."
      },
      {
        quote: "He who jumps into the void owes no explanation to those who stand and watch.",
        author: "- Jean-Luc Godard"
      },
      {
        quote: "Living never wore one so much as the effort not to live.",
        author: "- Anais Nin"
      },
      {
        quote: "When I try, I fail. When I trust, He succeeds.",
        author: "- Corrie ten Boom"
      },
      {
        quote: "It [feminism] is mixed up with a muddled idea that women are free when they serve their employers but slaves when they help their husbands.",
        author: "- G.K. Chesterton"
      },
      {
        quote: "My experiences have taught me that things rarely improve with a simple change of scenery.",
        author: "- Pittacus Lore, The Power of Six"
      },
      {
        quote: "True love is not so much a matter of romance as it is a matter of anxious concern for the well-being of one's companion.",
        author: "- Gordon B. Hinckley, Stand a Little Taller"
      },
      {
        quote: "Nobody is exempt from the trials of life, but everyone can always find something positive in everything even in the worst of times.",
        author: "- Roy T. Bennett"
      },
      {
        quote: "Women can fake an orgasm, but men can fake an entire relationship.",
        author: "- Sharon Stone"
      },
      {
        quote: "No, our science is no illusion. But an illusion it would be to suppose that what science cannot give us we can get elsewhere.",
        author: "- Sigmund Freud, The Future of an Illusion"
      }
    ],
    randomQuote: Math.floor(Math.random() * 10),
    randomColor: Math.floor(Math.random() * 10)
  }
  
  nextQuote = () => {
    const randomQuote = Math.floor(Math.random() * 10);
    const randomColor = Math.floor(Math.random() * 10);
    this.setState ({
      randomQuote,
      randomColor
    })
  };
  
  render() {
      const {randomQuote, randomColor} = this.state;
      const {quote, author} = this.state.quotes[randomQuote];
      const color = this.COLORS[randomColor];
      
      return (
        <div className="wrapper" style={{background:color}}>
          <div id="quote-box">
            <div id="text">
              <div id="author">
                <div id="new-quote">
                  <div id="text-element">
                    <a id="tweet-quote" href="twitter.com/intent/tweet"></a>
            <Quote
              quote={quote}
              author={author}
              nextQuote={this.nextQuote}
              color={color}
              />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
};
const Quote = ({quote, author, nextQuote, color}) => {
  return (
    <div style={{color}}>
      <p className={'quote'}><i className="fas fa-quote-left" style={{marginRight: '10px'}}></i>{quote}</p>
      <p className={'author'}>{author}</p>
      <button className='social' style={{background: color}}><i className="fab fa-twitter"></i></button>
      <button className='social' style={{background: color, marginLeft:'15px'}}><i className="fab fa-tumblr"></i></button>
      <button className='next' onClick={nextQuote} style={{background: color}}>Next Quote</button>
    </div>
  );
};
export default App; 

