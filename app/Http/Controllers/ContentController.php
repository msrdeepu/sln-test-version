<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Page;
use App\Models\Contentupload;
use App\Models\Setting;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function listpage($slug)
    {


        $pages = Page::whereCategoryName($slug)->where('published',1)->orderBy('published_on','desc')->get(['*', 'id AS key']);
        $page=Category::whereSlug($slug)->whereStatus(1)->first(['*', 'id AS key']);
        $template='ui.'.$page->layout;
        return Inertia::render($template, [
            'pages' => $pages,
            'page' => $page
        ]);

    }

    public function categorypage($category,$slug)
    {
        $page = Page::where('category_name',$category)->whereSlug($slug)->where('published',1)->first(['*', 'id AS key']);
        if(!$page){
        Page::find($page->id)->increment('views');
        $template='ui.'.$page->layout;
        return Inertia::render($template, [
            'page' => $page
        ]);
    }

         //$template='front.'.$page->layout;
    }

    public function pagecontent($slug)
    {
        $page = Page::whereSlug($slug)->where('published','PUBLISH')->first(['*', 'id AS key']);
    //$template='front.'.$page->layout;

   // dd($page);

    Page::find($page->id)->increment('views');
    //$template='Front/'.$page->pagelayout;
    return Inertia::render('Front/Homepage', [
        'page' => $page
    ]);


    }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
