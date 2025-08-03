<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::factory()->create([
            'name' => 'Admin Dinas',
            'email' => 'admin@dikbud-kubar.go.id',
        ]);

        // Seed content data
        $this->call([
            ContentSeeder::class,
        ]);
    }
}
