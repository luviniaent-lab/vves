'use client'

import { useState } from 'react'
import { 
  Globe, 
  FileText, 
  Image, 
  Video, 
  Calendar, 
  Users, 
  Settings,
  ExternalLink,
  Plus,
  Edit
} from 'lucide-react'
import toast from 'react-hot-toast'

const cmsModules = [
  {
    id: 'pages',
    name: 'Page Management',
    description: 'Manage website pages and content',
    icon: Globe,
    color: 'bg-blue-500',
    actions: ['View Pages', 'Edit Content', 'Add New Page']
  },
  {
    id: 'articles',
    name: 'Articles & Blogs',
    description: 'Create and manage blog posts and articles',
    icon: FileText,
    color: 'bg-green-500',
    actions: ['View Articles', 'Write New Post', 'Manage Categories']
  },
  {
    id: 'media',
    name: 'Media Library',
    description: 'Upload and organize images, videos, and documents',
    icon: Image,
    color: 'bg-purple-500',
    actions: ['Browse Media', 'Upload Files', 'Organize Folders']
  },
  {
    id: 'videos',
    name: 'Video Content',
    description: 'Manage video lectures and presentations',
    icon: Video,
    color: 'bg-red-500',
    actions: ['View Videos', 'Upload Video', 'Edit Metadata']
  },
  {
    id: 'events',
    name: 'Events Management',
    description: 'Create and manage events and workshops',
    icon: Calendar,
    color: 'bg-orange-500',
    actions: ['View Events', 'Create Event', 'Manage Registrations']
  },
  {
    id: 'users',
    name: 'User Management',
    description: 'Manage user accounts and permissions',
    icon: Users,
    color: 'bg-indigo-500',
    actions: ['View Users', 'Add User', 'Manage Roles']
  }
]

export default function CMSAccess() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  const handleModuleAction = (moduleName: string, action: string) => {
    toast.success(`${action} in ${moduleName} - Feature simulated`)
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">CMS Access</h2>
        <p className="text-gray-600">Manage your website content through these modules</p>
      </div>

      {/* CMS Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cmsModules.map((module) => {
          const Icon = module.icon
          return (
            <div key={module.id} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${module.color} text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{module.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                  
                  <div className="space-y-2">
                    {module.actions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleModuleAction(module.name, action)}
                        className="flex items-center space-x-2 text-sm text-indian-red hover:text-indian-deepRed transition-colors"
                      >
                        {action.includes('New') || action.includes('Add') || action.includes('Create') ? (
                          <Plus className="w-4 h-4" />
                        ) : action.includes('Edit') || action.includes('Manage') ? (
                          <Edit className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        <span>{action}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Stats */}
      <div className="card">
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Content Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-600">Active Pages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">48</div>
            <div className="text-sm text-gray-600">Published Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">156</div>
            <div className="text-sm text-gray-600">Media Files</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">24</div>
            <div className="text-sm text-gray-600">Scheduled Events</div>
          </div>
        </div>
      </div>
    </div>
  )
}