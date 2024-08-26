<?php
// app/Models/Category.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'parent_id',
        'is_active'
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
    public function subCategories()
    {
        return $this->hasMany(Category::class, 'parent_id')->with('subCategories');
    }
}
