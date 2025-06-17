
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Heart } from 'lucide-react';

const HealthTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [recentLogs] = useState([
    { date: 'Today', mood: 'Happy', symptoms: ['Mild nausea'], notes: 'Feeling great today!' },
    { date: 'Yesterday', mood: 'Tired', symptoms: ['Back pain', 'Heartburn'], notes: 'Long day at work' },
    { date: '2 days ago', mood: 'Excited', symptoms: [], notes: 'Felt baby kick for the first time!' }
  ]);

  const moods = [
    { emoji: '😊', label: 'Happy', color: 'bg-yellow-100 text-yellow-800' },
    { emoji: '😴', label: 'Tired', color: 'bg-blue-100 text-blue-800' },
    { emoji: '🤗', label: 'Excited', color: 'bg-pink-100 text-pink-800' },
    { emoji: '😰', label: 'Anxious', color: 'bg-purple-100 text-purple-800' },
    { emoji: '🤢', label: 'Nauseous', color: 'bg-green-100 text-green-800' },
    { emoji: '😌', label: 'Peaceful', color: 'bg-indigo-100 text-indigo-800' }
  ];

  const commonSymptoms = [
    'Morning sickness', 'Back pain', 'Heartburn', 'Swollen feet', 
    'Insomnia', 'Frequent urination', 'Food cravings', 'Fatigue'
  ];

  return (
    <div className="space-y-6 pb-20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-rose-600 mb-2">Health & Wellness</h2>
        <p className="text-gray-600">Track how you're feeling</p>
      </div>

      {/* Quick Mood Check */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Heart className="w-5 h-5" />
            How are you feeling today?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {moods.map((mood) => (
              <Button
                key={mood.label}
                variant={selectedMood === mood.label ? 'default' : 'outline'}
                onClick={() => setSelectedMood(mood.label)}
                className="flex flex-col items-center gap-1 h-auto py-3"
              >
                <span className="text-2xl">{mood.emoji}</span>
                <span className="text-xs">{mood.label}</span>
              </Button>
            ))}
          </div>
          
          {selectedMood && (
            <div className="bg-white bg-opacity-50 p-3 rounded-lg">
              <p className="text-sm text-purple-700 mb-2">
                You're feeling {selectedMood.toLowerCase()} today
              </p>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-1" />
                Add Details
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Common Symptoms */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-700">Common Symptoms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {commonSymptoms.map((symptom) => (
              <Button
                key={symptom}
                variant="outline"
                size="sm"
                className="justify-start text-left h-auto py-2"
              >
                <Plus className="w-3 h-3 mr-2" />
                {symptom}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Logs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-700">Recent Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentLogs.map((log, index) => (
              <div key={index} className="border-l-4 border-rose-200 pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {log.date}
                  </Badge>
                  <Badge className={moods.find(m => m.label === log.mood)?.color}>
                    {moods.find(m => m.label === log.mood)?.emoji} {log.mood}
                  </Badge>
                </div>
                
                {log.symptoms.length > 0 && (
                  <div className="mb-2">
                    <p className="text-xs text-gray-500 mb-1">Symptoms:</p>
                    <div className="flex flex-wrap gap-1">
                      {log.symptoms.map((symptom, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {log.notes && (
                  <p className="text-sm text-gray-600 italic">"{log.notes}"</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">7</div>
            <p className="text-sm text-green-700">Days logged this week</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-rose-50 to-pink-50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-rose-600">😊</div>
            <p className="text-sm text-rose-700">Most common mood</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthTracker;
