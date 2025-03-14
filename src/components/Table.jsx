import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function StringCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    try {
      const numbers = input.split(',').map(Number);
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      setResult(sum);
    } catch (error) {
      setResult('Invalid input');
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Card className="w-full max-w-md p-4">
        <CardContent className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter numbers separated by commas"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
          <Button onClick={calculate} className="w-full">
            Calculate
          </Button>
          {result !== null && (
            <div className="p-2 mt-2 bg-gray-100 rounded-md">
              Result: {result}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
