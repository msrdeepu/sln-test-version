<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Company::get(['*', 'id as key']);
        $companies = Company::get(['id', 'companyname', 'domain', 'gstax', 'pan', 'upiId', 'email', 'phonenum', 'mobilenum', 'websiteslug', 'logo', 'qrcode', 'astatus', 'address', 'bankdetails', 'terms', 'note', 'footer', 'created_at']);
        return Inertia::render('Company/List', [
            'companyList' => $companies,
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
        //dd($request);
        $logo= null;
        $qrcode=null;
        $requestData = $request->all();
        if ($request->file('logo')){
            $logo = $request->file('logo')->store('company', 'public' );            
            $requestData['logo'] = asset('storage/'.$logo);
        }
        if ($request->file('qrcode')){
            $qrcode = $request->file('qrcode')->store('company', 'public');
            $requestData['qrcode'] = asset('storage/'.$qrcode);
        }

        $data= Company::create($requestData);
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
    public function edit($id)
    {
       $user = Auth::user();
       $companies = Company::get(['id', 'companyname', 'domain', 'gstax', 'pan', 'upiId', 'email', 'phonenum', 'mobilenum', 'websiteslug', 'logo', 'qrcode', 'astatus', 'address', 'bankdetails', 'terms', 'note', 'footer', 'created_at']);
       $company = Company::find($id);
       if($company->logo != null){
        $company->logoPath = asset('storage/'.$company->logo);
     }
       return Inertia::render('Company/Createcompany', [
        'user' => $user,
        'companyList' => $companies,
        'record' => $company,
       ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $logo= null;
        $qrcode=null;
        $requestData = $request->all();
        if ($request->file('logo')){
            $logo = $request->file('logo')->store('content', 'public' );
            $requestData['logo'] = $logo;
        }

        if ($request->file('qrcode')){
            $qrcode = $request->file('qrcode')->store('content', 'public');
            $requestData['qrcode'] = $qrcode;
        }

        $data = Company::where('id', '=', $id) -> update([
            "companyname"=> $request->companyname,
            "domain"=> $request->domain,
            "gstax"=> $request->gstax,
            "pan"=> $request->pan,
            "upiId"=> $request->upiid,
            "email"=> $request->email,
            "phonenum"=> $request->phonenum,
            "mobilenum"=> $request->mobilenum,
            "websiteslug"=> $request->websiteslug,
            "logo"=>$logo,
            "qrcode"=>$qrcode,
            "astatus"=> $request->astatus,
            "address"=> $request->address,
            "bankdetails"=> $request->bankdetails,
            "terms"=> $request->terms,
            "note"=> $request->note,
            "footer"=> $request->footer
        ]);

        return to_route('company.index');
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
