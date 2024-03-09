// controllers/postController.js
import Post from '../models/post.js';

// Create a new post
export async function createPost(req, res) {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    const post = await Post.newPost.save();
    res.status(201).json(post);
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ error: 'Server error' });
  }
}

// Get all posts
export async function getAllPosts(req, res) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error('Error getting posts:', err);
    res.status(500).json({ error: 'Server error' });
  }
}

// Get a single post by ID
export async function getPostById(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error('Error getting post by ID:', err);
    res.status(500).json({ error: 'Server error' });
  }
}

// Update a post by ID
export async function updatePost(req, res) {
  try {
    const { title, content } = req.body;
    const post = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error('Error updating post:', err);
    res.status(500).json({ error: 'Server error' });
  }
}

// Delete a post by ID
export async function deletePost(req, res) {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error('Error deleting post:', err);
    res.status(500).json({ error: 'Server error' });
  }
}
