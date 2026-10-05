<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'descriptionCat',
        'image'
    ];

    // Relation : une catégorie principale peut avoir plusieurs sous-catégories
    public function subCategories(){
        return $this->hasMany(SubCategory::class, 'category_id');
    }

    // Relation : une catégorie principale peut aussi avoir des livres directement
    public function books(){
        //return $this->hasMany(Book::class, 'isbn');

    return $this->hasMany(Book::class, 'category_id');//
}

}

