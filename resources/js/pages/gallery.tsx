import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Image as ImageIcon, X } from 'lucide-react';

interface Props {
    galleries: {
        data: Array<{
            id: number;
            title: string;
            description?: string;
            image_path: string;
            category?: string;
            created_at: string;
        }>;
        links: unknown;
        meta: unknown;
    };
    [key: string]: unknown;
}

export default function Gallery({ galleries }: Props) {
    const [selectedImage, setSelectedImage] = useState<{
        title: string;
        image_path: string;
        description?: string;
    } | null>(null);

    const categories = [...new Set(galleries.data.map(item => item.category).filter(Boolean))];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            {/* Header */}
            <header className="bg-white shadow-lg border-b-4 border-purple-600">
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
                                <ImageIcon className="h-8 w-8 text-purple-600" />
                                <h1 className="text-3xl font-bold text-gray-900">
                                    🖼️ Galeri Foto
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
                            Galeri Dokumentasi
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Dokumentasi visual kegiatan dan momen penting Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat
                        </p>
                    </div>

                    {/* Categories Filter */}
                    {categories.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            <Button variant="outline" size="sm" className="bg-purple-100 border-purple-300">
                                Semua Kategori
                            </Button>
                            {categories.map((category) => (
                                <Button key={category} variant="outline" size="sm">
                                    {category}
                                </Button>
                            ))}
                        </div>
                    )}

                    {galleries.data.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {galleries.data.map((item) => (
                                <div 
                                    key={item.id} 
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                                    onClick={() => setSelectedImage(item)}
                                >
                                    <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                                        <img
                                            src={item.image_path}
                                            alt={item.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        {item.description && (
                                            <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                                                {item.description}
                                            </p>
                                        )}
                                        {item.category && (
                                            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                                                {item.category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto">
                                <ImageIcon className="h-24 w-24 text-gray-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Belum Ada Foto
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Galeri foto akan segera dipublikasikan. 
                                    Silakan kembali lagi nanti untuk melihat dokumentasi kegiatan terbaru.
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
                                <Link href="/pengumuman">
                                    <Button variant="outline" className="w-full">
                                        📢 Pengumuman
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

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <img
                            src={selectedImage.image_path}
                            alt={selectedImage.title}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
                            <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                            {selectedImage.description && (
                                <p className="text-gray-300">{selectedImage.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

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