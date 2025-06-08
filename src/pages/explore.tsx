
import React, { useEffect, useState } from "react";
import BlogPost from "@/components/BlogPost";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: "tentacular-urutz",
      title: "Coldplay Mumbai Concert",
      excerpt: "Our team provided a custom sound system and technical support for the Coldplay concert in Mumbai, featuring our signature horn-loaded setup.",
      date: "March 15, 2026",
      readTime: "6 min read",
      author: "Coldplay Band LLC",
      category: "Concerts",
      imageSrc: "https://i.ytimg.com/vi/Fpn1imb9qZg/maxresdefault.jpg",
      featured: false,
      price: "4000 INR (exclusive of taxes)",
    },
    {
      id: "iplt20",
      title: "Indian Premeir League Finals RCB VS PBKS",
      excerpt: "We powered the ticketing experience for the IPL match in Bengaluru.",
      date: "June 3rd, 2025",
      readTime: "6 min read",
      author: "BCCI",
      category: "Sports",
      imageSrc: "https://www.cricketwinner.com/_next/image/?url=https%3A%2F%2Fmedia.cricketwinner.com%2Fmedia%2F2025%2F04%2FWhatsApp-Image%202025-04-18%20at%2014.59.03_e25b20ec.webp&w=3840&q=81",
      featured: false,
      price: "4000 INR (exclusive of taxes)",
    },
    {
  id: "mission-impossible-final-reckoning",
  title: "Mission: Impossible - The Final Reckoning",
  excerpt: "The eighth installment in the Mission: Impossible franchise, starring Tom Cruise as Ethan Hunt, delivering globe-trotting action and jaw-dropping stunts.",
  date: "May 23, 2025",
  author: "Paramount Pictures",
  category: "Movies",
  imageSrc: "https://static.toiimg.com/thumb/msid-121132355,width-1280,height-720,resizemode-4/121132355.jpg",
  featured: false,
  price: "₹200-₹400",
},
{
  id: "elio",
  title: "Elio",
  excerpt: "Pixar's cosmic adventure about a boy who becomes Earth's intergalactic ambassador after an alien encounter.",
  date: "June 20, 2025",
  author: "Walt Disney Pictures / Pixar",
  category: "Movies",
  imageSrc: "https://lumiere-a.akamaihd.net/v1/images/g_movies_elio_still_2_e513b3e0.jpeg?region=1,0,1298,730",
  featured: false,
  price: "₹200-₹350",
},
{
  id: "how-to-train-your-dragon-live-action",
  title: "How to Train Your Dragon",
  excerpt: "Live-action remake of the beloved animated saga, following a young Vikin's adventure as he befriends the legendary Toothless.",
  date: "June 13, 2025",
  author: "Universal Pictures",
  category: "Movies",
  imageSrc: "https://i.ytimg.com/vi/auJcP4Efj38/maxresdefault.jpg",
  featured: false,
  price: "₹200-₹300",
},
{
  id: "from-the-world-of-john-wick-ballerina",
  title: "From the World of John Wick: Ballerina",
  excerpt: "Spin-off of the John Wick franchise starring Ana de Armas as a deadly ballet assassin caught in the Continental underworld.",
  date: "June 13, 2025",
  author: "Lionsgate",
  category: "Movies",
  imageSrc: "https://m.media-amazon.com/images/M/MV5BODM1OGEyNTItNWVlMi00NjAzLWFhMTEtODQ5MzU1NDdjMDY2XkEyXkFqcGdeQWFybm8@._V1_.jpg",
  featured: false,
  price: "₹200-₹350",
},
{
  id: "m3gan-2-0",
  title: "M3GAN 2.0",
  excerpt: "Horror-sci-fi sequel featuring the killer AI doll reawakened—with greater intelligence and more chilling consequences.",
  date: "June 27, 2025",
  author: "Universal Pictures / Blumhouse",
  category: "Movies",
  imageSrc: "https://m.media-amazon.com/images/M/MV5BODM1OGEyNTItNWVlMi00NjAzLWFhMTEtODQ5MzU1NDdjMDY2XkEyXkFqcGdeQWFybm8@._V1_.jpg",
  featured: false,
  price: "₹200-₹300",
},

    
  ];
  
  const categories = [
    "All",
    "Sports",
    "Concerts",
    "Movies",
    "Technical"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Events That Matter</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Discover exclusive, verified experiences — from stand-up shows to stadium thrillers — all with zero reselling and 100% authenticity.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center animate-fade-in animation-delay-200">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-psyco-black-DEFAULT border-psyco-green-muted/50 w-full text-black"
              />
            </div>
            
            <div className="w-full md:w-1/2 overflow-x-auto scrollbar-thin scrollbar-thumb-psyco-green-muted/50">
             <div className="flex gap-2 min-w-max w-fit">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-psyco-green-DEFAULT text-white"
                      : "bg-psyco-black-DEFAULT text-gray-300 hover:bg-psyco-black-card"
                  }`}
                >
                  {category}
                </button>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPost
                  key={post.id}
                  {...post}
                  className={`animate-fade-in ${post.featured ? "md:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-2">No posts found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Industry Insights</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest articles, tips, and industry news directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-psyco-black-DEFAULT border-psyco-green-muted/50 flex-grow"
              />
              <button className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;