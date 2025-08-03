import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users } from 'lucide-react';

interface Props {
    structures: Array<{
        id: number;
        title: string;
        image_path: string;
        description?: string;
        created_at: string;
    }>;
    [key: string]: unknown;
}

export default function OrganizationalStructure({ structures }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Header */}
            <header className="bg-white shadow-lg border-b-4 border-blue-600">
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
                                <Users className="h-8 w-8 text-blue-600" />
                                <h1 className="text-3xl font-bold text-gray-900">
                                    🏛️ Struktur Organisasi
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
                            Struktur Organisasi
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat
                        </p>
                    </div>

                    {structures.length > 0 ? (
                        <div className="space-y-12">
                            {structures.map((structure) => (
                                <div key={structure.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="p-8 text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                            {structure.title}
                                        </h3>
                                        {structure.description && (
                                            <p className="text-gray-600 mb-8 max-w-4xl mx-auto">
                                                {structure.description}
                                            </p>
                                        )}
                                        <div className="flex justify-center">
                                            <img
                                                src={structure.image_path}
                                                alt={structure.title}
                                                className="max-w-full h-auto rounded-lg shadow-lg border border-gray-200"
                                                style={{ maxHeight: '800px' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto">
                                <Users className="h-24 w-24 text-gray-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Struktur Organisasi Belum Tersedia
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Struktur organisasi sedang dalam proses pembaruan. 
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
                                <Link href="/agenda">
                                    <Button variant="outline" className="w-full">
                                        📅 Agenda
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