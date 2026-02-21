import { useNavigate } from 'react-router';
import { Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="p-12 text-center max-w-md">
        <h1 className="text-6xl mb-4">404</h1>
        <h2 className="text-2xl mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          onClick={() => navigate('/')}
          className="bg-[#9ca87c] hover:bg-[#8a9666]"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Card>
    </div>
  );
}
