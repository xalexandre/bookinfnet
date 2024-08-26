import React, { useState } from 'react';
import './BookDetails.css';

function BookDetails() {
  const [currentPage, setCurrentPage] = useState(32);
  const [newQuote, setNewQuote] = useState('');
  const [quotes, setQuotes] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ]);

  const handleAddQuote = () => {
    if (newQuote.trim()) {
      setQuotes([...quotes, newQuote]);
      setNewQuote('');
    }
  };

  return (
    <div className="book-details-container">
      <header className="book-details-header">
        <button className="menu-button">☰</button>
        <h2>Bookinfet</h2>
        <button className="search-button">🔍</button>
      </header>

      <section className="book-info">
        <h3>Book</h3>
        <div className="book-item">
          <img src="path-to-hobbit-image.jpg" alt="The Hobbit" />
          <h4>The Hobbit</h4>
          <p>J. R. R. Tolkien</p>
          <p>Rating: ★★★★☆</p>
          <p>Genre: Fantasy</p>
        </div>
      </section>

      <section className="book-progress">
        <div className="input-group">
          <label htmlFor="current-page">I'm on Page</label>
          <input 
            type="number" 
            id="current-page" 
            value={currentPage} 
            onChange={(e) => setCurrentPage(e.target.value)} 
            placeholder="32"
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="new-quote">New Quote</label>
          <textarea 
            id="new-quote" 
            value={newQuote} 
            onChange={(e) => setNewQuote(e.target.value)} 
            placeholder="Enter your quote here..."
            rows="3"
          ></textarea>
        </div>
        <div className="button-group">
          <button className="finished-button">I've Finished</button>
          <button className="done-button" onClick={handleAddQuote}>Done</button>
        </div>
      </section>

      <section className="book-quotes">
        <h3>Quotes</h3>
        {quotes.map((quote, index) => (
          <p key={index}>{quote}</p>
        ))}
      </section>
    </div>
  );
}

export default BookDetails;
