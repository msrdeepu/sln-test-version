<?php

namespace App\Http\Controllers;

use App\Models\Monthlyincentive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class MonthlyincentiveController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Expenses/MonthIncentives/MonthlyIncentList');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Expenses/MonthIncentives/CreateIncentive');
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
    public function show(Monthlyincentive $monthlyincentive)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Monthlyincentive $monthlyincentive)
    {
        return Inertia::render('Expenses/MonthIncentives/CreateIncentive');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Monthlyincentive $monthlyincentive)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Monthlyincentive $monthlyincentive)
    {
        //
    }
}
