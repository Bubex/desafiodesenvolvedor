<?php
use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::truncate();
        $faker = \Faker\Factory::create();
 

        for ($i = 0; $i < 15; $i++) {
            $user = User::create([
                    'Nome' => $faker->name,
                    'DataCadastro' => now(),
                    'DataAtualizacao' => NULL,
                    'DataNascimento' => now(),
                    'Sexo' => (bool)random_int(0, 1),
                    'Excluido' => (bool)random_int(0, 1),
            ]);
        }
    }
}
