<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all();
        return Inertia::render('projects/projects', [
            'projects' => $projects,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('projects/createProject');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'stack' => 'required|array', // array wajib
            'stack.*' => 'string',       // tiap item harus string
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'url' => 'required|string',
        ]);

        // Upload gambar
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public');
            $validated['image'] = $path;
        }


        Project::create($validated);

        return redirect()->route('projects.create')->with("success", "Project has been successfully added.");
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('projects/editProject', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'stack' => 'required|array', // array wajib
            'stack.*' => 'string',       // tiap item harus string
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'url' => 'required|string',
        ]);


        if ($request->hasFile('image')) {
            $file_path = public_path('storage/' . $project->image);
            if ($project->image && File::exists($file_path)) {
                File::delete($file_path);
            }
            $imagePath = $request->file('image')->store('projects', 'public');
            $validated['image'] = $imagePath;
        } else {
            unset($validated['image']);
        }


        $project->update($validated);
        return redirect()->route('projects.edit', $project->id)->with("success", "Project has been successfully edited.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //// Hapus gambar dari storage jika ada
        $file_path = public_path('storage/' . $project->image);
        if ($project->image && File::exists($file_path)) {
            File::delete($file_path);
        }

        $project->delete();

        return redirect()->route('projects.index')->with("success", "Data deleted successfully");
    }
}
