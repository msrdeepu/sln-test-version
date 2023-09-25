<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        {
            $resource = Property::get(['*', 'id as key']);
            return Inertia::render('Properties/Propertylist', [
            'resource' => $resource,
        ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        {
            $user = Auth::user();
            $resource = Property::get(['*', 'id as key']);
            return Inertia::render('Properties/CreateProperty', [
                'user' => $user,
                'record'=> new Property(),
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         //dd($request);
        $data= Property::create([
            "code" => $request->code,
            "venture" => $request->venture,
            "plotnum" => $request->plotnum,
            "title" => $request->title,
            "location" => $request->location,
            "villagearea" => $request->villagearea,
            "surveynum" => $request->surveynum,
            "plotfacing" => $request->plotfacing,
            "northbound" => $request->northbound,
            "southbound" => $request->southbound,
            "eastbound" => $request->eastbound,
            "westbound" => $request->westbound,
            "roadsize" => $request->roadsize,
            "customer" => $request->customer,
            "dispname" => $request->dispname,
            "selectagent" => $request->selectagent,
            "agentcode" => $request->agentcode,
            "length" => $request->length,
            "width" => $request->width,
            "dimensions" => $request->dimensions,
            "tsqfeets" => $request->tsqfeets,
            "tsqyards" => $request->tsqyards,
            "tankanams" => $request->tankanams,
            "ankanamcost" => $request->ankanamcost,
            "plotprice" => $request->plotprice,
            "discount" => $request->discount,
            "totalcost" => $request->totalcost,
            "dobooking" => $request->dobooking,
            "status" => $request->status,
            "eachinstallment" => $request->eachinstallment,
            "totalinstallamount" => $request->totalinstallamount,
            "approvauthority" => $request->approvauthority,
            "address" => $request->address,
            "stremarks" => $request->stremarks
          
        ]);
        $data->save();
        return to_route('properties.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Property $property)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        //
    }
}
