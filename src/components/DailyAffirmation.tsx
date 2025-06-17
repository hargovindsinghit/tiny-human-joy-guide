
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const DailyAffirmation = () => {
  const affirmations = [
    "Your body is doing something incredible today. Trust in its wisdom.",
    "Every day, you and your baby grow stronger together.",
    "You are already an amazing parent, showing love before your baby is even born.",
    "Your body knows exactly what to do. Breathe and trust the process.",
    "This little life inside you is lucky to have you as their mama.",
    "You're glowing with the beautiful energy of creating life.",
    "Every flutter and kick is your baby saying 'I love you too, mama.'",
    "You are brave, you are strong, and you are perfectly prepared for this journey."
  ];

  const [todaysAffirmation] = useState(() => {
    const today = new Date().getDate();
    return affirmations[today % affirmations.length];
  });

  return (
    <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-amber-700">
          <Heart className="w-5 h-5 animate-pulse" />
          Today's Affirmation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-amber-800 text-center italic font-medium leading-relaxed">
          "{todaysAffirmation}"
        </p>
      </CardContent>
    </Card>
  );
};

export default DailyAffirmation;
