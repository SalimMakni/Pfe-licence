import React, { useState, useEffect } from "react";

const EditCommande = ({ commandeExistante, onUpdate }) => {
  const [commande, setCommande] = useState({
    nomClient: "",
    emailClient: "",
    titreLivre: "",
    quantite: 1,
    dateCommande: "",
  });

  // Charger les données de la commande existante
  useEffect(() => {
    if (commandeExistante) {
      setCommande(commandeExistante);
    }
  }, [commandeExistante]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommande({ ...commande, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données mises à jour au backend ou les retourner au parent
    console.log("Commande mise à jour :", commande);
    onUpdate(commande); // Appelle une fonction parent pour gérer la mise à jour
    alert("Commande mise à jour avec succès !");
  };

  return (
    <div>
      <h2>Modifier une commande de livre</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom du client :</label>
          <input
            type="text"
            name="nomClient"
            value={commande.nomClient}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email du client :</label>
          <input
            type="email"
            name="emailClient"
            value={commande.emailClient}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Titre du livre :</label>
          <input
            type="text"
            name="titreLivre"
            value={commande.titreLivre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantité :</label>
          <input
            type="number"
            name="quantite"
            value={commande.quantite}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div>
          <label>Date de commande :</label>
          <input
            type="date"
            name="dateCommande"
            value={commande.dateCommande}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Mettre à jour la commande</button>
      </form>
    </div>
  );
};

export default EditCommande;
