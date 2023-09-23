<?php

namespace App\Http\Controllers;

use App\Models\Branches;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class BranchesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Branches::get(['*', 'id as key']);
        return Inertia::render('Branches/Branchlist', [
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
            return Inertia::render('Branches/Createbranch', [
            'user' => $user,
            'record'=> new Branches(),
            ]);

        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       // dd($request);
        $data= Branches::create([
            "code"=> $request->code,
            "company"=> $request->company,
            "status"=> $request->status,
            "location"=> $request->location,
            "email"=> $request->email,
            "phonenumber"=> $request->phonenumber,
            "mobilenumber"=> $request->mobilenumber,
            "address"=> $request->address,
        ]);
        $data->save();
        return to_route('branches.create');

    }

    /**
     * Display the specified resource.
     */
    public function show(Branches $branches)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Branches $branches)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Branches $branches)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Branches $branches)
    {
        //
    }
}
