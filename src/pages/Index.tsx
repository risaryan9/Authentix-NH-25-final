import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";

import { Link } from "react-router-dom";
import { Volume2, Music2, Lightbulb, PartyPopper, MoveRight, CalendarDays } from "lucide-react";
import { Icon } from 'lucide-react';
import { football } from '@lucide/lab';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = [
    {
      title: "Sound System",
      description: "Professional sound systems for any size venue, from small gatherings to large festivals.",
      icon: <Volume2 size={24} />,
      imageSrc: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png",
      link: "/services#sound"
    },
    {
      title: "Lighting Equipment",
      description: "Create the perfect atmosphere with our state-of-the-art lighting equipment and expert setup.",
      icon: <Lightbulb size={24} />,
      imageSrc: "/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png",
      link: "/services#lighting"
    },
    {
      title: "DJ Services",
      description: "Experienced DJs to keep your event energized with the perfect music selection.",
      icon: <Music2 size={24} />,
      imageSrc: "/lovable-uploads/03e83f18-76a1-4349-a197-dbde03a93343.png",
      link: "/services#dj"
    }
  ];

  return (
    <div>
      <HeroSection />
      {/* Event Types Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Perfect for Any Event</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Empowering events with secure digital tickets, fraud-proof verification, and zero-resale assurance for ultimate trust and transparency.


            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Concerts", icon: <Volume2 size={32} /> },
              { name: "Sports", icon: <Icon iconNode={football} size={32} /> },
              { name: "Corporate", icon: <CalendarDays size={32} /> },
              { name: "Festivals", icon: <Music2 size={32} /> }
            ].map((event, index) => (
              <div 
                key={index}
                className="glassmorphism flex flex-col items-center justify-center py-8 px-4 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4">
                  {event.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{event.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Book Your Event
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Elevate Your Event?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's work together to create an unforgettable experience for your guests. Book our services today and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                List Your Event
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/explore"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Book tickets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
