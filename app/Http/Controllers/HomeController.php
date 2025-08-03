<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Agenda;
use App\Models\Announcement;
use App\Models\Gallery;
use App\Models\OrganizationalStructure;
use App\Models\Video;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $organizationalStructure = OrganizationalStructure::active()->first();
        $upcomingAgendas = Agenda::active()->upcoming()->orderBy('event_date')->take(5)->get();
        $latestAnnouncements = Announcement::active()->orderBy('published_date', 'desc')->take(5)->get();
        $recentGallery = Gallery::active()->orderBy('created_at', 'desc')->take(6)->get();
        $recentVideos = Video::active()->orderBy('created_at', 'desc')->take(3)->get();

        return Inertia::render('welcome', [
            'organizationalStructure' => $organizationalStructure,
            'upcomingAgendas' => $upcomingAgendas,
            'latestAnnouncements' => $latestAnnouncements,
            'recentGallery' => $recentGallery,
            'recentVideos' => $recentVideos,
        ]);
    }

    /**
     * Display the organizational structure page.
     */
    public function show()
    {
        $type = request('type', 'organizational-structure');
        
        switch ($type) {
            case 'organizational-structure':
                $structures = OrganizationalStructure::active()->orderBy('created_at', 'desc')->get();
                return Inertia::render('organizational-structure', ['structures' => $structures]);
                
            case 'agenda':
                $agendas = Agenda::active()->orderBy('event_date')->paginate(10);
                return Inertia::render('agenda', ['agendas' => $agendas]);
                
            case 'announcements':
                $announcements = Announcement::active()->orderBy('published_date', 'desc')->paginate(10);
                return Inertia::render('announcements', ['announcements' => $announcements]);
                
            case 'gallery':
                $galleries = Gallery::active()->orderBy('created_at', 'desc')->paginate(12);
                return Inertia::render('gallery', ['galleries' => $galleries]);
                
            case 'videos':
                $videos = Video::active()->orderBy('created_at', 'desc')->paginate(9);
                return Inertia::render('videos', ['videos' => $videos]);
                
            default:
                abort(404);
        }
    }
}