import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Target, 
  LogOut,
  Settings,
  BarChart3,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { 
      path: '/admin/dashboard', 
      icon: LayoutDashboard, 
      label: 'Dashboard',
      description: 'Overview and analytics'
    },
    { 
      path: '/admin/users', 
      icon: Users, 
      label: 'Users',
      description: 'Manage registered users'
    },
    { 
      path: '/admin/goals', 
      icon: Target, 
      label: 'Goals',
      description: 'View all user goals'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-card-foreground">Admin Panel</h1>
                <p className="text-sm text-muted-foreground">Self-Bet Management</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                  <div className="flex-1">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Button variant="outline" className="w-full justify-start">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start mt-2 text-destructive hover:text-destructive hover:bg-destructive/10">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 