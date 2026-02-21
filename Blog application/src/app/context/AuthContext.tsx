import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Check localStorage for existing user
    const storedUser = localStorage.getItem('beanlog_user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const signup = async (name: string, email: string, password: string) => {
    // Mock signup - in production, this would make an API call
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('beanlog_users') || '[]');
    const existingUser = users.find((u: any) => u.email === email);
    
    if (existingUser) {
      return { success: false, error: 'User with this email already exists' };
    }

    // Basic validation
    if (!name || !email || !password) {
      return { success: false, error: 'All fields are required' };
    }

    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }

    // Create new user
    const newUser = {
      id: Math.random().toString(36).substring(7),
      email,
      name,
      password, // In production, never store plain text passwords!
    };

    users.push(newUser);
    localStorage.setItem('beanlog_users', JSON.stringify(users));

    // Set current user (without password)
    const userWithoutPassword = { id: newUser.id, email: newUser.email, name: newUser.name };
    setUser(userWithoutPassword);
    localStorage.setItem('beanlog_user', JSON.stringify(userWithoutPassword));

    return { success: true };
  };

  const login = async (email: string, password: string) => {
    // Mock login - in production, this would make an API call
    const users = JSON.parse(localStorage.getItem('beanlog_users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (!foundUser) {
      return { success: false, error: 'Invalid email or password' };
    }

    const userWithoutPassword = { id: foundUser.id, email: foundUser.email, name: foundUser.name };
    setUser(userWithoutPassword);
    localStorage.setItem('beanlog_user', JSON.stringify(userWithoutPassword));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('beanlog_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
