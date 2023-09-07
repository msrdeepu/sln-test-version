<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\BranchesController;
use App\Http\Controllers\VenturesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admin/company', [CompaniesController::class, 'index'])->name('company.index');
    Route::get('/admin/company-create', [CompaniesController::class, 'create'])->name('company.create');

    Route::get('/admin/branches', [BranchesController::class, 'index'])->name('branches.index');
    Route::get('/admin/branches-create', [BranchesController::class, 'create'])->name('branches.create');

    Route::get('/admin/ventures', [VenturesController::class, 'index'])->name('ventures.index');
    Route::get('/admin/ventures-create', [VenturesController::class, 'create'])->name('ventures.create');
});

require __DIR__.'/auth.php';
