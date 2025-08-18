<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $skills = Skill::all();
        return Inertia::render('skills/skills', [
            'skills' => $skills,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('skills/createSkill');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:skills,name|max:50',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $imagePath = $request->file('image')->store('skills', 'public');
        $validated['image'] = $imagePath;
        Skill::create($validated);

        return redirect()->route('skills.create')->with("success", "Skill has been successfully added.");
    }

    /**
     * Display the specified resource.
     */
    public function show(Skill $skill)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Skill $skill)
    {
        return Inertia::render('skills/editSkill', [
            'skill' => $skill,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Skill $skill)
    {
        $validated = $request->validate([
            'name' => [
                'required',
                'max:50',
                Rule::unique('skills', 'name')->ignore($skill->id),
            ],
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        // $a = $request->hasFile('image');
        //
        // return response()->json(['message' => $validated, "a"=> $a], 200);
        if ($request->hasFile('image')) {
            if ($skill->image && Storage::exists($skill->image)) {
                Storage::delete($skill->image);
            }
            $imagePath = $request->file('image')->store('skills', 'public');
            $validated['image'] = $imagePath;
        }else{
            unset($validated['image']);
        }
        $skill->update($validated);

        return redirect()->route('skills.edit', $skill->id)->with("success", "Skill has been successfully edited.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Skill $skill)
    {
        // Hapus gambar dari storage jika ada
        if ($skill->image) {
            Storage::delete($skill->image);
        }

        $skill->delete();

        return redirect()->route('skills.index')->with("success", "Data deleted successfully");
    }
}
