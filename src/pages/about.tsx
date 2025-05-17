
import React, { useEffect } from "react";

import { Star, Award, Building, Users, CheckCircle, MoveRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const References = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  
  const clientLogos = [
    {
      name: "TechCorp Solutions",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=TechCorp"
    },
    {
      name: "Urban Music Festival",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=UMF"
    },
    {
      name: "Perfect Day Weddings",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=PDW"
    },
    {
      name: "Pulse Nightclub",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=Pulse"
    },
    {
      name: "Eventify",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=Eventify"
    },
    {
      name: "City Concert Hall",
      logo: "https://via.placeholder.com/150x80/1E1E1E/10B981?text=CCH"
    }
  ];
  
  const stats = [
    {
      icon: <CheckCircle size={32} />,
      value: "500+",
      label: "Events Serviced"
    },
    {
      icon: <Users size={32} />,
      value: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: <Building size={32} />,
      value: "50+",
      label: "Venue Partnerships"
    },
    {
      icon: <Award size={32} />,
      value: "12",
      label: "Industry Awards"
    }
  ];

  const caseStudies = [
    {
      title: "Monegros Festival 2024 - Industry City PA",
      description: "Delivered and operated a massive soundsystem setup for the Industry City stage at Monegros Festival, featuring custom stacks of speakers to handle the demanding desert conditions.",
      image: "/lovable-uploads/b842764a-da80-4bba-a5ef-9411f04f3de6.png",
      tags: ["Festival", "Outdoor", "High Power"],
      readMoreLink: "#"
    },
    {
      title: "Techno Revolution Club Installation",
      description: "Designed and installed a permanent club sound system focused on precise low-end reproduction and immersive spatial audio for a premier underground venue.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
      tags: ["Club", "Installation", "Custom Design"],
      readMoreLink: "#"
    },
    {
      title: "Corporate Summit 2023",
      description: "Provided complete audio-visual solutions for a 3-day corporate event with multiple rooms requiring synchronized systems and perfect speech intelligibility.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
      tags: ["Corporate", "Multi-Room", "Conference"],
      readMoreLink: "#"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our References</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              See what our clients have to say about our sound and lighting services. We're proud to have worked with a diverse range of clients across many different industries and events.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glassmorphism p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section - NEW */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore some of our most impressive sound and lighting installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div 
                key={index} 
                className="glassmorphism overflow-hidden rounded-xl border border-green-500/10 h-full flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 md:h-56 overflow-hidden relative">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {caseStudy.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-psyco-green-DEFAULT px-3 py-1 text-xs font-medium text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{caseStudy.description}</p>
                  <a 
                    href={caseStudy.readMoreLink} 
                    className="inline-flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors mt-auto"
                  >
                    Read more
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
     
      
      {/* Clients Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Trusted By</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're proud to work with these amazing clients
            </p>
          </div>

          <div className="flex justify-center"><img src="./nmitlogo.webp" alt="" width={400} height={40}/></div>
          
          </div>
          
          
      </section>
      
      {/* Featured Project */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Some of our most memorable sound and lighting installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphism p-1 h-full animate-fade-in">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
                  alt="Summer Music Festival"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Festival
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Summer Music Festival 2023</h3>
                  <p className="text-gray-300 mb-4">Complete sound system and dynamic lighting setup for the main stage, serving an audience of 15,000 people.</p>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-100">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80"
                  alt="Corporate Gala"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Corporate
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">TechCorp Annual Gala</h3>
                  <p className="text-gray-300 mb-4">Custom lighting design incorporating brand colors and theme elements, with pristine audio for presentations and live music.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default References;
