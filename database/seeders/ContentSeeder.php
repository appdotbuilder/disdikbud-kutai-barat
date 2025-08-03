<?php

namespace Database\Seeders;

use App\Models\Agenda;
use App\Models\Announcement;
use App\Models\Gallery;
use App\Models\OrganizationalStructure;
use App\Models\Video;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create organizational structure
        OrganizationalStructure::create([
            'title' => 'Struktur Organisasi Dinas Pendidikan dan Kebudayaan',
            'image_path' => 'https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=Struktur+Organisasi',
            'description' => 'Struktur organisasi lengkap Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat.',
            'is_active' => true,
        ]);

        // Create sample agendas
        $agendas = [
            [
                'title' => 'Rapat Koordinasi Awal Tahun',
                'description' => 'Rapat koordinasi untuk membahas program kerja dan agenda kegiatan tahun ini.',
                'event_date' => now()->addDays(7)->format('Y-m-d'),
                'event_time' => '09:00',
                'location' => 'Ruang Rapat Dinas Pendidikan',
                'is_active' => true,
            ],
            [
                'title' => 'Sosialisasi Kurikulum Merdeka',
                'description' => 'Sosialisasi implementasi kurikulum merdeka untuk seluruh sekolah di Kabupaten Kutai Barat.',
                'event_date' => now()->addDays(14)->format('Y-m-d'),
                'event_time' => '08:00',
                'location' => 'Aula Kabupaten Kutai Barat',
                'is_active' => true,
            ],
            [
                'title' => 'Festival Budaya Daerah',
                'description' => 'Festival budaya untuk melestarikan dan memperkenalkan budaya lokal Kutai Barat.',
                'event_date' => now()->addDays(30)->format('Y-m-d'),
                'event_time' => '16:00',
                'location' => 'Lapangan Utama Kutai Barat',
                'is_active' => true,
            ],
        ];

        foreach ($agendas as $agenda) {
            Agenda::create($agenda);
        }

        // Create sample announcements
        $announcements = [
            [
                'title' => 'Pembukaan Pendaftaran Beasiswa Prestasi',
                'content' => 'Dinas Pendidikan membuka pendaftaran beasiswa prestasi untuk siswa berprestasi di Kabupaten Kutai Barat. Pendaftaran dibuka mulai tanggal 1 Januari 2024.',
                'published_date' => now()->format('Y-m-d'),
                'is_important' => true,
                'is_active' => true,
            ],
            [
                'title' => 'Libur Sekolah Semester Ganjil',
                'content' => 'Libur semester ganjil untuk semua sekolah di Kabupaten Kutai Barat akan dimulai pada tanggal 15 Desember 2023 dan berakhir pada tanggal 8 Januari 2024.',
                'published_date' => now()->subDays(5)->format('Y-m-d'),
                'is_important' => false,
                'is_active' => true,
            ],
            [
                'title' => 'Program Pelatihan Guru Digital',
                'content' => 'Program pelatihan untuk meningkatkan kompetensi guru dalam penggunaan teknologi digital dalam pembelajaran.',
                'published_date' => now()->subDays(10)->format('Y-m-d'),
                'is_important' => false,
                'is_active' => true,
            ],
        ];

        foreach ($announcements as $announcement) {
            Announcement::create($announcement);
        }

        // Create sample gallery items
        $galleries = [
            [
                'title' => 'Upacara Hari Pendidikan Nasional',
                'description' => 'Dokumentasi upacara Hari Pendidikan Nasional di Kabupaten Kutai Barat.',
                'image_path' => 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Upacara+Pendidikan',
                'category' => 'Pendidikan',
                'is_active' => true,
            ],
            [
                'title' => 'Festival Seni Budaya Sekolah',
                'description' => 'Ajang kreativitas siswa dalam festival seni budaya tingkat kabupaten.',
                'image_path' => 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Festival+Seni',
                'category' => 'Kebudayaan',
                'is_active' => true,
            ],
            [
                'title' => 'Lomba Olimpiade Sains',
                'description' => 'Kompetisi olimpiade sains tingkat kabupaten untuk siswa SMA.',
                'image_path' => 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Olimpiade+Sains',
                'category' => 'Prestasi',
                'is_active' => true,
            ],
        ];

        foreach ($galleries as $gallery) {
            Gallery::create($gallery);
        }

        // Create sample videos
        $videos = [
            [
                'title' => 'Profil Dinas Pendidikan dan Kebudayaan',
                'description' => 'Video profil dan visi misi Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat.',
                'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'thumbnail_url' => 'https://via.placeholder.com/480x360/EF4444/FFFFFF?text=Profil+Dinas',
                'category' => 'Profil',
                'is_active' => true,
            ],
            [
                'title' => 'Dokumentasi Kegiatan Pendidikan',
                'description' => 'Dokumentasi berbagai kegiatan pendidikan di Kabupaten Kutai Barat.',
                'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                'thumbnail_url' => 'https://via.placeholder.com/480x360/059669/FFFFFF?text=Kegiatan+Pendidikan',
                'category' => 'Dokumentasi',
                'is_active' => true,
            ],
        ];

        foreach ($videos as $video) {
            Video::create($video);
        }
    }
}