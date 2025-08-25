import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  TrendingUp, 
  TrendingDown,
  Activity,
  DollarSign,
  CheckCircle,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  // Mock data - in a real app, this would come from an API
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      description: 'Active registered users'
    },
    {
      title: 'Active Goals',
      value: '856',
      change: '+8%',
      changeType: 'positive',
      icon: Target,
      description: 'Goals in progress'
    },
    {
      title: 'Success Rate',
      value: '78%',
      change: '+5%',
      changeType: 'positive',
      icon: CheckCircle,
      description: 'Completed goals'
    },
    {
      title: 'Revenue',
      value: '$12,450',
      change: '+23%',
      changeType: 'positive',
      icon: DollarSign,
      description: 'Total revenue this month'
    }
  ];

  const recentActivity = [
    {
      user: 'John Doe',
      action: 'Created a new goal',
      goal: 'Learn React in 30 days',
      time: '2 hours ago',
      status: 'active'
    },
    {
      user: 'Jane Smith',
      action: 'Completed goal',
      goal: 'Run 5km daily',
      time: '4 hours ago',
      status: 'completed'
    },
    {
      user: 'Mike Johnson',
      action: 'Submitted proof',
      goal: 'Read 20 pages daily',
      time: '6 hours ago',
      status: 'pending'
    },
    {
      user: 'Sarah Wilson',
      action: 'Joined the platform',
      goal: 'New user registration',
      time: '1 day ago',
      status: 'new'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to the Self-Bet admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge 
                    variant={stat.changeType === 'positive' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {stat.change}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest user activities and goal updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{activity.user}</span>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.goal}</p>
                    <Badge 
                      variant={
                        activity.status === 'completed' ? 'default' :
                        activity.status === 'active' ? 'secondary' :
                        activity.status === 'pending' ? 'outline' : 'default'
                      }
                      className="mt-1"
                    >
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common admin tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <Users className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-medium text-foreground">View Users</h3>
                <p className="text-sm text-muted-foreground">Manage user accounts</p>
              </div>
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <Target className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-medium text-foreground">View Goals</h3>
                <p className="text-sm text-muted-foreground">Monitor all goals</p>
              </div>
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <Activity className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-medium text-foreground">Analytics</h3>
                <p className="text-sm text-muted-foreground">View detailed reports</p>
              </div>
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <Clock className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-medium text-foreground">Pending</h3>
                <p className="text-sm text-muted-foreground">Review submissions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard; 