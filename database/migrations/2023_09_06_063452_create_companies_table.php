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
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('companyname');
            $table->text('domain');
            $table->text('gstax')->nullable();
            $table->text('pan')->nullable();
            $table->text('upiId')->nullable();
            $table->text('email')->nullable();
            $table->bigInteger('phonenum')->nullable();
            $table->bigInteger('mobilenum')->nullable();
            $table->text('websiteslug')->nullable();
            $table->text('logo')->nullable();
            $table->text('qrcode')->nullable();
            $table->text('astatus');
            $table->text('address')->nullable();
            $table->text('bankdetails')->nullable();
            $table->text('terms')->nullable();
            $table->text('note')->nullable();
            $table->text('footer')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
