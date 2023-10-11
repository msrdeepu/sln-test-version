<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Ventures;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class VenturesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        {
           $resource = Ventures::get(['*', 'id as key']);
            $ventures = Ventures::get(['id','code','sstatus', 'title', 'templateslug','slug','mapheight','location','mapwidth','branch','salevel','locationimg', 'layout', 'layoutmap', 'pagetitleseo','banner','largemap', 'metadescription', 'metakeywords', 'published', 'mainbody', 'extrabody', 'bodystyles', 'otherdetails', 'created_at', 'address', 'id as key']);
            return Inertia::render('Ventures/Ventureslist', [
            'ventruesList' => $ventures,
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
            return Inertia::render('Ventures/Venturescreate', [
                'user' => $user,
                'record'=> new Ventures(),
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $locationimg = null;
        $layoutmap = null;
        $banner = null;
        $largemap = null;
        $requestData = $request->all();
        if ($request -> file('locationimg')){
            $locationimg = $request -> file('locationimg')->store('venture', 'public');
            $requestData['locationimg'] = asset('storage/'. $locationimg);
        }
        if ($request -> file('layoutmap')){
            $layoutmap = $request -> file('layoutmap')->store('venture', 'public');
            $requestData['layoutmap'] = asset('storage/'. $layoutmap);
        }
        if ($request -> file('banner')){
            $banner = $request -> file('banner')->store('venture', 'public');
            $requestData['banner'] = asset('storage/'. $banner);
        }
        if ($request -> file('largemap')){
            $largemap = $request -> file('largemap')->store('venture', 'public');
            $requestData['largemap'] = asset('storage/'. $largemap);
        }

        
        $data= Ventures::create($requestData);
        $data->save();
        return to_route('ventures.index');

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
    public function edit($id)
    {
        $user = Auth::user();
        $ventures = Ventures::get(['id','code','sstatus', 'title', 'templateslug','slug','mapheight','location','mapwidth','branch','salevel','locationimg', 'layout', 'layoutmap', 'pagetitleseo','banner','largemap', 'metadescription', 'metakeywords', 'published', 'mainbody', 'extrabody', 'bodystyles', 'otherdetails', 'created_at', 'address', 'id as key']);
        $venture = Ventures::find($id);
        return Inertia::render('Ventures/Venturescreate', [
            'user' => $user,
            'ventruesList' => $ventures,
            'record' => $venture,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data = Ventures::where('id', '=', $id) -> update([
            "code" => $request->code,
            "sstatus" => $request->sstatus,
            "title" => $request->title,
            "templateslug" => $request->templateslug,
            "slug" => $request->slug,
            "mapheight" => $request->mapheight,
            "location" => $request->location,
            "mapwidth" => $request->mapwidth,
            "branch" => $request->branch,
            "salevel" => $request->salevel,
            "locationimg" => $request->locationimg,
            "layout" => $request->layout,
            "layoutmap" => $request->layoutmap,
            "pagetitleseo" => $request->pagetitleseo,
            "banner" => $request->banner,
            "largemap" => $request->largemap,
            "metadescription" => $request->metadescription,
            "metakeywords" => $request->metakeywords,
            "address" => $request->address,
            "published" => $request->published,
            "mainbody" => $request->mainbody,
            "extrabody"=>$request->extrabody,
            "bodystyles" => $request->bodystyles,
            "otherdetails" => $request->otherdetails
        ]);
        return to_route('ventures.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Ventures::find($id)->delete();
        return to_route('ventures.index');
    }
}
