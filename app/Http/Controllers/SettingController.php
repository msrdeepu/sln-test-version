<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //$user = User::find(1);
        $user = Auth::user();
       $stype = Setting::where('type','=','LIST')->where('status','=','ACTIVE')->get(['name AS label','value', 'id AS key']);
        $sstatus = Setting::where('type','=','STATUS')->where('status','=','ACTIVE')->get(['name AS label','value', 'id AS key']);
        //$stype = Setting::where('type','=','LAYOUT')->where('status','=','ACTIVE')->get(['name AS label','value', 'id AS key']);
        $settings = Setting::get(['id','value','name','code','dorder','status','type', 'id AS key']);


        return Inertia::render('Core/Settingsview', [
            'user' => $user,
            'stype' => $stype,
            'sstatus' => $sstatus,
            'settingsList'=> $settings,
            'record'=> new Setting(),
          ]);


    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       //dd($request);


      $data= Setting::create([
            "type" => $request->type,
            "name" => $request->name,
            "code" => $request->code,
            "dorder" => $request->dorder,
            "value"=> $request->value,
            "status" => $request->status

        ]);
      $data->save();
      return to_route('setting.create');

    }

    /**
     * Display the specified resource.
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */


    public function edit($id)
    {
      //$user = User::find(1);
      $user = Auth::user();
      $stype = Setting::where('type','=','LIST')->get(['name AS label','value', 'id AS key']);
      $sstatus = Setting::where('type','=','STATUS')->get(['name AS label','value', 'id AS key']);
      $settings = Setting::get(['id','value','name','code','dorder','status','type']);
      $setting=Setting::find($id);
      return Inertia::render('Core/Settingsview', [
          'user' => $user,
          'stype' => $stype,
          'sstatus' => $sstatus,
          'settingsList'=> $settings,
          'record'=> $setting,
        ]);


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

      $data= Setting::where('id','=',$id)->update([
        "type" => $request->type,
        "name" => $request->name,
        "code" => $request->code,
        "dorder" => $request->dorder,
        "value"=> $request->value,
        "status" => $request->status

    ]);

return to_route('setting.create');

    }

    /**
     * Remove the specified resource from storage.
     */


    public function destroy($id)
    {
        Setting::find($id)->delete();
       return to_route('setting.create');
       // return Redirect::route('setting.create');
    }
}
