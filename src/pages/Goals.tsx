import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  MoreHorizontal,
  Target,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp
} from 'lucide-react';

const Goals = () => {
  // Mock goals data
  const goals = [
    {
      id: 1,
      title: 'Learn React in 30 days',
      user: 'John Doe',
      userEmail: 'john.doe@example.com',
      category: 'Learning',
      status: 'active',
      progress: 75,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      stake: 100,
      description: 'Complete React course and build 3 projects',
      proofCount: 12,
      lastProof: '2 hours ago'
    },
    {
      id: 2,
      title: 'Run 5km daily',
      user: 'Jane Smith',
      userEmail: 'jane.smith@example.com',
      category: 'Fitness',
      status: 'completed',
      progress: 100,
      startDate: '2024-01-10',
      endDate: '2024-02-10',
      stake: 50,
      description: 'Run 5km every day for 30 days',
      proofCount: 30,
      lastProof: '1 day ago'
    },
    {
      id: 3,
      title: 'Read 20 pages daily',
      user: 'Mike Johnson',
      userEmail: 'mike.johnson@example.com',
      category: 'Reading',
      status: 'active',
      progress: 45,
      startDate: '2024-01-05',
      endDate: '2024-03-05',
      stake: 75,
      description: 'Read 20 pages of a book every day',
      proofCount: 18,
      lastProof: '6 hours ago'
    },
    {
      id: 4,
      title: 'Meditate for 10 minutes',
      user: 'Sarah Wilson',
      userEmail: 'sarah.wilson@example.com',
      category: 'Wellness',
      status: 'pending',
      progress: 0,
      startDate: '2024-01-20',
      endDate: '2024-02-20',
      stake: 25,
      description: 'Meditate for 10 minutes every morning',
      proofCount: 0,
      lastProof: 'Never'
    },
    {
      id: 5,
      title: 'Learn Spanish basics',
      user: 'David Brown',
      userEmail: 'david.brown@example.com',
      category: 'Learning',
      status: 'failed',
      progress: 30,
      startDate: '2024-01-12',
      endDate: '2024-02-12',
      stake: 150,
      description: 'Complete Spanish basics course',
      proofCount: 8,
      lastProof: '1 week ago'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'default',
      completed: 'default',
      pending: 'secondary',
      failed: 'destructive'
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || 'outline'}>
        {status}
      </Badge>
    );
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Goals</h1>
          <p className="text-muted-foreground mt-2">Monitor and manage all user goals</p>
        </div>
        <Button>
          <Target className="w-4 h-4 mr-2" />
          View Analytics
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Goals</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">856</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">543</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Stakes</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$45,230</div>
            <p className="text-xs text-muted-foreground">+23% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Goal Management</CardTitle>
          <CardDescription>Search and filter goals by various criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search goals by title, user, or category..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Goals Table */}
          <div className="border border-border rounded-lg">
            <div className="bg-muted/50 px-6 py-3 border-b border-border">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
                <div className="col-span-3">Goal & User</div>
                <div className="col-span-2">Category</div>
                <div className="col-span-2">Status & Progress</div>
                <div className="col-span-2">Stake & Dates</div>
                <div className="col-span-2">Proof</div>
                <div className="col-span-1">Actions</div>
              </div>
            </div>
            <div className="divide-y divide-border">
              {goals.map((goal) => (
                <div key={goal.id} className="px-6 py-4 hover:bg-muted/50 transition-colors">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <div className="font-medium text-foreground">{goal.title}</div>
                      <div className="text-sm text-muted-foreground">{goal.user}</div>
                      <div className="text-xs text-muted-foreground">{goal.userEmail}</div>
                    </div>
                    <div className="col-span-2">
                      <Badge variant="outline">{goal.category}</Badge>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center space-x-2 mb-2">
                        {getStatusBadge(goal.status)}
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getProgressColor(goal.progress)}`}
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{goal.progress}% complete</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-sm font-medium text-foreground">${goal.stake}</div>
                      <div className="text-xs text-muted-foreground">
                        {goal.startDate} - {goal.endDate}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-sm text-foreground">
                        <span className="font-medium">{goal.proofCount}</span> proofs
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Last: {goal.lastProof}
                      </div>
                    </div>
                    <div className="col-span-1">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {goal.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Goals; 