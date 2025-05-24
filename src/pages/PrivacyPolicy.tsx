import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support. This may include your name, email address, 
              phone number, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process transactions and send related information</li>
              <li>To communicate with you about our services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
            <p className="mb-4">
              Our website may use cookies to enhance your experience. You can choose to disable 
              cookies through your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the right to access, update, or delete your personal information. 
              You may also opt out of certain communications from us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@psycotikcrew.com or +44 123 456 7890.
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-400">
              This Privacy Policy was last updated on {new Date().toLocaleDateString()}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
