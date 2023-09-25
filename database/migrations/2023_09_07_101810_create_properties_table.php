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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->text("code")->nullable();
            $table->text("venture")->nullable();
            $table->text("plotnum")->nullable();
            $table->text("title")->nullable();
            $table->text("location")->nullable();
            $table->text("villagearea")->nullable();
            $table->text("surveynum")->nullable();
            $table->text("plotfacing")->nullable();
            $table->text("northbound")->nullable();
            $table->text("southbound")->nullable();
            $table->text("eastbound")->nullable();
            $table->text("westbound")->nullable();
            $table->text("roadsize")->nullable();
            $table->text("customer")->nullable();
            $table->text("dispname")->nullable();
            $table->text("selectagent")->nullable();
            $table->text("agentcode")->nullable();
            $table->text("address")->nullable();
            $table->bigInteger("length")->nullable();
            $table->bigInteger("width")->nullable();
            $table->bigInteger("dimensions")->nullable();
            $table->bigInteger("tsqfeets")->nullable();
            $table->bigInteger("tsqyards")->nullable();
            $table->bigInteger("tankanams")->nullable();
            $table->bigInteger("ankanamcost")->nullable();
            $table->bigInteger("plotprice")->nullable();
            $table->bigInteger("discount")->nullable();
            $table->bigInteger("totalcost")->nullable();
            $table->text("dobooking")->nullable();
            $table->text("status")->nullable();
            $table->text("stremarks")->nullable();
            $table->bigInteger("eachinstallment")->nullable();
            $table->bigInteger("totalinstallamount")->nullable();
            $table->text("approvauthority")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
