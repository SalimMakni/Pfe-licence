import React from 'react'/*React : Importé pour définir le composant fonctionnel.*/
import { useShoppingCart } from 'use-shopping-cart'/*useShoppingCart : Un hook (ensemble de fonctionnalités liées d'une maniére hermétique), 
utilisé pour gérer les fonctionnalités du panier */ 
const BookCard = ({book}) => {/*Le composant fonctionnel Card reçoit un objet book comme prop (trx du parent vers fils afin de personnalser comportement). 
   Cet objet représente un produit et contient des informations comme id, designation, prix, imageart, qtestock, etc.*/
  const {addItem} = useShoppingCart()//Pour import des fonctionnalités de gestion panier

  const addToCart = (book) => {//Destructuration de l'objet book
    const product = {//product : objet JavaScrip
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.coverImage,
      description : book.description,
      author: book.author,
      categoryid:book.categoryid,
      quantity: 1
    }
    addItem(product)// const {addItem} = useShoppingCart()
    console.log("Livre ajouté avec succès", product)
  }

  return (
    <div className='card'>
    {/* Affichage conditionnel de l'image */}
    {coverImage && <img src={book.coverImage} alt={book.title} />}

    <div className="card-content">
      {/* Affichage du titre et de l'auteur */}
      <p className="card-author">{book.author}</p>

      {/* Affichage de la description tronquée */}
      <p className="card-description">{description ? book.description.substr(0, 50) + '...' : 'Aucune description disponible'}</p>

      {/* Affichage du prix */}
      <h1 className="card-title">Prix : {book.price} TND</h1>

      {/* Bouton d'ajout au panier */}
      <button className="card-button" onClick={addToCart}>
        <i className="fa-solid fa-basket-shopping"></i> Ajouter au panier
      </button>
    </div>
  </div>
);
};

export default BookCard
