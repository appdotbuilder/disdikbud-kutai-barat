import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

interface Props {
    agendas: {
        data: Array<{
            id: number;
            title: string;
            description: string;
            event_date: string;
            event_time: string;
            location?: string;
            created_at: string;
        }>;
        links: unknown;
        meta: unknown;
    };
    [key: string]: unknown;
}

export default function Agenda({ agendas }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const isUpcoming = (dateString: string) => {
        return new Date(dateString) >= new Date();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            {/* Header */}
            <header className="bg-white shadow-lg border-b-4 border-green-600">
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
                                <Calendar className="h-8 w-8 text-green-600" />
                                <h1 className="text-3xl font-bold text-gray-900">
                                    📅 Agenda Kegiatan
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
                            Agenda Kegiatan
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Jadwal acara dan kegiatan Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat
                        </p>
                    </div>

                    {agendas.data.length > 0 ? (
                        <div className="space-y-6">
                            {agendas.data.map((agenda) => (
                                <div 
                                    key={agenda.id} 
                                    className={`bg-white rounded-xl shadow-lg overflow-hidden border-l-4 ${
                                        isUpcoming(agenda.event_date) 
                                            ? 'border-green-500' 
                                            : 'border-gray-400'
                                    }`}
                                >
                                    <div className="p-6">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-4">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                        {agenda.title}
                                                    </h3>
                                                    {isUpcoming(agenda.event_date) && (
                                                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                                                            Mendatang
                                                        </span>
                                                    )}
                                                </div>
                                                
                                                <p className="text-gray-700 mb-6 leading-relaxed">
                                                    {agenda.description}
                                                </p>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div className="flex items-center text-gray-600">
                                                        <Calendar className="h-5 w-5 mr-3 text-green-600" />
                                                        <div>
                                                            <p className="font-medium">Tanggal</p>
                                                            <p className="text-sm">{formatDate(agenda.event_date)}</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex items-center text-gray-600">
                                                        <Clock className="h-5 w-5 mr-3 text-green-600" />
                                                        <div>
                                                            <p className="font-medium">Waktu</p>
                                                            <p className="text-sm">{agenda.event_time} WIB</p>
                                                        </div>
                                                    </div>
                                                    
                                                    {agenda.location && (
                                                        <div className="flex items-center text-gray-600">
                                                            <MapPin className="h-5 w-5 mr-3 text-green-600" />
                                                            <div>
                                                                <p className="font-medium">Lokasi</p>
                                                                <p className="text-sm">{agenda.location}</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Pagination would go here if needed */}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto">
                                <Calendar className="h-24 w-24 text-gray-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Belum Ada Agenda
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Agenda kegiatan akan segera dipublikasikan. 
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
                                <Link href="/pengumuman">
                                    <Button variant="outline" className="w-full">
                                        📢 Pengumuman
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