<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;
use Carbon\Carbon;

class User extends Model
{
    protected $table='users';
    protected $fillable = ['name', 'birthday', 'genre'];

    public function getBirthday() {
        return Carbon::parse($this->birthday)->format('d/m/Y');
    }

    public function getCreatedAt() {
        return Carbon::parse($this->created_at)->format('d/m/Y');
    }
}
