export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image?: string;
  tags: string[];
}

export const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Modern Web Development',
    excerpt: 'A comprehensive guide to building modern web applications with React and TypeScript.',
    content: `
# Getting Started with Modern Web Development

Modern web development has evolved significantly over the past few years. In this post, we'll explore the essential tools and techniques you need to build amazing web applications.

## The React Ecosystem

React has become the go-to library for building user interfaces. With hooks, context, and a vibrant ecosystem, it's never been easier to create interactive applications.

## TypeScript Benefits

TypeScript adds type safety to JavaScript, helping catch errors early and improving the development experience with better autocomplete and refactoring support.

## Best Practices

- Use functional components with hooks
- Implement proper error boundaries
- Optimize performance with React.memo
- Follow the DRY principle
    `,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    date: '2026-02-15',
    readTime: '5 min read',
    tags: ['React', 'TypeScript', 'Web Development']
  },
  {
    id: '2',
    title: 'The Art of Clean Code',
    excerpt: 'Discover principles and practices for writing maintainable, readable code that stands the test of time.',
    content: `
# The Art of Clean Code

Writing clean code is an art that every developer should master. Clean code is not just about making things work—it's about making things work well and making them easy to understand and maintain.

## Why Clean Code Matters

Clean code reduces bugs, improves collaboration, and makes your codebase more maintainable. It's an investment in the future of your project.

## Key Principles

1. **Meaningful Names**: Choose descriptive names for variables, functions, and classes
2. **Single Responsibility**: Each function should do one thing well
3. **DRY (Don't Repeat Yourself)**: Avoid code duplication
4. **Comments**: Write code that explains itself, use comments sparingly

## Conclusion

Remember, code is read far more often than it's written. Make it count!
    `,
    author: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    date: '2026-02-12',
    readTime: '7 min read',
    tags: ['Best Practices', 'Clean Code', 'Software Engineering']
  },
  {
    id: '3',
    title: 'Understanding State Management',
    excerpt: 'A deep dive into different state management solutions and when to use each one.',
    content: `
# Understanding State Management

State management is one of the most critical aspects of building modern web applications. Choosing the right solution can make or break your project.

## Local State vs Global State

Not all state needs to be global. Start with local state and only elevate to global when necessary.

## Popular Solutions

- **Context API**: Built into React, great for simple global state
- **Redux**: Battle-tested, excellent for complex applications
- **Zustand**: Lightweight and simple to use
- **Jotai**: Atomic state management

## Making the Right Choice

Consider your application's complexity, team expertise, and specific requirements when choosing a state management solution.
    `,
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    date: '2026-02-08',
    readTime: '6 min read',
    tags: ['State Management', 'React', 'Architecture']
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox: When to Use What',
    excerpt: 'Learn the differences between CSS Grid and Flexbox and master the art of modern layouts.',
    content: `
# CSS Grid vs Flexbox: When to Use What

CSS Grid and Flexbox are both powerful layout tools, but they excel in different scenarios. Let's explore when to use each.

## Flexbox for One-Dimensional Layouts

Flexbox is perfect for laying out items in a single direction—either horizontally or vertically. Use it for:
- Navigation bars
- Button groups
- Centered content

## Grid for Two-Dimensional Layouts

CSS Grid shines when you need control in both dimensions. Perfect for:
- Page layouts
- Card grids
- Complex responsive designs

## Combining Both

The real power comes from using both together. Grid for the overall page structure, Flexbox for component internals.
    `,
    author: {
      name: 'David Kim',
      avatar: 'https://i.pravatar.cc/150?img=13'
    },
    date: '2026-02-05',
    readTime: '4 min read',
    tags: ['CSS', 'Layout', 'Web Design']
  }
];
