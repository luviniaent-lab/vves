'use client'

import { useState } from 'react'
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Shield, 
  Key, 
  Users, 
  Settings,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import toast from 'react-hot-toast'

const documentationSections = [
  {
    id: 'overview',
    title: 'Admin System Overview',
    icon: Shield,
    content: `
The VVES Admin System provides comprehensive content management capabilities for authorized personnel. 
This system allows administrators to manage website content, user accounts, and system settings securely.

Key Features:
• Content Management System (CMS) access
• Real-time content editing
• Media library management
• User account administration
• Backup and restore functionality
• Security monitoring and logs
    `
  },
  {
    id: 'authentication',
    title: 'Authentication & Security',
    icon: Key,
    content: `
Authentication Process:
1. Navigate to the website and click "Login" in the top navigation
2. Enter your assigned username and password
3. Upon successful authentication, you'll be redirected to the admin dashboard
4. Your session will remain active for 24 hours or until manual logout

Security Features:
• Encrypted password storage
• Session timeout protection
• Failed login attempt monitoring
• IP address logging
• Two-factor authentication (optional)

Password Requirements:
• Minimum 8 characters
• Must include uppercase and lowercase letters
• Must include at least one number
• Must include at least one special character
    `
  },
  {
    id: 'roles',
    title: 'User Roles & Permissions',
    icon: Users,
    content: `
Admin Roles:

Super Admin:
• Full system access
• User management
• System configuration
• Backup/restore operations

Content Editor:
• Content creation and editing
• Media library access
• Event management
• Limited user management

Moderator:
• Content review and approval
• Comment moderation
• Basic reporting access

Viewer:
• Read-only access to admin dashboard
• Analytics viewing
• Report generation
    `
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting Guide',
    icon: Settings,
    content: `
Common Issues and Solutions:

Login Problems:
• Verify username and password are correct
• Check if Caps Lock is enabled
• Clear browser cache and cookies
• Try using an incognito/private browser window

Content Not Saving:
• Check internet connection
• Verify you have edit permissions
• Try refreshing the page and logging in again
• Contact system administrator if issue persists

Backup/Restore Issues:
• Ensure sufficient storage space
• Verify backup file integrity
• Check file permissions
• Contact technical support for large restore operations

Performance Issues:
• Clear browser cache
• Disable browser extensions temporarily
• Use latest version of supported browsers
• Check system requirements
    `
  }
]

export default function LoginDocumentation() {
  const [activeSection, setActiveSection] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')

  const handleDownloadPDF = () => {
    toast.success('Documentation PDF download started - Feature simulated')
  }

  const handlePrintGuide = () => {
    window.print()
  }

  const filteredSections = documentationSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Login Documentation</h2>
        <p className="text-gray-600">Comprehensive guide for admin system access and usage</p>
      </div>

      {/* Action Bar */}
      <div className="card mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleDownloadPDF}
              className="btn-secondary flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={handlePrintGuide}
              className="btn-outline flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Print Guide</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4">Documentation Sections</h3>
            <nav className="space-y-2">
              {filteredSections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left ${
                      activeSection === section.id
                        ? 'bg-indian-red text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{section.title}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="card">
            {filteredSections.map((section) => {
              if (section.id !== activeSection) return null
              
              const Icon = section.icon
              return (
                <div key={section.id}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-indian-red rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900">{section.title}</h3>
                  </div>
                  
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed font-sans">
                      {section.content}
                    </pre>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Reference Card */}
          <div className="card mt-6">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-indian-red mr-2" />
              Quick Reference
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-green-800">Demo Credentials</span>
                </div>
                <p className="text-sm text-green-700">Username: <code className="bg-green-100 px-1 rounded">adminuser</code></p>
                <p className="text-sm text-green-700">Password: <code className="bg-green-100 px-1 rounded">VVESAdmin@2025</code></p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-blue-800">Support Contact</span>
                </div>
                <p className="text-sm text-blue-700">Email: admin-support@vves.org</p>
                <p className="text-sm text-blue-700">Phone: +91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}