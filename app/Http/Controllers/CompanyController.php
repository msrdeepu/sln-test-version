<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Company::get(['*', 'id as key']);
        return Inertia::render('Company/List', [
            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        {
            $user = Auth::user();
            $resource = Company::get(['*', 'id as key']);
            return Inertia::render('Company/Createcompany', [
                'user' => $user,
                'record'=> new Company(),
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request);
        $data= Company::create([
        
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(companies $companies)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        //
    }
}
