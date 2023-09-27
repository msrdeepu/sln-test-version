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
        // dd($request);
        // $logo= null;
        // $qrcode=null;
        // $requestData = $request->all();
        // if (request->file('logo')){
        //     $logo = $request->file('logo')->store('company','public' );
        //     $requestData['logo'] = $logo;
        // }

        // if ($request->file('qrcode')){
        //     $qrcode = $request->file('qrcode')->store('company','public');
        //     $requestData['qrcode'] = $qrcode;
        // }

        $data= Company::create([
            "companyname"=> $request->companyname,
            "domain"=> $request->domain,
            "gstax"=> $request->gstax,
            "pan"=> $request->pan,
            "upiId"=> $request->upiid,
            "email"=> $request->email,
            "phonenum"=> $request->phonenum,
            "mobilenum"=> $request->mobilenum,
            "websiteslug"=> $request->websiteslug,
            "logo"=>$request->logo,
            "qrcode"=>$request-> qrcode,
            "astatus"=> $request->astatus,
            "address"=> $request->address,
            "bankdetails"=> $request->bankdetails,
            "terms"=> $request->terms,
            "note"=> $request->note,
            "footer"=> $request->footer
        ]);
        // $data = Company::create($requestData);
        $data->save();
        return to_route('company.index');
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
    public function destroy($id)
    {
        Company::find($id)->delete();
        return to_route('company.index');
    }
}
