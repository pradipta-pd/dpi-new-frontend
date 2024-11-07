<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ThemeAssignController extends Controller
{
    public function assignTheme(Request $request)
    {

        $validated = $request->validate([
            'theme_id' => 'required|integer|exists:themes,id',
            'member_id' => 'required|integer|exists:users,id',
        ]);

        $theme = DB::table('themes')->where('id', $validated['theme_id'])->first();
        if (!$theme) {
            return response()->json(['error' => 'Theme not found'], 404);
        }

        $sourcePath = resource_path("views/frontend/{$theme->foldername}");
        $destinationPath = resource_path("views/frontend/{$validated['member_id']}");


        if (!File::exists($sourcePath)) {
            return response()->json(['error' => 'Source theme folder not found'], 404);
        }

        if (File::exists($destinationPath)) {
            File::deleteDirectory($destinationPath);
        }

        File::copyDirectory($sourcePath, $destinationPath);

        DB::table('member_themes')->updateOrInsert(
            ['user_id' => $validated['member_id']],
            ['theme_id' => $validated['theme_id']]
        );

        return response()->json(['success' => 'Theme assigned successfully']);
    }


    public function lodeIndex($member_id)
    {
        $memberTheme = DB::table('member_themes')->where('user_id', $member_id)->first();

        if (!$memberTheme) {
            return response()->json(['error' => 'No theme assigned to this member'], 404);
        }

        $theme = DB::table('themes')->where('id', $memberTheme->theme_id)->first();

        if (!$theme) {
            return response()->json(['error' => 'Theme not found'], 404);
        }

        $viewPath = "frontend.{$member_id}.theme2";
        if (!view()->exists($viewPath)) {
            return response()->json(['error' => 'Theme view not found'], 404);
        }

        return view($viewPath);
    }
}
