<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrganizationalStructureRequest;
use App\Http\Requests\UpdateOrganizationalStructureRequest;
use App\Models\OrganizationalStructure;
use Inertia\Inertia;

class OrganizationalStructureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $structures = OrganizationalStructure::orderBy('created_at', 'desc')->paginate(10);

        return Inertia::render('admin/organizational-structures/index', [
            'structures' => $structures
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/organizational-structures/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrganizationalStructureRequest $request)
    {
        $structure = OrganizationalStructure::create($request->validated());

        return redirect()->route('admin.organizational-structures.index')
            ->with('success', 'Struktur organisasi berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(OrganizationalStructure $organizationalStructure)
    {
        return Inertia::render('admin/organizational-structures/show', [
            'structure' => $organizationalStructure
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrganizationalStructure $organizationalStructure)
    {
        return Inertia::render('admin/organizational-structures/edit', [
            'structure' => $organizationalStructure
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrganizationalStructureRequest $request, OrganizationalStructure $organizationalStructure)
    {
        $organizationalStructure->update($request->validated());

        return redirect()->route('admin.organizational-structures.index')
            ->with('success', 'Struktur organisasi berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrganizationalStructure $organizationalStructure)
    {
        $organizationalStructure->delete();

        return redirect()->route('admin.organizational-structures.index')
            ->with('success', 'Struktur organisasi berhasil dihapus.');
    }
}