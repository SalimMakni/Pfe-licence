import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Card from './Card'; // Assurez-vous que le composant Card est adapté pour les livres
import Pagination from './Pagination';
//
const ListBookCard = () => {//Component fonctionnel pour le retour du jsx
  const [books, setBooks] = useState([]);//Prise des props et fournir les states 
  // State : état (objet qui a données dynamiques contrairement aux props)
  /*
  books : liste des books set : mise à jour*/
  //Création des states (états dynamiques) 
  //Prise des props et initialiser les states 
  const [totalPages, setTotalPages] = useState(1);//initialisé par 1 au moment de l'affichage (montée de l'objet)
  const [pageSize, setPageSize] = useState(18);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
//
  const fetchBooks = async (currentPage, pageSize) => {//books recuperation Composant fonctionnel qui retourne un JSX
    try {//await : asynchrone axios : récupération API
      const res = await axios.get(`"http://localhost:8000/api/api/books/bookspaginate?pageSize=${pageSize}&page=${currentPage}`);
      setBooks(res.data.books); // Assurez-vous que la réponse contient un tableau de livres
      setTotalPages(res.data.totalPages); // Total des pages retournées par l'API
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {//Insertion dans le D.O.M montée (affichage du )
    fetchBooks(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handlePrevPage = () => {//Navigation page précédante
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <center>
        <ReactLoading type="spokes" color="red" height={400} width={200} />
      </center>
    );
  }

  return (//Fournir les données
    <>
      <div className="card-container">
        {books.map((book, index) => (
          <Card key={index} article={book} /> 
        ))}
      </div>
      <Pagination
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default ListBookCard;
