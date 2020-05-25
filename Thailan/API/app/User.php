<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public $timestamps = false;
    
    protected $fillable = [
        'Nome', 'DataCadastro','DataAtualizacao','DataNascimento',"Sexo","Excluido"
    ];
}
