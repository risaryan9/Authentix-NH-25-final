import React, { useState } from "react";
import { Check, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QRCode = () => {
  const [qrVisible, setQrVisible] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [qrSrc, setQrSrc] = useState("");

const generateQR = async () => {
  setIsGenerating(true);

  try {
    const res = await fetch("http://localhost:3000/api/book", {
      method: "POST",
      credentials: "include", // 🔥 include session cookie
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}) // 🔥 no need to send UUIDs
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(result));
    }

    if (result.qrDataUrl) {
      setQrSrc(result.qrDataUrl);
      setQrVisible(true);
    } else {
      throw new Error("No QR code returned.");
    }
  } catch (err) {
    console.error("QR generation error:", err);
  } finally {
    setIsGenerating(false);
  }
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
                  {qrVisible && qrSrc && (
                    <img src={qrSrc} alt="Transaction QR Code" className="w-48 h-48" />
                  )}
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