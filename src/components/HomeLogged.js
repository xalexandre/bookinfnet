import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomeLogged.css';

function HomeLogged() {
  const history = useHistory();

  const handleBookClick = () => {
    history.push('/bookdetails');  // Navega para a tela de detalhes do livro
  };

  const handleDashboardClick = () => {
    history.push('/dashboard');  // Navega para a tela de dashboard
  };

  return (
    <div className="home-logged-container">
      <header className="home-logged-header">
        <button className="menu-button">☰</button>
        <h2>Bookinfet</h2>
        <button className="search-button">🔍</button>
      </header>

      <section className="recently-added">
        <h3>Recently added</h3>
        <div className="books-row">
          <div className="book-item" onClick={handleBookClick}>
            <img src="path-to-image1.jpg" alt="The Lost Child" />
            <p>The Lost Child<br /><span>Patricia Gibney</span></p>
          </div>
          <div className="book-item" onClick={handleBookClick}>
            <img src="path-to-image2.jpg" alt="A Spark of Light" />
            <p>A Spark of Light<br /><span>Jodi Picoult</span></p>
          </div>
          <div className="book-item" onClick={handleBookClick}>
            <img src="path-to-image3.jpg" alt="The Warehouse" />
            <p>The Warehouse<br /><span>Rob Hart</span></p>
          </div>
        </div>
      </section>

      <section className="my-books">
        <h3 onClick={handleDashboardClick}>My books (4)</h3> {/* Adiciona um click handler */}
        <div className="books-row">
          <div className="book-item" onClick={handleBookClick}>
            <img src="path-to-image4.jpg" alt="The Hobbit" />
            <p>The Hobbit<br /><span>J. R. R. Tolkien</span></p>
          </div>
          <div className="book-item" onClick={handleBookClick}>
            <img src="path-to-image5.jpg" alt="Catching Fire" />
            <p>Catching Fire<br /><span>Suzanne Collins</span></p>
          </div>
          {/* Adicione mais livros conforme necessário */}
        </div>
      </section>

      <section className="wishlist">
        <h3>Wishlist (3)</h3>
        <div className="books-row">
          <div className="book-item" onClick={handleBookClick}>
            <img src="path-to-image6.jpg" alt="Bridge of Clay" />
            <p>Bridge of Clay<br /><span>Markus Zusak</span></p>
          </div>
          <div className="book-item" onClick={handleBookClick}>
            <img src="path-to-image7.jpg" alt="The Borgias" />
            <p>The Borgias<br /><span>Christopher Hibbert</span></p>
          </div>
          {/* Adicione mais livros conforme necessário */}
        </div>
      </section>

      <section className="categories">
        <h3>Categories</h3>
        <div className="categories-grid">
          <div className="category-item">Fantasy</div>
          <div className="category-item">Fiction</div>
          <div className="category-item">Crime</div>
          <div className="category-item">Young Adult</div>
          <div className="category-item">Horror</div>
          <div className="category-item">Romance</div>
        </div>
      </section>
    </div>
  );
}

export default HomeLogged;
