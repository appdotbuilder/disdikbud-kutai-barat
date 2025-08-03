import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, X } from 'lucide-react';

interface Props {
    videos: {
        data: Array<{
            id: number;
            title: string;
            description?: string;
            video_url: string;
            thumbnail_url?: string;
            category?: string;
            created_at: string;
        }>;
        links: unknown;
        meta: unknown;
    };
    [key: string]: unknown;
}

export default function Videos({ videos }: Props) {
    const [selectedVideo, setSelectedVideo] = useState<{
        title: string;
        video_url: string;
        description?: string;
    } | null>(null);

    const categories = [...new Set(videos.data.map(item => item.category).filter(Boolean))];

    const getEmbedUrl = (url: string) => {
        // Convert YouTube URLs to embed format
        if (url.includes('youtube.com/watch?v=')) {
            return url.replace('youtube.com/watch?v=', 'youtube.com/embed/');
        }
        if (url.includes('youtu.be/')) {
            return url.replace('youtu.be/', 'youtube.com/embed/');
        }
        return url;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
            {/* Header */}
            <header className="bg-white shadow-lg border-b-4 border-red-600">
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
                                <Play className="h-8 w-8 text-red-600" />
                                <h1 className="text-3xl font-bold text-gray-900">
                                    🎥 Video
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
                            Koleksi Video
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Video dokumentasi dan informasi dari Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat
                        </p>
                    </div>

                    {/* Categories Filter */}
                    {categories.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            <Button variant="outline" size="sm" className="bg-red-100 border-red-300">
                                Semua Kategori
                            </Button>
                            {categories.map((category) => (
                                <Button key={category} variant="outline" size="sm">
                                    {category}
                                </Button>
                            ))}
                        </div>
                    )}

                    {videos.data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videos.data.map((video) => (
                                <div 
                                    key={video.id} 
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                                    onClick={() => setSelectedVideo(video)}
                                >
                                    <div className="relative aspect-video overflow-hidden bg-gray-900">
                                        {video.thumbnail_url ? (
                                            <img
                                                src={video.thumbnail_url}
                                                alt={video.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600">
                                                <Play className="h-16 w-16 text-white opacity-80" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white bg-opacity-90 rounded-full p-4">
                                                <Play className="h-8 w-8 text-red-600" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                                            {video.title}
                                        </h3>
                                        {video.description && (
                                            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                                {video.description}
                                            </p>
                                        )}
                                        {video.category && (
                                            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                                {video.category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto">
                                <Play className="h-24 w-24 text-gray-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Belum Ada Video
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Video dokumentasi akan segera dipublikasikan. 
                                    Silakan kembali lagi nanti untuk melihat konten video terbaru.
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
                                <Link href="/galeri">
                                    <Button variant="outline" className="w-full">
                                        🖼️ Galeri
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-4xl">
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <div className="bg-white rounded-lg overflow-hidden">
                            <div className="aspect-video">
                                <iframe
                                    src={getEmbedUrl(selectedVideo.video_url)}
                                    title={selectedVideo.title}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {selectedVideo.title}
                                </h3>
                                {selectedVideo.description && (
                                    <p className="text-gray-700 leading-relaxed">
                                        {selectedVideo.description}
                                    </p>
                                )}
                            </div>
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