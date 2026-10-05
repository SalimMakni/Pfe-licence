import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListBookCategories = () => {
  const [categories, setCategories] = useState([]); // State pour stocker les catégories de livres
  const [isLoading, setIsLoading] = useState(true); // State pour gérer l'état de chargement
  const [error, setError] = useState(null); // State pour gérer les erreurs éventuelles

  // Fonction pour récupérer les catégories de livres depuis une API
  const fetchBookCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/book-categories'); // Remplace par l'URL de ton API
      setCategories(response.data); // Stocke les catégories dans le state
      setIsLoading(false); // Mettre à jour l'état de chargement
    } catch (err) {
      setError('Erreur lors de la récupération des catégories de livres');
      setIsLoading(false); // Mettre à jour l'état de chargement même en cas d'erreur
    }
  };

  useEffect(() => {
    fetchBookCategories(); // Appeler la fonction au montage du composant
  }, []); // Le tableau vide [] signifie que l'effet est exécuté une seule fois lors du montage du composant

  if (isLoading) {
    return <p>Chargement des catégories de livres...</p>; // Afficher un message de chargement
  }

  if (error) {
    return <p>{error}</p>; // Afficher un message d'erreur si la récupération échoue
  }

  return (
    <div>
      <h1>Liste des Catégories de Livres</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li> // Afficher chaque catégorie dans une liste
        ))}
      </ul>
    </div>
  );
};

export default ListBookCategories;
