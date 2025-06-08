import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import PaymentOptions from "./PaymentOptions";
import CreditCardForm from "./CreditCardForm";
import RazorpayOption from "./RazorpayOption";
import CryptoOption from "./CryptoOption";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = React.useState<string>("credit");
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      saveCard: false,
      paymentType: "credit",
    },
  });

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const onSubmit = async (data: any) => {
    if (data.paymentType === "razorpay") {
      const res = await loadRazorpayScript();

      if (!res) {
        alert("Failed to load Razorpay SDK. Check your internet.");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 500 }), // ₹500
        });

        const order = await response.json();

        const options = {
          key: "rzp_test_3tpQ9zF45v8yE9", // Replace with your test key
          amount: order.amount,
          currency: order.currency,
          name: "AuthenTIX LLC",
          description: "Demo Payment",
          order_id: order.id,
          handler: function (response: any) {
            console.log("Payment successful:", response);
            navigate("/TransactionComplete");
          },
          prefill: {
            name: "AuthenTIX",
            email: "authentixAdmin@gmail.com",
            contact: "9353339152",
          },
          theme: { color: "#528FF0" },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } catch (err) {
        console.error("Error creating Razorpay order:", err);
      }
    } else {
      navigate("/TransactionComplete");
    }
  };

  // Handle payment method change and update the form value
  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
    form.setValue("paymentType", value);
  };

  return (
    <div className="glassmorphism p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <CheckCircle className="text-psyco-green-DEFAULT" />
        Payment Methods
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <PaymentOptions
            paymentMethod={paymentMethod}
            onPaymentMethodChange={handlePaymentMethodChange}
            form={form}
          />

          {paymentMethod === "credit" && <CreditCardForm form={form} />}
          {paymentMethod === "razorpay" && <RazorpayOption />}
          {paymentMethod === "crypto" && <CryptoOption />}
          <Button
            type="submit"
            className="w-full bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white py-3 flex justify-center items-center gap-2 btn-glow"
          >
            {paymentMethod === "razorpay" ? "Proceed to Razorpay" : "Pay Now"}
            <CheckCircle size={18} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentForm;
