
export const GEMINI_TEXT_MODEL = 'gemini-2.5-flash-preview-04-17';
export const GEMINI_IMAGE_MODEL = 'imagen-3.0-generate-002';

export const INITIAL_BLOG_POSTS: import('./types').BlogPost[] = [
  {
    id: '1',
    title: 'Mysteries of the Ancient Pyramids',
    topic: 'Ancient Pyramids',
    content: 'The pyramids of Giza, standing tall for millennia, are a testament to ancient ingenuity. Their construction, purpose, and the civilization that built them continue to fascinate historians and travelers alike. This journey takes us back in time to explore these monumental structures.\n\nInside the Great Pyramid, narrow passages lead to chambers that once held pharaohs. The sheer scale of the blocks and the precision of their placement defy easy explanation, sparking countless theories about their construction. Surrounding the pyramids, the Sphinx silently guards secrets yet to be fully understood, its gaze fixed upon the horizon.',
    imageUrl: 'https://picsum.photos/seed/pyramids/800/600',
    date: '2024-07-20',
    excerpt: 'Explore the timeless wonders of the Egyptian pyramids and the secrets they hold.'
  },
  {
    id: '2',
    title: 'Serene Beauty of the Japanese Gardens',
    topic: 'Japanese Gardens',
    content: 'Japanese gardens are more than just collections of plants; they are meticulously designed landscapes that evoke peace, harmony, and a deep connection with nature. Each element, from stones to water features, carries symbolic meaning, creating a tranquil retreat from the everyday hustle.\n\nWalking through a traditional Japanese garden, one might encounter a koi pond, its colorful inhabitants gliding gracefully beneath the surface. Stone lanterns illuminate winding paths, and meticulously raked gravel patterns represent water or vast landscapes. These gardens are designed for contemplation and offer a profound sense of serenity.',
    imageUrl: 'https://picsum.photos/seed/japanesegarden/800/600',
    date: '2024-07-15',
    excerpt: 'Discover the art, philosophy, and tranquility of traditional Japanese gardens.'
  }
];
