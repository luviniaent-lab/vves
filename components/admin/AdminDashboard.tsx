'use client'

import { useState } from 'react'
import { 
  Settings, 
  Edit3, 
  Database, 
  FileText, 
  Users, 
  BarChart3,
  Calendar,
  BookOpen
} from 'lucide-react'
import { useAuth } from '@/components/auth/AuthProvider'
import CMSAccess from './CMSAccess'
import ContentUpdates from './ContentUpdates'
import BackupRestore from './BackupRestore'
import LoginDocumentation from './LoginDocumentation'

const sidebarItems = [
  { id: 'overview', name: 'Overview', icon: BarChart3 },
  { id: 'cms', name: 'CMS Access', icon: Settings },
  { id: 'content', name: 'Content Updates', icon: Edit3 },
  { id: 'backup', name: 'Backup & Restore', icon: Database },
  { id: 'documentation', name: 'Login Documentation', icon: FileText },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const { user } = useAuth()

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />
      case 'cms':
        return <CMSAccess />
      case 'content':
        return <ContentUpdates />
      case 'backup':
        return <BackupRestore />
      case 'documentation':
        return <LoginDocumentation />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6 border-b">
            <h1 className="text-xl font-serif font-bold text-indian-red">Admin Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Welcome, {user?.username}</p>
          </div>
          
          <nav className="mt-6 px-4">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`admin-sidebar-item w-full ${
                    activeTab === item.id ? 'active' : ''
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

function DashboardOverview() {
  const stats = [
    { name: 'Total Visitors', value: '12,847', icon: Users, color: 'text-blue-600' },
    { name: 'Active Courses', value: '8', icon: BookOpen, color: 'text-green-600' },
    { name: 'Research Papers', value: '24', icon: FileText, color: 'text-purple-600' },
    { name: 'Upcoming Events', value: '3', icon: Calendar, color: 'text-orange-600' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Monitor your website's performance and manage content</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="card">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary flex items-center justify-center space-x-2">
            <Edit3 className="w-4 h-4" />
            <span>Update Content</span>
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2">
            <Database className="w-4 h-4" />
            <span>Create Backup</span>
          </button>
          <button className="btn-outline flex items-center justify-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>View Reports</span>
          </button>
        </div>
      </div>
    </div>
  )
}