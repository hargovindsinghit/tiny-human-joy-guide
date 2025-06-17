
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Heart, Calendar, Camera, User, Plus } from 'lucide-react';
import WeeklyTimeline from '@/components/WeeklyTimeline';
import HealthTracker from '@/components/HealthTracker';
import BumpDiary from '@/components/BumpDiary';
import DailyAffirmation from '@/components/DailyAffirmation';
import MilestoneCard from '@/components/MilestoneCard';

const Index = () => {
  const [currentWeek, setCurrentWeek] = useState(24);
  const [activeTab, setActiveTab] = useState('home');
  const [userName] = useState('Sarah');
  const [dueDate] = useState(new Date(2024, 11, 15)); // December 15, 2024
  
  const getDaysUntilDue = () => {
    const today = new Date();
    const timeDiff = dueDate.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const getPregnancyProgress = () => {
    return Math.round((currentWeek / 40) * 100);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'timeline':
        return <WeeklyTimeline currentWeek={currentWeek} />;
      case 'health':
        return <HealthTracker />;
      case 'diary':
        return <BumpDiary />;
      default:
        return (
          <div className="space-y-6">
            {/* Welcome Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-rose-600 mb-2">
                Hello, {userName}! 💕
              </h1>
              <p className="text-lg text-gray-600">
                You're {currentWeek} weeks along
              </p>
            </div>

            {/* Pregnancy Progress */}
            <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-rose-700">
                  <Heart className="w-5 h-5" />
                  Your Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Week {currentWeek} of 40</span>
                    <span>{getDaysUntilDue()} days to go</span>
                  </div>
                  <Progress value={getPregnancyProgress()} className="h-3" />
                  <p className="text-center text-rose-600 font-medium">
                    {getPregnancyProgress()}% complete
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Daily Affirmation */}
            <DailyAffirmation />

            {/* This Week's Milestone */}
            <MilestoneCard week={currentWeek} />

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Camera className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-purple-700">Bump Photo</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Plus className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-700">Log Symptoms</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-700">Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-rose-50 rounded-lg">
                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Logged mood: Happy</span>
                    <Badge variant="secondary" className="ml-auto text-xs">Today</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Took bump photo</span>
                    <Badge variant="secondary" className="ml-auto text-xs">Yesterday</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Doctor's appointment</span>
                    <Badge variant="secondary" className="ml-auto text-xs">3 days ago</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-25 via-pink-25 to-purple-25">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {renderTabContent()}
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="flex justify-around py-2">
            <Button
              variant={activeTab === 'home' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('home')}
              className="flex flex-col items-center gap-1 h-auto py-3"
            >
              <Heart className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </Button>
            
            <Button
              variant={activeTab === 'timeline' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('timeline')}
              className="flex flex-col items-center gap-1 h-auto py-3"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-xs">Timeline</span>
            </Button>
            
            <Button
              variant={activeTab === 'health' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('health')}
              className="flex flex-col items-center gap-1 h-auto py-3"
            >
              <User className="w-5 h-5" />
              <span className="text-xs">Health</span>
            </Button>
            
            <Button
              variant={activeTab === 'diary' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('diary')}
              className="flex flex-col items-center gap-1 h-auto py-3"
            >
              <Camera className="w-5 h-5" />
              <span className="text-xs">Diary</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
