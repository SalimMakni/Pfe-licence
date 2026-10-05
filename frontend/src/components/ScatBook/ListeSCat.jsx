import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListSCat = () => {
  const [subCategories, setSubCategories] = useState([]); // State pour stocker les sous-catégories
  const [isLoading, setIsLoading] = useState(true); // State pour gérer l'état de chargement
  const [error, setError] = useState(null); // State pour gérer les erreurs éventuelles

  // Fonction pour récupérer les sous-catégories depuis une API
  const fetchSubCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/subcategories'); // Remplace par l'URL de ton API
      setSubCategories(response.data); // Stocke les sous-catégories dans le state
      setIsLoading(false); // Mettre à jour l'état de chargement
    } catch (err) {
      setError('Erreur lors de la récupération des sous-catégories');
      setIsLoading(false); // Mettre à jour l'état de chargement même en cas d'erreur
    }
  };

  useEffect(() => {
    fetchSubCategories(); // Appeler la fonction au montage du composant
  }, []); // Le tableau vide [] signifie que l'effet est exécuté une seule fois lors du montage du composant

  if (isLoading) {
    return <p>Chargement des sous-catégories...</p>; // Afficher un message de chargement
  }

  if (error) {
    return <p>{error}</p>; // Afficher un message d'erreur si la récupération échoue
  }

  return (
    <div>
      <h1>Liste des Sous-Catégories</h1>
      <ul>
        {subCategories.map((subCat) => (
          <li key={subCat.id}>{subCat.name}</li> // Afficher chaque sous-catégorie dans une liste
        ))}
      </ul>
    </div>
  );
};

export default ListSCat;
