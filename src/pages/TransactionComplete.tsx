import React, { useEffect } from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import QRCode from "@/components/QRCode";

const TransactionComplete = () => {
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Transaction Complete
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Your payment has been processed successfully
            </p>
            <Button
              onClick={handleGoBack}
              variant="outline"
              className="flex items-center gap-2 animate-fade-in animation-delay-200"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      {/* Transaction Complete Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-psyco-green-muted/30 glassmorphism">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-psyco-green-DEFAULT/20 flex items-center justify-center rounded-full mb-6">
                  <CheckCircle className="text-psyco-green-DEFAULT w-8 h-8" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">Payment Successful</h2>
                <p className="text-gray-300 mb-6">
                  Thank you for your payment. Your transaction has been completed successfully.
                </p>
                
                <div className="flex flex-col gap-2 w-full max-w-md border border-gray-700/50 rounded-lg p-4 bg-gray-900/50 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transaction ID:</span>
                    <span className="text-white font-mono">#TXN{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date:</span>
                    <span className="text-white">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-psyco-green-DEFAULT">Completed</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  A confirmation email has been sent to your email address.
                </p>

                <QRCode />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TransactionComplete;