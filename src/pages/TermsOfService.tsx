import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
          Terms of Service
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Psycotik Crew's services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Services</h2>
            <p className="mb-4">
              Psycotik Crew provides professional sound and light rental services for events, 
              concerts, and parties. We reserve the right to modify or discontinue services 
              at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Booking and Payment</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All bookings must be confirmed with a deposit</li>
              <li>Full payment is required before or on the day of the event</li>
              <li>Cancellations must be made at least 48 hours in advance for a full refund</li>
              <li>Late cancellations may incur charges</li>
              <li>We accept various payment methods as displayed on our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Equipment and Liability</h2>
            <p className="mb-4">
              Our equipment is provided in good working condition. The client is responsible for 
              any damage to equipment during the rental period. We are not liable for any 
              consequential damages arising from equipment failure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">User Conduct</h2>
            <p className="mb-4">
              You agree not to use our services for any unlawful purpose or in any way that 
              could damage, disable, or impair our services or interfere with other users' 
              access to our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, and images, 
              is the property of Psycotik Crew and is protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              Psycotik Crew shall not be liable for any indirect, incidental, special, 
              or consequential damages arising out of or in connection with the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Your continued use of 
              our services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us at 
              legal@psycotikcrew.com or +44 123 456 7890.
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-400">
              These Terms of Service were last updated on {new Date().toLocaleDateString()}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
