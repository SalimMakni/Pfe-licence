<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'subcategory_id',//Clé primaire
        'name',        // Nom de la sous-catégorie
        'descriptionSCat', // Description de la sous-catégorie
        'image',       // Image de la sous-catégorie (facultatif)
        'category_id'  // Clé étrangère vers la catégorie principale
    ];

    // Relation : une sous-catégorie appartient à une catégorie principale
    public function category(){
        return $this->belongsTo(BookCategory::class, 'category_id');
    }

    // Relation : une sous-catégorie peut avoir plusieurs livres
    public function books(){
        return $this->hasMany(Book::class, 'subcategory_id');//hasMany (clé inférieure)
    }
}
