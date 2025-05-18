import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from "lucide-react";
import QRCode from "@/components/QRCode";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const { toast } = useToast();
  // Mock user data - in a real app, this would come from authentication or API
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, San Francisco, CA 94105",
    avatar: "/lovable-uploads/8dced82a-6a2c-48ee-a060-463c28764183.png",
    userId: "user_12345" // Unique identifier for QR code
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({...userData});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserData({...formData});
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  return (
    <div className="container max-w-4xl mx-auto pt-32 pb-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">User Profile</h1>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="profile">Profile Information</TabsTrigger>
          <TabsTrigger value="qr">My QR Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card className="bg-gray-800/70 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Personal Information</CardTitle>
                <CardDescription className="text-gray-400">Manage your personal details</CardDescription>
              </div>
              <Avatar className="h-16 w-16">
                {userData.avatar ? (
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                ) : null}
                <AvatarFallback className="bg-green-500 text-white">
                  <User size={24} />
                </AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleInputChange} 
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4 mt-6">
                    <Button 
                      variant="outline" 
                      type="button" 
                      onClick={() => {
                        setFormData({...userData});
                        setIsEditing(false);
                      }}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark">
                      Save Changes
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    <div>
                      <h3 className="font-semibold text-gray-400 mb-1">Full Name</h3>
                      <p>{userData.name}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-400 mb-1">Email Address</h3>
                      <p>{userData.email}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-400 mb-1">Phone Number</h3>
                      <p>{userData.phone}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-400 mb-1">Home Address</h3>
                      <p>{userData.address}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      onClick={() => setIsEditing(true)}
                      className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark"
                    >
                      Edit Profile
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="qr">
          <Card className="bg-gray-800/70 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">My Personal QR Code</CardTitle>
              <CardDescription className="text-gray-400">
                Your unique QR code can be used for quick identification at our services
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="text-center mb-6">
                This QR code contains your unique user ID and can be scanned at our facilities.
              </p>
              <img src="backend\user_qr.png" alt="Transaction QR Code" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// User-specific QR Code component
const UserQRCode = ({ userId, userName }: { userId: string; userName: string }) => {
  // Using our existing QRCode component but with user-specific data
  return (
    <div className="user-qr-wrapper">
      <QRCode />
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-300">QR Code for: {userName}</p>
        <p className="text-xs text-gray-400">ID: {userId}</p>
      </div>
    </div>
  );
};

export default Profile;
