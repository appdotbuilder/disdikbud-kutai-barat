import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, Image, Play, Users, ArrowRight } from 'lucide-react';

interface Props {
    organizationalStructure?: {
        id: number;
        title: string;
        image_path: string;
        description?: string;
    };
    upcomingAgendas: Array<{
        id: number;
        title: string;
        event_date: string;
        event_time: string;
        location?: string;
    }>;
    latestAnnouncements: Array<{
        id: number;
        title: string;
        published_date: string;
        is_important: boolean;
    }>;
    recentGallery: Array<{
        id: number;
        title: string;
        image_path: string;
    }>;
    recentVideos: Array<{
        id: number;
        title: string;
        video_url: string;
        thumbnail_url?: string;
    }>;
    [key: string]: unknown;
}

export default function Welcome({ 
    upcomingAgendas, 
    latestAnnouncements
}: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Header */}
            <header className="bg-white shadow-lg border-b-4 border-blue-600">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    🏛️ Dinas Pendidikan dan Kebudayaan
                                </h1>
                                <p className="text-blue-600 font-medium">Kabupaten Kutai Barat</p>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <Link href="/login">
                                <Button variant="outline" size="sm">
                                    Masuk Admin
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        📚 Portal Informasi Pendidikan
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                        Memajukan Pendidikan dan Kebudayaan Kutai Barat
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <Users className="h-8 w-8 mx-auto mb-2" />
                            <p className="font-medium">Struktur Organisasi</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <Calendar className="h-8 w-8 mx-auto mb-2" />
                            <p className="font-medium">Agenda Kegiatan</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <FileText className="h-8 w-8 mx-auto mb-2" />
                            <p className="font-medium">Pengumuman</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <Image className="h-8 w-8 mx-auto mb-2" />
                            <p className="font-medium">Galeri & Video</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Menu */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        🔍 Jelajahi Informasi
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link href="/struktur-organisasi" className="group">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <Users className="h-12 w-12 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Struktur Organisasi</h4>
                                <p className="opacity-90 mb-4">Lihat struktur organisasi dan susunan pimpinan dinas</p>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link href="/agenda" className="group">
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <Calendar className="h-12 w-12 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Agenda Kegiatan</h4>
                                <p className="opacity-90 mb-4">Jadwal acara dan kegiatan dinas yang akan datang</p>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link href="/pengumuman" className="group">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <FileText className="h-12 w-12 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Pengumuman</h4>
                                <p className="opacity-90 mb-4">Pengumuman penting dan informasi terkini</p>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link href="/galeri" className="group">
                            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <Image className="h-12 w-12 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Galeri Foto</h4>
                                <p className="opacity-90 mb-4">Dokumentasi kegiatan dan momen penting</p>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link href="/video" className="group">
                            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <Play className="h-12 w-12 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Video</h4>
                                <p className="opacity-90 mb-4">Koleksi video dokumentasi dan informasi</p>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <Link href="/dashboard" className="group">
                            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 text-white hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <Users className="h-12 w-12 mb-4" />
                                <h4 className="text-xl font-bold mb-2">Panel Admin</h4>
                                <p className="opacity-90 mb-4">Kelola konten dan informasi (Login diperlukan)</p>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Preview Sections */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Upcoming Agendas */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                                    <Calendar className="h-6 w-6 mr-2 text-green-600" />
                                    📅 Agenda Mendatang
                                </h3>
                                <Link href="/agenda">
                                    <Button variant="outline" size="sm">
                                        Lihat Semua
                                    </Button>
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {upcomingAgendas.length > 0 ? (
                                    upcomingAgendas.slice(0, 3).map((agenda) => (
                                        <div key={agenda.id} className="border-l-4 border-green-500 pl-4 py-2">
                                            <h4 className="font-semibold text-gray-900">{agenda.title}</h4>
                                            <p className="text-sm text-gray-600">
                                                {formatDate(agenda.event_date)} • {agenda.event_time}
                                            </p>
                                            {agenda.location && (
                                                <p className="text-sm text-gray-500">📍 {agenda.location}</p>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 italic">Belum ada agenda yang tersedia</p>
                                )}
                            </div>
                        </div>

                        {/* Latest Announcements */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                                    <FileText className="h-6 w-6 mr-2 text-orange-600" />
                                    📢 Pengumuman Terbaru
                                </h3>
                                <Link href="/pengumuman">
                                    <Button variant="outline" size="sm">
                                        Lihat Semua
                                    </Button>
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {latestAnnouncements.length > 0 ? (
                                    latestAnnouncements.slice(0, 3).map((announcement) => (
                                        <div key={announcement.id} className="border-l-4 border-orange-500 pl-4 py-2">
                                            <div className="flex items-start justify-between">
                                                <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                                                {announcement.is_important && (
                                                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                                                        PENTING
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                {formatDate(announcement.published_date)}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 italic">Belum ada pengumuman yang tersedia</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">🏛️ Dinas Pendidikan dan Kebudayaan</h3>
                        <p className="text-gray-300">Kabupaten Kutai Barat</p>
                    </div>
                    <div className="border-t border-gray-700 pt-6">
                        <p className="text-gray-400">
                            © 2024 Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat. 
                            Sistem Informasi Digital untuk Transparansi dan Akuntabilitas.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}