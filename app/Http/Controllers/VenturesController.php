<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Ventures;
use Illuminate\Http\Request;

class VenturesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Ventures::get(['*', 'id as key']);
        return Inertia::render('Ventures/Ventureslist', [
            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        {
            $resource = Ventures::get(['*', 'id as key']);
            return Inertia::render('Ventures/Venturescreate', [
                'resource' => $resource,
            ]);
        }
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
    public function show(Ventures $ventures)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ventures $ventures)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ventures $ventures)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ventures $ventures)
    {
        //
    }
}
