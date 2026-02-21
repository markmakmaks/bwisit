import { Link } from 'react-router';
import { Calendar, Clock } from 'lucide-react';
import { mockPosts } from '../data/mockPosts';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl mb-2">Welcome to Beanlog</h1>
        <p className="text-gray-600 mb-8">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        
        <div className="space-y-6">
          {mockPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{post.author.name}</span>
                      <span className="text-gray-400">·</span>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl mb-2 text-gray-900 hover:text-[#9ca87c]">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
