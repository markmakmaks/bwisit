import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { toast } from 'sonner';

export function WritePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in both title and content');
      return;
    }

    toast.success('Post published successfully!');
    
    // In a real app, this would save to a database
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="p-8">
          <h1 className="text-3xl mb-6">Write a New Post</h1>

          <div className="space-y-6">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Give your post an engaging title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 text-xl"
              />
            </div>

            <div>
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="Add tags (comma separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                e.g., React, TypeScript, Web Development
              </p>
            </div>

            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Tell your story... (Markdown supported)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-2 min-h-[400px] font-mono text-sm"
              />
              <p className="text-sm text-gray-500 mt-1">
                You can use Markdown formatting in your content
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
              <Button
                onClick={handlePublish}
                className="bg-[#9ca87c] hover:bg-[#8a9666]"
              >
                <Send className="w-4 h-4 mr-2" />
                Publish Post
              </Button>
            </div>
          </div>
        </Card>

        {/* Preview Section */}
        {(title || content) && (
          <Card className="p-8 mt-6">
            <h2 className="text-xl mb-4 text-gray-600">Preview</h2>
            <div className="prose max-w-none">
              {title && <h1>{title}</h1>}
              {content && (
                <div className="whitespace-pre-wrap mt-4">
                  {content}
                </div>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
