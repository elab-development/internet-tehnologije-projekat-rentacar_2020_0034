<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\CarSeeder;
use Database\Seeders\TransactionSeeder;
use Database\Seeders\RentalAgentSeeder;
use Database\Seeders\CarTypeSeeder;
use Database\Seeders\UserSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $UserSeeder = new UserSeeder;
        $UserSeeder->run();

        $CarTypeSeeder = new CarTypeSeeder;
        $CarTypeSeeder->run();

        $CarSeeder = new CarSeeder;
        $CarSeeder->run();

        $RentalAgentSeeder = new RentalAgentSeeder;
        $RentalAgentSeeder->run();

        $TransactionSeeder = new TransactionSeeder;
        $TransactionSeeder->run();
    }
}
