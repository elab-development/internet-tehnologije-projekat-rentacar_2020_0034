<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $path = 'public'; // Putanja do foldera u storage/public

        //ekstenzije sacuvanih fajlova
        $extensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];

        // Iteracija kroz sve fajlove u folderu i brisanje fajlova sa navedenim ekstenzijama
        $files = Storage::files($path);
        foreach ($files as $file) {
            $fileExtension = pathinfo($file, PATHINFO_EXTENSION);
            if (in_array($fileExtension, $extensions)) {
                Storage::delete($file);
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //nema rollback
    }
};
