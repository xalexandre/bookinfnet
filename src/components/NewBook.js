import React, { useState } from 'react';
import './NewBook.css';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    // Lógica para salvar o livro pode ser implementada aqui
    console.log('New Book:', { title, author, genre, pages });
  };

  return (
    <div className="newbook-container">
      <header className="newbook-header">
        <button className="menu-button">☰</button>
        <h2>Bookinfet</h2>
        <button className="search-button">🔍</button>
      </header>

      <form className="newbook-form" onSubmit={handleCreate}>
        <h3>New Book</h3>
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="The Hobbit"
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="author">Author</label>
          <input 
            type="text" 
            id="author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            placeholder="J. R. R. Tolkien"
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="genre">Genre</label>
          <input 
            type="text" 
            id="genre" 
            value={genre} 
            onChange={(e) => setGenre(e.target.value)} 
            placeholder="Fantasy"
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="pages">Pages</label>
          <input 
            type="number" 
            id="pages" 
            value={pages} 
            onChange={(e) => setPages(e.target.value)} 
            placeholder="328"
            required 
          />
        </div>
        <button type="submit" className="create-button">Create</button>
      </form>
    </div>
  );
}

export default NewBook;
