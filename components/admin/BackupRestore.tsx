'use client'

import { useState } from 'react'
import { 
  Download, 
  Upload, 
  Database, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Trash2,
  RefreshCw
} from 'lucide-react'
import toast from 'react-hot-toast'

interface Backup {
  id: string
  name: string
  date: string
  size: string
  type: 'auto' | 'manual'
  status: 'completed' | 'in-progress' | 'failed'
}

const mockBackups: Backup[] = [
  {
    id: '1',
    name: 'Full Site Backup - January 2025',
    date: '2025-01-02 14:30:00',
    size: '245 MB',
    type: 'manual',
    status: 'completed'
  },
  {
    id: '2',
    name: 'Auto Backup - Weekly',
    date: '2025-01-01 02:00:00',
    size: '238 MB',
    type: 'auto',
    status: 'completed'
  },
  {
    id: '3',
    name: 'Content Only Backup',
    date: '2024-12-30 16:45:00',
    size: '89 MB',
    type: 'manual',
    status: 'completed'
  }
]

export default function BackupRestore() {
  const [backups, setBackups] = useState<Backup[]>(mockBackups)
  const [isCreatingBackup, setIsCreatingBackup] = useState(false)
  const [showRestoreConfirm, setShowRestoreConfirm] = useState<string | null>(null)

  const handleCreateBackup = async () => {
    setIsCreatingBackup(true)
    
    // Simulate backup creation
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const newBackup: Backup = {
      id: Date.now().toString(),
      name: `Manual Backup - ${new Date().toLocaleDateString()}`,
      date: new Date().toISOString().replace('T', ' ').split('.')[0],
      size: `${Math.floor(Math.random() * 100 + 200)} MB`,
      type: 'manual',
      status: 'completed'
    }
    
    setBackups(prev => [newBackup, ...prev])
    setIsCreatingBackup(false)
    toast.success('Backup created successfully!')
  }

  const handleRestore = async (backupId: string) => {
    const backup = backups.find(b => b.id === backupId)
    if (!backup) return

    setShowRestoreConfirm(null)
    
    // Simulate restore process
    toast.loading('Restoring backup...', { duration: 2000 })
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success(`Successfully restored from: ${backup.name}`)
  }

  const handleDeleteBackup = (backupId: string) => {
    setBackups(prev => prev.filter(b => b.id !== backupId))
    toast.success('Backup deleted successfully')
  }

  const getStatusIcon = (status: Backup['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'in-progress':
        return <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />
      case 'failed':
        return <AlertTriangle className="w-5 h-5 text-red-500" />
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Backup & Restore</h2>
        <p className="text-gray-600">Manage your website backups and restore points</p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Create Backup */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Database className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Create New Backup</h3>
              <p className="text-sm text-gray-600">Generate a complete backup of your website</p>
            </div>
          </div>
          
          <button
            onClick={handleCreateBackup}
            disabled={isCreatingBackup}
            className="btn-primary w-full disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {isCreatingBackup ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Creating Backup...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Create Backup</span>
              </>
            )}
          </button>
        </div>

        {/* Upload Backup */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Upload className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Upload Backup</h3>
              <p className="text-sm text-gray-600">Upload an existing backup file</p>
            </div>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indian-red transition-colors">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-2">Drop backup file here or click to browse</p>
            <button className="btn-outline">
              Select File
            </button>
          </div>
        </div>
      </div>

      {/* Backup History */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-serif font-bold text-gray-900">Backup History</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Auto-backup: Every Sunday at 2:00 AM</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Backup Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Date & Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Size</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {backups.map((backup) => (
                <tr key={backup.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{backup.name}</div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{backup.date}</td>
                  <td className="py-3 px-4 text-gray-600">{backup.size}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      backup.type === 'auto' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {backup.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(backup.status)}
                      <span className="text-sm capitalize">{backup.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toast.success('Download started - Feature simulated')}
                        className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setShowRestoreConfirm(backup.id)}
                        className="p-1 text-green-600 hover:text-green-800 transition-colors"
                        title="Restore"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteBackup(backup.id)}
                        className="p-1 text-red-600 hover:text-red-800 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Restore Confirmation Modal */}
      {showRestoreConfirm && (
        <RestoreConfirmModal
          backup={backups.find(b => b.id === showRestoreConfirm)!}
          onConfirm={() => handleRestore(showRestoreConfirm)}
          onCancel={() => setShowRestoreConfirm(null)}
        />
      )}
    </div>
  )
}

interface RestoreConfirmModalProps {
  backup: Backup
  onConfirm: () => void
  onCancel: () => void
}

function RestoreConfirmModal({ backup, onConfirm, onCancel }: RestoreConfirmModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Confirm Restore</h3>
              <p className="text-sm text-gray-600">This action cannot be undone</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Backup:</strong> {backup.name}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Date:</strong> {backup.date}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Size:</strong> {backup.size}
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Warning:</strong> Restoring this backup will replace all current content with the backup data. 
              Any changes made after the backup date will be lost.
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={onConfirm}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Restore Backup
            </button>
            <button
              onClick={onCancel}
              className="flex-1 btn-outline"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}