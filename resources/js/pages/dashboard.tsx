import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Users, Calendar, FileText, Image, Play, BarChart3, Plus, Settings } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard Admin',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard Admin" />
            <div className="p-6">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        🏛️ Panel Admin Dinas Pendidikan dan Kebudayaan
                    </h1>
                    <p className="text-blue-100 text-lg">
                        Kelola konten dan informasi untuk Kabupaten Kutai Barat
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Struktur Organisasi</p>
                                <p className="text-2xl font-bold text-gray-900">1</p>
                            </div>
                            <Users className="h-8 w-8 text-blue-500" />
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Agenda Aktif</p>
                                <p className="text-2xl font-bold text-gray-900">3</p>
                            </div>
                            <Calendar className="h-8 w-8 text-green-500" />
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Pengumuman</p>
                                <p className="text-2xl font-bold text-gray-900">3</p>
                            </div>
                            <FileText className="h-8 w-8 text-orange-500" />
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Media (Foto & Video)</p>
                                <p className="text-2xl font-bold text-gray-900">5</p>
                            </div>
                            <Image className="h-8 w-8 text-purple-500" />
                        </div>
                    </div>
                </div>

                {/* Management Menu */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Content Management */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <Settings className="h-6 w-6 mr-2 text-blue-600" />
                            📝 Kelola Konten
                        </h2>
                        <div className="space-y-4">
                            <Link href="/admin/organizational-structures">
                                <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                                    <Users className="h-8 w-8 text-blue-600 mr-4" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Struktur Organisasi</h3>
                                        <p className="text-gray-600 text-sm">Kelola gambar dan informasi struktur organisasi</p>
                                    </div>
                                    <Plus className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link href="/admin/agendas">
                                <div className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
                                    <Calendar className="h-8 w-8 text-green-600 mr-4" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Agenda Kegiatan</h3>
                                        <p className="text-gray-600 text-sm">Tambah, edit, dan hapus agenda kegiatan</p>
                                    </div>
                                    <Plus className="h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <div className="flex items-center p-4 bg-orange-50 rounded-lg opacity-75">
                                <FileText className="h-8 w-8 text-orange-600 mr-4" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">Pengumuman</h3>
                                    <p className="text-gray-600 text-sm">Kelola pengumuman dan informasi penting</p>
                                </div>
                                <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">Segera</span>
                            </div>

                            <div className="flex items-center p-4 bg-purple-50 rounded-lg opacity-75">
                                <Image className="h-8 w-8 text-purple-600 mr-4" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">Galeri Foto</h3>
                                    <p className="text-gray-600 text-sm">Upload dan kelola galeri foto kegiatan</p>
                                </div>
                                <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">Segera</span>
                            </div>

                            <div className="flex items-center p-4 bg-red-50 rounded-lg opacity-75">
                                <Play className="h-8 w-8 text-red-600 mr-4" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">Video</h3>
                                    <p className="text-gray-600 text-sm">Kelola koleksi video dan dokumentasi</p>
                                </div>
                                <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">Segera</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <BarChart3 className="h-6 w-6 mr-2 text-green-600" />
                            ⚡ Aksi Cepat
                        </h2>
                        <div className="space-y-4">
                            <Link href="/admin/agendas/create">
                                <Button className="w-full justify-start h-12 bg-green-600 hover:bg-green-700">
                                    <Plus className="h-5 w-5 mr-2" />
                                    Tambah Agenda Baru
                                </Button>
                            </Link>

                            <Link href="/admin/organizational-structures/create">
                                <Button variant="outline" className="w-full justify-start h-12 border-blue-300 text-blue-700 hover:bg-blue-50">
                                    <Plus className="h-5 w-5 mr-2" />
                                    Update Struktur Organisasi
                                </Button>
                            </Link>

                            <Link href="/">
                                <Button variant="outline" className="w-full justify-start h-12">
                                    <Image className="h-5 w-5 mr-2" />
                                    Lihat Website Publik
                                </Button>
                            </Link>
                        </div>

                        {/* Recent Activity */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-4">📈 Aktivitas Terbaru</h3>
                            <div className="space-y-3">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span>Agenda "Rapat Koordinasi" ditambahkan</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span>Struktur organisasi diperbarui</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                    <span>Pengumuman baru dipublikasikan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">🎯 Panduan Penggunaan</h3>
                        <ul className="space-y-2 text-blue-100">
                            <li>• Gunakan menu "Kelola Konten" untuk menambah/edit informasi</li>
                            <li>• Pastikan gambar yang diupload berkualitas tinggi</li>
                            <li>• Update agenda secara berkala</li>
                            <li>• Gunakan kategori untuk mengorganisir konten</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">📊 Status Sistem</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-green-100">Website Status</span>
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm font-medium">
                                    Online
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-green-100">Database</span>
                                <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm font-medium">
                                    Connected
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-green-100">Last Update</span>
                                <span className="text-green-100 text-sm">Hari ini</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}