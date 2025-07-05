import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HelloWorld: React.FC = () => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-12">
        <h1 className="text-4xl font-light text-slate-800 tracking-wide">
          Hello World
        </h1>
      </CardContent>
    </Card>
  );
};

export default HelloWorld;