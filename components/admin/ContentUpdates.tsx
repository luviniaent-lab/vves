'use client'

import { useState } from 'react'
import { Save, Upload, Eye, RefreshCw, Image as ImageIcon } from 'lucide-react'
import toast from 'react-hot-toast'

interface ContentSection {
  id: string
  title: string
  content: string
  lastUpdated: string
}

const initialContent: ContentSection[] = [
  {
    id: 'hero',
    title: 'Hero Section',
    content: 'Preserving Ancient Wisdom for Modern Understanding',
    lastUpdated: '2025-01-02'
  },
  {
    id: 'mission',
    title: 'Mission Statement',
    content: 'To bridge the gap between ancient Vedic knowledge and contemporary scientific understanding through rigorous research, education, and preservation efforts.',
    lastUpdated: '2025-01-01'
  },
  {
    id: 'about',
    title: 'About Description',
    content: 'The Vedic Vigyanam Explorer Society (VVES) is a pioneering organization dedicated to the systematic study, interpretation, and preservation of Vedic scientific knowledge.',
    lastUpdated: '2024-12-30'
  }
]

export default function ContentUpdates() {
  const [content, setContent] = useState<ContentSection[]>(initialContent)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleEdit = (id: string) => {
    setEditingId(id)
  }

  const handleSave = async (id: string, newContent: string) => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setContent(prev => prev.map(item => 
      item.id === id 
        ? { ...item, content: newContent, lastUpdated: new Date().toISOString().split('T')[0] }
        : item
    ))
    
    setEditingId(null)
    setIsLoading(false)
    toast.success('Content updated successfully!')
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  const handleImageUpload = (sectionId: string) => {
    toast.success(`Image upload for ${sectionId} - Feature simulated`)
  }

  const handlePreview = () => {
    toast.success('Preview mode activated - Feature simulated')
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Content Updates</h2>
        <p className="text-gray-600">Edit and manage website content in real-time</p>
      </div>

      {/* Action Bar */}
      <div className="card mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePreview}
              className="btn-outline flex items-center space-x-2"
            >
              <Eye className="w-4 h-4" />
              <span>Preview Changes</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh Content</span>
            </button>
          </div>
          
          <div className="text-sm text-gray-500">
            Last sync: {new Date().toLocaleString()}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {content.map((section) => (
          <ContentEditor
            key={section.id}
            section={section}
            isEditing={editingId === section.id}
            isLoading={isLoading}
            onEdit={() => handleEdit(section.id)}
            onSave={(newContent) => handleSave(section.id, newContent)}
            onCancel={handleCancel}
            onImageUpload={() => handleImageUpload(section.id)}
          />
        ))}
      </div>

      {/* Bulk Actions */}
      <div className="card mt-8">
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Bulk Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary flex items-center justify-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save All Changes</span>
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Publish Updates</span>
          </button>
          <button className="btn-outline flex items-center justify-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Revert All</span>
          </button>
        </div>
      </div>
    </div>
  )
}

interface ContentEditorProps {
  section: ContentSection
  isEditing: boolean
  isLoading: boolean
  onEdit: () => void
  onSave: (content: string) => void
  onCancel: () => void
  onImageUpload: () => void
}

function ContentEditor({ 
  section, 
  isEditing, 
  isLoading, 
  onEdit, 
  onSave, 
  onCancel, 
  onImageUpload 
}: ContentEditorProps) {
  const [editContent, setEditContent] = useState(section.content)

  const handleSave = () => {
    onSave(editContent)
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
          <p className="text-sm text-gray-500">Last updated: {section.lastUpdated}</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={onImageUpload}
            className="p-2 text-gray-500 hover:text-indian-red transition-colors"
            title="Upload Image"
          >
            <ImageIcon className="w-5 h-5" />
          </button>
          
          {!isEditing ? (
            <button
              onClick={onEdit}
              className="btn-outline"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="btn-primary disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                Save
              </button>
              <button
                onClick={onCancel}
                disabled={isLoading}
                className="btn-outline disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {isEditing ? (
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="input-field min-h-[120px] resize-vertical"
          placeholder="Enter content..."
        />
      ) : (
        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="text-gray-700 whitespace-pre-wrap">{section.content}</p>
        </div>
      )}
    </div>
  )
}