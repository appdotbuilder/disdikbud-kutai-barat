import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, AlertCircle } from 'lucide-react';

interface Props {
    announcements: {
        data: Array<{
            id: number;
            title: string;
            content: string;
            published_date: string;
            is_important: boolean;
            created_at: string;
        }>;
        links: unknown;
        meta: unknown;
    };
    [key: string]: unknown;
}

export default function Announcements({ announcements }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
            {/* Header */}
            <header className="bg-white shadow-lg border-b-4 border-orange-600">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/">
                                <Button variant="outline" size="sm">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Kembali
                                </Button>
                            </Link>
                            <div className="flex items-center space-x-3">
                                <FileText className="h-8 w-8 text-orange-600" />
                                <h1 className="text-3xl font-bold text-gray-900">
                                    📢 Pengumuman
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Pengumuman Resmi
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Informasi dan pengumuman penting dari Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat
                        </p>
                    </div>

                    {announcements.data.length > 0 ? (
                        <div className="space-y-6">
                            {announcements.data.map((announcement) => (
                                <div 
                                    key={announcement.id} 
                                    className={`bg-white rounded-xl shadow-lg overflow-hidden border-l-4 ${
                                        announcement.is_important 
                                            ? 'border-red-500' 
                                            : 'border-orange-500'
                                    }`}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <h3 className="text-2xl font-bold text-gray-900">
                                                        {announcement.title}
                                                    </h3>
                                                    {announcement.is_important && (
                                                        <div className="flex items-center bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                                                            <AlertCircle className="h-4 w-4 mr-1" />
                                                            PENTING
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                <div className="flex items-center text-gray-500 text-sm mb-4">
                                                    <FileText className="h-4 w-4 mr-2" />
                                                    Dipublikasikan pada {formatDate(announcement.published_date)}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="prose max-w-none">
                                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                                {announcement.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Pagination would go here if needed */}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto">
                                <FileText className="h-24 w-24 text-gray-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Belum Ada Pengumuman
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Pengumuman akan segera dipublikasikan. 
                                    Silakan kembali lagi nanti untuk melihat informasi terbaru.
                                </p>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-500">
                                        📞 Untuk informasi lebih lanjut, hubungi:
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="mt-16 text-center">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                🔍 Jelajahi Informasi Lainnya
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <Link href="/struktur-organisasi">
                                    <Button variant="outline" className="w-full">
                                        🏛️ Struktur Organisasi
                                    </Button>
                                </Link>
                                <Link href="/agenda">
                                    <Button variant="outline" className="w-full">
                                        📅 Agenda
                                    </Button>
                                </Link>
                                <Link href="/galeri">
                                    <Button variant="outline" className="w-full">
                                        🖼️ Galeri
                                    </Button>
                                </Link>
                                <Link href="/video">
                                    <Button variant="outline" className="w-full">
                                        🎥 Video
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400">
                        © 2024 Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat
                    </p>
                </div>
            </footer>
        </div>
    );
}