// Alias for Post
type Post = {
    title: string,
    content: string,
    author: string
};

// Usage
const newPost: Post = {
    title: "Introduction to TypeScript Type Aliases",
    content: "In this article, we explore TypeScript type aliases...",
    author: "dev_guru_123",
};

// Test
console.log("New post:", newPost);