import React from "react";

const SuppressionCommande = ({ commande, onDelete }) => {
  const handleDelete = async () => {
    // Confirmer la suppression
    const confirmDelete = window.confirm(
      `Êtes-vous sûr de vouloir supprimer la commande pour le livre "${commande.titreLivre}" ?`
    );

    if (confirmDelete) {
      try {
        // Envoi de la requête de suppression au backend
        const response = await fetch(`http://localhost:5000/api/commandes/${commande.id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("Commande supprimée avec succès !");
          onDelete(commande.id); // Appelle la fonction parent pour mettre à jour l'état
        } else {
          alert("Erreur lors de la suppression de la commande.");
        }
      } catch (error) {
        console.error("Erreur :", error);
        alert("Une erreur est survenue.");
      }
    }
  };

  return (
    <div>
      <h3>Commande pour le livre "{commande.titreLivre}"</h3>
      <button onClick={handleDelete}>Supprimer la commande</button>
    </div>
  );
};

export default SuppressionCommande;
