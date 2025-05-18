import React, { useState } from "react";
import { Check, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QRCode = () => {
  const [qrVisible, setQrVisible] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQR = () => {
    setIsGenerating(true);
    // Simulate API call delay
    setTimeout(() => {
      setQrVisible(true);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="mt-8">
      <Button
        onClick={generateQR}
        disabled={isGenerating}
        className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium flex items-center gap-2 btn-glow"
      >
        {isGenerating ? "Generating..." : "Generate QR Code"}
        <QrCode size={18} />
      </Button>

      {qrVisible && (
        <div className="mt-6 animate-fade-in">
          <Card className="border-psyco-green-muted/30 max-w-xs mx-auto">
            <CardContent className="pt-6">
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-xl">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PSK_Services_Transaction_${Date.now()}`} 
                    alt="Transaction QR Code"
                    className="w-48 h-48" 
                  />
                </div>
              </div>
              <p className="text-center mt-4 text-sm text-gray-300">
                Scan this QR code to verify your transaction
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default QRCode;