<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    // Colonnes pouvant être remplies en masse
    protected $fillable = [
        'title',          // Titre du livre
        'author',         // Auteur du livre
        'isbn',           // Numéro ISBN
        'published_date', // Date de publication
        'cover_image',    // Image de couverture
        'category_id'   ,  // Clé étrangère pour la catégorie
        'description'
    ];

    // Relation : un livre appartient à une catégorie
    public function subcategory(){//Clé etrangére 1 book appartient à 1 seul categrie
        return $this->belongsTo(SubCategory::class, 'subcategory_id');//belongsTo : Clé supérieure
    }
    public function category(){//Clé etrangére 1 book appartient à 1 seul categrie
        return $this->belongsTo(BookCategory::class, 'category_id');//belongsTo : Clé supérieure
    }
}
