
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, Plus } from 'lucide-react';

const BumpDiary = () => {
  const [photos] = useState([
    { week: 24, date: 'Today', note: 'Finally showing! Feeling so proud of my bump.' },
    { week: 20, date: '4 weeks ago', note: 'Halfway mark! Baby is moving so much.' },
    { week: 16, date: '8 weeks ago', note: 'First time I could really see the bump!' },
    { week: 12, date: '12 weeks ago', note: 'Just starting to show, so exciting!' }
  ]);

  return (
    <div className="space-y-6 pb-20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-rose-600 mb-2">Bump Diary</h2>
        <p className="text-gray-600">Capture your beautiful journey</p>
      </div>

      {/* Add New Photo */}
      <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
        <CardContent className="p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="font-bold text-lg text-pink-700 mb-2">
              Capture This Week
            </h3>
            <p className="text-pink-600 mb-4">
              Document your beautiful bump at week 24
            </p>
            <Button className="bg-pink-600 hover:bg-pink-700">
              <Camera className="w-4 h-4 mr-2" />
              Take Photo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Photo Timeline */}
      <div className="space-y-4">
        {photos.map((photo, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex">
                {/* Photo Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-6 h-6 text-rose-400 mx-auto mb-1" />
                    <Badge variant="secondary" className="text-xs">
                      Week {photo.week}
                    </Badge>
                  </div>
                </div>
                
                {/* Photo Details */}
                <div className="flex-1 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {photo.date}
                    </Badge>
                    <Badge className="bg-rose-500 text-xs">
                      Week {photo.week}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "{photo.note}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Visualization */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-700">Your Growth Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-purple-600">
              <span>Week 12</span>
              <span>Week 24</span>
              <span>Week 36</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                <span className="text-xs">🤱</span>
              </div>
              <div className="flex-1 h-2 bg-purple-200 rounded-full overflow-hidden">
                <div className="w-3/5 h-full bg-purple-500 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xs">👶</span>
              </div>
            </div>
            <p className="text-center text-sm text-purple-600">
              See how your bump has grown over time
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Sharing Options */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-700">Share Your Joy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Share with Partner
            </Button>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add to Album
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BumpDiary;
