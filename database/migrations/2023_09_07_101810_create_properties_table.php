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
            $table->text("selectventure");
            $table->text("plotnumber");
            $table->text("propertytitle")->nullable();
            $table->text("location");
            $table->text("village")->nullable();
            $table->text("surveynum")->nullable();
            $table->text("facing");
            $table->text("roadsize");
            $table->text("northbound")->nullable();
            $table->text("southbound")->nullable();
            $table->text("eastbound")->nullable();
            $table->text("westbound")->nullable();
            $table->text("customer");
            $table->text("dispname")->nullable();
            $table->text("agent");
            $table->text("agentcode")->nullable();
            $table->text("address")->nullable();
            $table->bigInteger("length")->nullable();
            $table->bigInteger("width")->nullable();
            $table->bigInteger("dimensions")->nullable();
            $table->bigInteger("totsqrft")->nullable();
            $table->bigInteger("totsqryards")->nullable();
            $table->bigInteger("totankanams")->nullable();
            $table->bigInteger("ankanamcost")->nullable();
            $table->bigInteger("plotprice")->nullable();
            $table->bigInteger("discount")->nullable();
            $table->bigInteger("totcost")->nullable();
            $table->date("dateofbook")->nullable();
            $table->text("status");
            $table->text("statusremarks")->nullable();
            $table->bigInteger("installment")->nullable();
            $table->bigInteger("totinstallments")->nullable();
            $table->text("approvalauth")->nullable();
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
