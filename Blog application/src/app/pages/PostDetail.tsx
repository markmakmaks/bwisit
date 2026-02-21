import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, Calendar, Clock, Heart, MessageCircle, Share2 } from 'lucide-react';
import { mockPosts } from '../data/mockPosts';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

export function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = mockPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl mb-4">Post Not Found</h2>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <article>
          <Card className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl mb-4">{post.title}</h1>
              
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-[#9ca87c]/10 text-[#9ca87c] hover:bg-[#9ca87c]/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap leading-relaxed">
                {post.content}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comment
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </Card>

          {/* Related Posts */}
          <div className="mt-8">
            <h2 className="text-2xl mb-4">More from {post.author.name}</h2>
            <div className="grid gap-4">
              {mockPosts
                .filter(p => p.id !== post.id && p.author.name === post.author.name)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link key={relatedPost.id} to={`/post/${relatedPost.id}`}>
                    <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                      <h3 className="text-lg mb-1 hover:text-[#9ca87c]">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {relatedPost.excerpt}
                      </p>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
