<?php

namespace App\Http\Controllers;
  
use App\User;
use Illuminate\Http\Request;
  
class UsersController extends Controller
{
    public function index()
    {
        return User::where('Excluido','=',0)->orderBy('id', 'DESC')->get();
    }

    public function getById($id)
    {
        return User::find($id);
    }

    public function store(Request $request)
    {
        $user = new User($request->all());
        $user->DataCadastro = now();
        $user->Excluido = false;
        $user->save();
        return response()->json($user, 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->DataAtualizacao = now();
        $user->update($request->all());

        return response()->json($user, 200);
    }

    public function delete($id)
    {
        $user = User::find($id);
        $user->DataAtualizacao = now();
        $user->Excluido = true;
        $user->save();

        return response()->json(null, 204);
    }
}