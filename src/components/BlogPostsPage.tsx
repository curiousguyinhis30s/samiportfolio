import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Laptop, Plane, Target, ChevronDown, ChevronUp, Search, Star, ExternalLink } from 'lucide-react';

interface BlogPost {
  date: string;
  title: string;
  description: string;
  icon: React.ElementType;
  link?: string;
}

const blogPosts: Record<string, BlogPost[]> = {
  '2024': [
    {
      date: "October 2024",
      title: "Reflecting on FuseCon 2024",
      description: "An inspiring experience at FuseCon 2024, exploring the future of product management in Southeast Asia.",
      icon: Star,
      link: "/blog/fusecon-2024"
    },
    {
      date: "August 2024",
      title: "Participated in GrabChain event",
      description: "Attended the inaugural GrabChain edition at Product Community in Kuala Lumpur and listened to Varun Atul Vashishtha's fascinating keynote story!",
      icon: Users,
    },
    {
      date: "July 2024",
      title: "Exploring AI in Product Management",
      description: "Delved into the world of AI and its applications in product management, uncovering new ways to enhance user experiences and streamline processes.",
      icon: Laptop,
    },
    {
      date: "June 2024",
      title: "Product Management Conference in Singapore",
      description: "Attended a major product management conference in Singapore, networking with industry leaders and gaining insights into emerging trends.",
      icon: Plane,
    },
    {
      date: "April 2024",
      title: "Career Break and Kizomba Dancing",
      description: "Embarked on a 5-week career break to explore Kizomba dancing across Europe, visiting Spain, France, Luxembourg, and Albania.",
      icon: Target,
    },
  ],
  '2023': [
    {
      date: "November 2023",
      title: "Emotional Intelligence Course",
      description: "Completed the Emotional Intelligence course from the University of Michigan, enhancing my skills in cultivating human interactions.",
      icon: Users,
    },
    {
      date: "October 2023",
      title: "YTL Leadership Conference",
      description: "Participated in the YTL Leadership Conference 2023, gaining insights from industry leaders.",
      icon: Users,
    },
    {
      date: "September 2023",
      title: "Launching eCommerce System",
      description: "Successfully launched a new eCommerce system for Yes.my as part of the Apple launch initiative.",
      icon: Laptop,
    },
    {
      date: "February 2023",
      title: "Product-led Certification",
      description: "Completed my Product-led Certification from Pendo.io, equipping myself with essential skills for product management.",
      icon: Target,
    },
  ],
};

const BlogPostsPage: React.FC = () => {
  const [expandedYears, setExpandedYears] = useState<Record<string, boolean>>({
    '2024': true,
    '2023': true,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const toggleYear = (year: string) => {
    setExpandedYears(prev => ({ ...prev, [year]: !prev[year] }));
  };

  const filteredBlogPosts = Object.entries(blogPosts).reduce((acc, [year, posts]) => {
    const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredPosts.length > 0) {
      acc[year] = filteredPosts;
    }
    return acc;
  }, {} as Record<string, BlogPost[]>);

  return (
    <div className="space-y-8 subtle-background">
      <h1 className="section-header mb-8">Recent Activities</h1>
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search blog posts..."
          className="w-full p-3 pl-10 rounded-lg bg-black/30 backdrop-blur-md text-text-primary border border-accent focus:outline-none focus:ring-2 focus:ring-accent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
      </div>
      <div className="space-y-8">
        {Object.entries(filteredBlogPosts).reverse().map(([year, posts]) => (
          <div key={year} className="mb-8">
            <button
              onClick={() => toggleYear(year)}
              className="flex items-center justify-between w-full text-2xl font-bold mb-4 text-accent"
            >
              <span>{year} Highlights</span>
              {expandedYears[year] ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedYears[year] && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <div key={index} className="card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105 card-hover-effect bg-black/30 backdrop-blur-md p-6 relative">
                    <div className="flex items-start mb-4">
                      <post.icon className="w-8 h-8 text-accent mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary">{post.title}</h3>
                        <div className="flex items-center text-accent text-sm mt-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm">{post.description}</p>
                    {post.link && (
                      <Link to={post.link} className="absolute bottom-4 right-4">
                        <ExternalLink className="w-5 h-5 text-accent" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostsPage;