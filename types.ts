
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  excerpt?: string; // Optional short summary
  topic: string; // The original topic used for generation
}

export enum AppView {
  LIST_POSTS = 'LIST_POSTS',
  VIEW_POST = 'VIEW_POST',
  CREATE_POST = 'CREATE_POST',
}

// For JSON response from Gemini for blog content
export interface GeneratedBlogContent {
  title: string;
  content: string; // Should be multi-paragraph
}
