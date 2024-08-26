import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const books = [
    {
      title: 'The Hobbit',
      author: 'J. R. R. Tolkien',
      progress: 50, // Progresso em porcentagem
      image: 'path-to-hobbit-image.jpg'
    },
    {
      title: 'A Game of Thrones',
      author: 'George R. R. Martin',
      progress: 75, // Progresso em porcentagem
      image: 'path-to-got-image.jpg'
    }
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <button className="menu-button">☰</button>
        <h2>Bookinfet</h2>
        <button className="search-button">🔍</button>
      </header>

      <h3>Dashboard</h3>
      <section className="book-progress-section">
        {books.map((book, index) => (
          <div key={index} className="book-progress-item">
            <img src={book.image} alt={book.title} />
            <div className="book-details">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${book.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
