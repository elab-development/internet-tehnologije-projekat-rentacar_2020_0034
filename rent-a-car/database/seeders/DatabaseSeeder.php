<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\CarSeeder;
use Database\Seeders\TransactionSeeder;
use Database\Seeders\RentalAgentSeeder;
use Database\Seeders\CarTypeSeeder;

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

        $CarTypeSeeder = new CarTypeSeeder;
        $CarTypeSeeder->run();

        $CarSeeder = new CarSeeder;
        $CarSeeder->run();
        
        $TransactionSeeder = new TransactionSeeder;
        $TransactionSeeder->run();

        $RentalAgentSeeder = new RentalAgentSeeder;
        $RentalAgentSeeder->run();

        
    }
}
