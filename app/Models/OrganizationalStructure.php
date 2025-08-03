<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\OrganizationalStructure
 *
 * @property int $id
 * @property string $title
 * @property string $image_path
 * @property string|null $description
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure query()
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure whereImagePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrganizationalStructure active()

 * 
 * @mixin \Eloquent
 */
class OrganizationalStructure extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'image_path',
        'description',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active structures.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}