
import React, { useState, useCallback, useEffect } from 'react';
import { BlogPost, AppView, GeneratedBlogContent } from './types';
import { INITIAL_BLOG_POSTS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPostCard from './components/BlogPostCard';
import BlogPostDetail from './components/BlogPostDetail';
import CreatePostForm from './components/CreatePostForm';
import ErrorMessage from './components/ErrorMessage';
import { generateBlogPostContent, generateBlogImageBase64 } from './services/geminiService';

const App: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [currentView, setCurrentView] = useState<AppView>(AppView.LIST_POSTS);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSetCurrentView = useCallback((view: AppView) => {
    setCurrentView(view);
    setError(null); // Clear errors on view change
    if (view === AppView.LIST_POSTS) {
        setSelectedPostId(null);
    }
  }, []);

  const handleReadMore = useCallback((postId: string) => {
    setSelectedPostId(postId);
    setCurrentView(AppView.VIEW_POST);
  }, []);

  const handleGeneratePost = useCallback(async (topic: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const generatedContent: GeneratedBlogContent = await generateBlogPostContent(topic);
      const imageUrl: string = await generateBlogImageBase64(generatedContent.title, topic);
      
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: generatedContent.title,
        content: generatedContent.content,
        imageUrl: imageUrl,
        date: new Date().toLocaleDateString('en-CA'), // YYYY-MM-DD format
        topic: topic,
        excerpt: generatedContent.content.substring(0, 150) + '...'
      };

      setBlogPosts(prevPosts => [newPost, ...prevPosts]);
      setSelectedPostId(newPost.id);
      setCurrentView(AppView.VIEW_POST); // Navigate to the new post
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred during post generation.');
      // Stay on create page if error
    } finally {
      setIsLoading(false);
    }
  }, []);

  const selectedPost = blogPosts.find(post => post.id === selectedPostId);

  const renderView = () => {
    switch (currentView) {
      case AppView.CREATE_POST:
        return <CreatePostForm onGeneratePost={handleGeneratePost} isLoading={isLoading} error={error} />;
      case AppView.VIEW_POST:
        return <BlogPostDetail post={selectedPost || null} onBack={() => handleSetCurrentView(AppView.LIST_POSTS)} />;
      case AppView.LIST_POSTS:
      default:
        return (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {error && <ErrorMessage message={error} />}
            {blogPosts.length === 0 && !isLoading && (
              <div className="text-center py-10">
                <h2 className="text-2xl font-semibold text-slate-700 mb-4">No Blog Posts Yet!</h2>
                <p className="text-slate-500 mb-6">Ready to explore the world? Create your first AI-generated travel post.</p>
                <button
                  onClick={() => handleSetCurrentView(AppView.CREATE_POST)}
                  className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-semibold"
                >
                  Create New Post
                </button>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <BlogPostCard key={post.id} post={post} onReadMore={handleReadMore} />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header setCurrentView={handleSetCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
