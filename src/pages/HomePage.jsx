import React, { useEffect, useState } from "react";
import FilterBook from "../components/FilterBook";
import ListBook from "../components/ListBook";
import useBook from "../hooks/useBook";

const HomePage = () => {
  const { isLoading, books, setBooks } = useBook();
  const [search, setSearch] = useState(""); 
  const [booksFiltered, setBooksFiltered] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    filterBook();
  }, [search])

  useEffect(() => {
    filterBook();
    const newFavoriteBooks = books.filter((book) => book.isFavorite);
    setFavoriteBooks(newFavoriteBooks);
  }, [books])
  

  // Function Search
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const filterBook = () => {
    //Methodo filter
    let booksArr = books ||  [];
    console.log('booksArr', booksArr);
    booksArr = booksArr.filter((book) => !book.isFavorite);
    if(!search){
      setBooksFiltered(booksArr);
    } else {
      const result = booksArr.filter(({volumeInfo}) => 
        volumeInfo.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
        volumeInfo.description.toLowerCase().includes(search.toLocaleLowerCase()) ||
        volumeInfo.authors.toLowerCase().includes(search.toLocaleLowerCase())
      )
      setBooksFiltered(result);
    }
  }

  return (
    <div className="mt-5">
      <h1 className="header">Listado de Libros</h1>
      <hr />
      <input
        type="text"
        className="mb-2 form-control"
        placeholder="Buscar Libro"
        value={ search }
        onChange={ onSearchChange }
      />
      <div className="row">
        <div className="col-sm-6">
          <FilterBook displayBooks={booksFiltered} setBooks={setBooks} totalBooks={books}/>
        </div>
        <div className="col-sm-6">
          <FilterBook displayBooks={favoriteBooks} setBooks={setBooks} totalBooks={books}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
