import { Link, useLocation, useNavigate } from 'react-router';
import { PenSquare, Bell, User } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useAuth } from '../context/AuthContext';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <header className="sticky top-0 z-50 bg-[#9ca87c] border-b border-[#8a9666]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-white">
          Beanlog
        </Link>
        
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link to="/write">
                <Button
                  variant={location.pathname === '/write' ? 'secondary' : 'ghost'}
                  size="sm"
                  className="text-white hover:text-white hover:bg-[#8a9666]"
                >
                  <PenSquare className="w-4 h-4 mr-2" />
                  Write
                </Button>
              </Link>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white hover:bg-[#8a9666] relative"
              >
                <Bell className="w-5 h-5" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white hover:bg-gray-100"
                  >
                    <User className="w-5 h-5 text-[#9ca87c]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5 text-sm">
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-white hover:bg-[#8a9666]"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  size="sm"
                  className="bg-white text-[#9ca87c] hover:bg-gray-100"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}