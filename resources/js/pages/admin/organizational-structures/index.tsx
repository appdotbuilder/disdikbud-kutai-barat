import React from 'react';
import { Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Users, Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';

interface Props {
    structures: {
        data: Array<{
            id: number;
            title: string;
            image_path: string;
            description?: string;
            is_active: boolean;
            created_at: string;
        }>;
        links: unknown;
        meta: unknown;
    };
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Struktur Organisasi',
        href: '/admin/organizational-structures',
    },
];

export default function OrganizationalStructuresIndex({ structures }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const handleDelete = (id: number, title: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus "${title}"?`)) {
            router.delete(route('admin.organizational-structures.destroy', id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Struktur Organisasi" />
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                        <Users className="h-8 w-8 text-blue-600" />
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                Kelola Struktur Organisasi
                            </h1>
                            <p className="text-gray-600">
                                Kelola gambar dan informasi struktur organisasi dinas
                            </p>
                        </div>
                    </div>
                    <Link href="/admin/organizational-structures/create">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            <Plus className="h-4 w-4 mr-2" />
                            Tambah Struktur
                        </Button>
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Struktur</p>
                                <p className="text-2xl font-bold text-gray-900">{structures.data.length}</p>
                            </div>
                            <Users className="h-8 w-8 text-blue-500" />
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Aktif</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {structures.data.filter(s => s.is_active).length}
                                </p>
                            </div>
                            <Eye className="h-8 w-8 text-green-500" />
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-gray-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Tidak Aktif</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {structures.data.filter(s => !s.is_active).length}
                                </p>
                            </div>
                            <EyeOff className="h-8 w-8 text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* Structures List */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Daftar Struktur Organisasi
                        </h2>
                    </div>
                    
                    {structures.data.length > 0 ? (
                        <div className="divide-y divide-gray-200">
                            {structures.data.map((structure) => (
                                <div key={structure.id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start space-x-4 flex-1">
                                            <div className="w-24 h-18 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                                                <img
                                                    src={structure.image_path}
                                                    alt={structure.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                                                        {structure.title}
                                                    </h3>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                        structure.is_active 
                                                            ? 'bg-green-100 text-green-800' 
                                                            : 'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {structure.is_active ? 'Aktif' : 'Tidak Aktif'}
                                                    </span>
                                                </div>
                                                {structure.description && (
                                                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                                                        {structure.description}
                                                    </p>
                                                )}
                                                <p className="text-gray-500 text-xs">
                                                    Dibuat pada {formatDate(structure.created_at)}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-2 ml-4">
                                            <Link href={`/admin/organizational-structures/${structure.id}`}>
                                                <Button variant="outline" size="sm">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <Link href={`/admin/organizational-structures/${structure.id}/edit`}>
                                                <Button variant="outline" size="sm">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleDelete(structure.id, structure.title)}
                                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-12 text-center">
                            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Belum Ada Struktur Organisasi
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Mulai dengan menambahkan struktur organisasi pertama Anda.
                            </p>
                            <Link href="/admin/organizational-structures/create">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Tambah Struktur Pertama
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Tips Pengelolaan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div>
                            <p className="font-medium mb-1">Format Gambar:</p>
                            <p>Gunakan format PNG atau JPG dengan resolusi minimal 800x600 px</p>
                        </div>
                        <div>
                            <p className="font-medium mb-1">Ukuran File:</p>
                            <p>Maksimal 2MB untuk performa website yang optimal</p>
                        </div>
                        <div>
                            <p className="font-medium mb-1">Konten:</p>
                            <p>Pastikan struktur organisasi selalu update dan akurat</p>
                        </div>
                        <div>
                            <p className="font-medium mb-1">Status:</p>
                            <p>Hanya struktur dengan status "Aktif" yang tampil di website</p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}