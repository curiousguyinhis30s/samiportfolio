import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Laptop, Plane } from 'lucide-react';

const blogPosts = [
  {
    date: "August 2024",
    title: "Participated in GrabChain event",
    description: "Attended the inaugural GrabChain edition at Product Community in Kuala Lumpur and listened to Varun Atul Vashishtha's fascinating keynote story!",
    icon: Users,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    date: "July 2024",
    title: "Exploring AI in Product Management",
    description: "Delved into the world of AI and its applications in product management, uncovering new ways to enhance user experiences and streamline processes.",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    date: "June 2024",
    title: "Product Management Conference in Singapore",
    description: "Attended a major product management conference in Singapore, networking with industry leaders and gaining insights into emerging trends.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const BlogPostsPreview: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-3">Recent Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="card bg-card-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105">
            <div className="relative h-40">
              <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <post.icon className="w-6 h-6 text-accent" />
              </div>
            </div>
            <div className="p-3">
              <p className="text-text-secondary mb-2 text-sm">{post.description}</p>
              <div className="flex items-center text-accent text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/blog" className="btn hover-glow inline-block">View All Posts</Link>
      </div>
    </div>
  );
};

export default BlogPostsPreview;