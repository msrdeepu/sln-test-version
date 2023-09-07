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
        Schema::create('ventures', function (Blueprint $table) {
            $table->id();
            $table->text('code');
            $table->string('status');
            $table->text('title');
            $table->text('maptemplate')->nullable();
            $table->text('pageslug')->nullable();
            $table->text('mapheight')->nullable();
            $table->text('location');
            $table->text('mapwidth')->nullable();
            $table->text('branch');
            $table->text('access')->nullable();
            $table->text('locationimage')->nullable();
            $table->text('pagelayout')->nullable();
            $table->text('layoutmap')->nullable();
            $table->text('pageseotitle');
            $table->text('banner')->nullable();
            $table->text('metatext')->nullable();
            $table->text('largemap')->nullable();
            $table->text('address')->nullable();
            $table->text('metakeywords')->nullable();
            $table->string('accountstatus');
            $table->text('mainbody')->nullable();
            $table->text('extrabody')->nullable();
            $table->text('layoutstyles')->nullable();
            $table->text('otherdetails')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ventures');
    }
};
