<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Setting;
use App\Models\Contentupload;
use App\Models\Page;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class ContentuploadController extends Controller
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
    public function create($id)
    {
        $page = Page::find($id);
        $list = Contentupload::where('page_id',$id)->get();



//adding file location

            $list = $list->map(function ($item) {
                if($item->type!="YOUTUBE"){
                $item->assetPath =  asset('storage/'.$item->file);
            }
            else{
                $item->assetPath = "https://www.youtube.com/embed/".$item->youtube;
            }
                return $item;
            });


        $satype = Setting::where('type', '=', 'ATYPE')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Cms/BulkAttachmentview', [
            'record' => new Contentupload(),
            'satype'=>$satype,
            'page'=>$page,
            'list'=>$list,

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $id)
    {
        //dd($request);
        $file = null;
        $requestData = $request->all();

if($request->type=="YOUTUBE"){
    $requestData['file']=null;
}else{
    if ($request->file('gallery')) {
        $file = $request->file('gallery')->store('content', 'public');
        $requestData['file'] = $file;
    }

    if ($request->file('file')) {
        $file = $request->file('file')->store('content', 'public');
        $requestData['file'] = $file;
    }
    $requestData['youtube']=null;
}


        $requestData['page_id'] = $id;

        $data = Contentupload::create($requestData);
        $data->save();
        return to_route('content.create',$id);

    }

    /**
     * Display the specified resource.
     */
    public function show(Contentupload $contentupload)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id, $page)
    {
        //dd($page);
        $page = Page::find($page);
        $record = Contentupload::find($id);

        if($record->type=="YOUTUBE"){

            $record->assetPath = "https://www.youtube.com/embed/".$record->youtube;
        }
        if($record->type=="FILE" || $record->type=="GALLERY" ){
            $record->assetPath =  asset('storage/'.$record->file);
        }




        $list = Contentupload::where('page_id',$page->id)->get();



//adding file location

            $list = $list->map(function ($item) {
                if($item->type!="YOUTUBE"){
                $item->assetPath =  asset('storage/'.$item->file);
            }
            else{
                $item->assetPath = "https://www.youtube.com/embed/".$item->youtube;
            }
                return $item;
            });


        $satype = Setting::where('type', '=', 'ATYPE')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);


       // dd($list);
        return Inertia::render('Cms/BulkAttachmentview', [
            'record' => $record,
            'satype'=>$satype,
            'page'=>$page,
            'list'=>$list,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
         //dd($request);
         $file = null;
         $content = Contentupload::find($id);
         $requestData = $request->all();

 if($request->type=="YOUTUBE"){
     $requestData['file']=null;
 }
 if($request->type=="FILE" || $request->type=="GALLERY"){

     $requestData['youtube']=null;
 }

 if ($request->file('gallery')) {
    Storage::delete('public' . $content->file);
     $file = $request->file('gallery')->store('content', 'public');
     $requestData['file'] = $file;
 }

 if ($request->file('file')) {
    Storage::delete('public' . $content->file);
     $file = $request->file('file')->store('content', 'public');
     $requestData['file'] = $file;
 }


         $requestData['page_id'] = $content->page_id;

         $updated=$content->update($requestData);

       $page=Page::find($content->page_id);
      // return to_route('content.create', ['id' => $page->id]);
      return Inertia::location(route('content.create',$page->id));
       //return to_route('content.create',$page->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $content = Contentupload::find($id);

        if ($content->type !="YOUTUBE") {
            Storage::delete('public' . $content->file);
        }



        $content->delete();

    }
}
