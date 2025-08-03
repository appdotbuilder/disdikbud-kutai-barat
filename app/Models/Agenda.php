<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Agenda
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property \Illuminate\Support\Carbon $event_date
 * @property string $event_time
 * @property string|null $location
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda query()
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda whereEventDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda whereEventTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda active()
 * @method static \Illuminate\Database\Eloquent\Builder|Agenda upcoming()

 * 
 * @mixin \Eloquent
 */
class Agenda extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'event_date',
        'event_time',
        'location',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'event_date' => 'date',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active agendas.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to only include upcoming agendas.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeUpcoming($query)
    {
        return $query->where('event_date', '>=', today());
    }
}