
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MilestoneCardProps {
  week: number;
}

const MilestoneCard = ({ week }: MilestoneCardProps) => {
  const getMilestoneInfo = (week: number) => {
    const milestones = [
      { week: 12, title: "First Trimester Complete!", description: "Your baby's organs are formed", emoji: "🎉", color: "from-green-50 to-emerald-50" },
      { week: 16, title: "Gender Reveal Time!", description: "You might learn if it's a boy or girl", emoji: "👶", color: "from-pink-50 to-rose-50" },
      { week: 20, title: "Halfway There!", description: "Your baby is the size of a banana", emoji: "🍌", color: "from-yellow-50 to-amber-50" },
      { week: 24, title: "Viability Milestone!", description: "Baby's chances outside the womb are great", emoji: "💪", color: "from-blue-50 to-indigo-50" },
      { week: 28, title: "Third Trimester!", description: "The final stretch begins", emoji: "🌟", color: "from-purple-50 to-violet-50" },
      { week: 32, title: "Baby's Getting Cozy!", description: "Rapid weight gain happening now", emoji: "🤗", color: "from-teal-50 to-cyan-50" },
      { week: 36, title: "Full Term Soon!", description: "Baby is considered early term", emoji: "⏰", color: "from-orange-50 to-red-50" },
      { week: 40, title: "Due Date!", description: "Your baby is ready to meet you", emoji: "👶", color: "from-rose-50 to-pink-50" }
    ];

    // Find the most recent milestone
    const recentMilestone = milestones
      .filter(m => week >= m.week)
      .pop() || milestones[0];

    return recentMilestone;
  };

  const milestone = getMilestoneInfo(week);

  return (
    <Card className={`bg-gradient-to-r ${milestone.color} border-opacity-50`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-700">
          <span className="text-2xl">{milestone.emoji}</span>
          This Week's Milestone
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-gray-800">{milestone.title}</h3>
          <p className="text-gray-600">{milestone.description}</p>
          <Badge variant="secondary" className="bg-white bg-opacity-50">
            Week {milestone.week}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default MilestoneCard;
