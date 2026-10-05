import React, { useState } from "react";

const AjoutCommande = () => {
  const [commande, setCommande] = useState({
    nomClient: "",
    emailClient: "",
    titreLivre: "",
    quantite: 1,
    dateCommande: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommande({ ...commande, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez envoyer la commande au backend ici
    console.log("Commande ajoutée :", commande);
    alert("Commande ajoutée avec succès !");
    // Réinitialiser le formulaire
    setCommande({
      nomClient: "",
      emailClient: "",
      titreLivre: "",
      quantite: 1,
      dateCommande: "",
    });
  };

  return (
    <div>
      <h2>Ajouter une commande de livre</h2>
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
        <button type="submit">Ajouter la commande</button>
      </form>
    </div>
  );
};

export default AjoutCommande;
