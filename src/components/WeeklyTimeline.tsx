
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Calendar } from 'lucide-react';

interface WeeklyTimelineProps {
  currentWeek: number;
}

const WeeklyTimeline = ({ currentWeek }: WeeklyTimelineProps) => {
  const getWeekInfo = (week: number) => {
    const weekData = [
      { week: 4, size: "Poppy Seed", length: "2mm", development: "Neural tube formation begins" },
      { week: 8, size: "Raspberry", length: "16mm", development: "All major organs developing" },
      { week: 12, size: "Lime", length: "6cm", development: "Reflexes are developing" },
      { week: 16, size: "Avocado", length: "12cm", development: "You might feel first movements" },
      { week: 20, size: "Banana", length: "25cm", development: "Hearing is developing" },
      { week: 24, size: "Corn", length: "30cm", development: "Rapid brain development" },
      { week: 28, size: "Eggplant", length: "37cm", development: "Eyes can open and close" },
      { week: 32, size: "Pineapple", length: "42cm", development: "Bones are hardening" },
      { week: 36, size: "Papaya", length: "47cm", development: "Lungs are nearly mature" },
      { week: 40, size: "Watermelon", length: "51cm", development: "Ready to meet you!" }
    ];

    return weekData.find(w => w.week === week) || weekData[Math.floor(week / 4)];
  };

  const currentWeekInfo = getWeekInfo(currentWeek);
  const weeks = Array.from({ length: 10 }, (_, i) => (i + 1) * 4).filter(w => w <= 40);

  return (
    <div className="space-y-6 pb-20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-rose-600 mb-2">Your Baby's Journey</h2>
        <p className="text-gray-600">Week by week development</p>
      </div>

      {/* Current Week Highlight */}
      <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-rose-700">
            <Heart className="w-5 h-5" />
            Week {currentWeek}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🍌</div>
              <div>
                <p className="font-bold text-lg">Size of a {currentWeekInfo?.size}</p>
                <p className="text-sm text-gray-600">About {currentWeekInfo?.length} long</p>
              </div>
            </div>
            <p className="text-rose-700 bg-white bg-opacity-50 p-3 rounded-lg">
              {currentWeekInfo?.development}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="space-y-4">
        {weeks.map((week) => {
          const weekInfo = getWeekInfo(week);
          const isPast = week < currentWeek;
          const isCurrent = week === currentWeek;
          const isFuture = week > currentWeek;

          return (
            <Card 
              key={week}
              className={`${
                isCurrent ? 'bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200' :
                isPast ? 'bg-green-50 border-green-200' :
                'bg-gray-50 border-gray-200'
              } transition-all duration-300`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Badge 
                      variant={isCurrent ? 'default' : isPast ? 'secondary' : 'outline'}
                      className={`${
                        isCurrent ? 'bg-rose-500' :
                        isPast ? 'bg-green-500' :
                        'bg-gray-400'
                      }`}
                    >
                      Week {week}
                    </Badge>
                  </div>
                  <div className="text-2xl">
                    {week <= 8 ? '🌱' : 
                     week <= 16 ? '🌿' :
                     week <= 24 ? '🍼' :
                     week <= 32 ? '👶' : '🤱'}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">
                      Size of a {weekInfo?.size}
                    </p>
                    <p className="text-sm text-gray-600">
                      {weekInfo?.development}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyTimeline;
