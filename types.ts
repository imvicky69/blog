
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
  slug: string; // for "Read More" link (can be kept for other uses or future routing)
  fullContent?: string; // Optional detailed content for modal
}

export interface NavLink {
  href: string;
  label: string;
}
