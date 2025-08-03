<?php

use App\Http\Controllers\Admin\AgendaController as AdminAgendaController;
use App\Http\Controllers\Admin\OrganizationalStructureController as AdminOrganizationalStructureController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Public routes
Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'index')->name('home');
    Route::get('/struktur-organisasi', 'show')->defaults('type', 'organizational-structure')->name('organizational-structure');
    Route::get('/agenda', 'show')->defaults('type', 'agenda')->name('agenda');
    Route::get('/pengumuman', 'show')->defaults('type', 'announcements')->name('announcements');
    Route::get('/galeri', 'show')->defaults('type', 'gallery')->name('gallery');
    Route::get('/video', 'show')->defaults('type', 'videos')->name('videos');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Admin routes
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('organizational-structures', AdminOrganizationalStructureController::class);
        Route::resource('agendas', AdminAgendaController::class);
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
