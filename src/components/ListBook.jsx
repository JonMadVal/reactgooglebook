import React from "react";

const ListBook = ({books, setBooks}) => {
  console.log('favBooks', books);
  const handleFavorite = (e, id) =>{
    e.preventDefault();
    const newBooks = books.map((book) => {
      if(book.id === id ) {
        return {...book, isFavorite: !book.isFavorite}
      }
      return book;
    })
    setBooks(newBooks);
  }
  return (
    <>
      {books.map((book, i) => (
        <div className="card mb-3" style={{ width: "28rem" }} key={i}>
          <div className="card-body">
            <div className="d-flex justify-content-lg-between">
              <h5 className="card-title">Title: <span>{book.volumeInfo.title}</span></h5>
              <button onClick={(e) => handleFavorite(e, book.id)}>Favoritos</button>
            </div>
            <p className="card-text mt-3">
              Descripción: {book.volumeInfo.description}
            </p>
            <span className="d-flex justify-content-end">Autor: {book.volumeInfo.authors}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListBook;
