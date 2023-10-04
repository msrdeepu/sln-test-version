<?php

namespace App\Http\Controllers;

use App\Models\Cashadvance;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class CashadvanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Expenses/CashAdvance/CashAdvList');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Expenses/CashAdvance/CreateCashAdvance');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Cashadvance $cashadvance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cashadvance $cashadvance)
    {
        return Inertia::render('Expenses/CashAdvance/CreateCashAdvance');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cashadvance $cashadvance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cashadvance $cashadvance)
    {
        //
    }
}
