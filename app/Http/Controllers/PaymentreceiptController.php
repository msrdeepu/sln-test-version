<?php

namespace App\Http\Controllers;

use App\Models\Paymentreceipt;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class PaymentreceiptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return Inertia::render('Paymentreceipts/PaymentReceiptsList');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Paymentreceipts/CreatePaymentReceipts');
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
    public function show(Paymentreceipt $paymentreceipt)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Paymentreceipt $paymentreceipt)
    {
        return Inertia::render('Paymentreceipts/CreatePaymentReceipt');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Paymentreceipt $paymentreceipt)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paymentreceipt $paymentreceipt)
    {
        //
    }
}
