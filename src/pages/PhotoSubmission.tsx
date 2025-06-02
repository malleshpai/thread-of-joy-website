
import { useState } from "react";
import { Camera, Upload, Heart, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

const PhotoSubmission = () => {
  const [submitterName, setSubmitterName] = useState("");
  const [submitterEmail, setSubmitterEmail] = useState("");
  const [photoDescription, setPhotoDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!submitterName || !submitterEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank You!",
        description: "Your photo submission details have been received. Please follow the Google Photos link to upload your photos.",
      });
      
      // Reset form
      setSubmitterName("");
      setSubmitterEmail("");
      setPhotoDescription("");
      setIsSubmitting(false);
    }, 2000);
  };

  const googlePhotosLink = "https://photos.app.goo.gl/your-shared-album-link"; // Replace with actual link

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Camera className="w-16 h-16 text-green-600 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Share Your Photos
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Help us capture the beautiful memories of this sacred ceremony. Your photos will become 
            part of our family's treasured collection of this special milestone.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Instructions */}
          <Card className="border-blue-200 bg-white/90 backdrop-blur-sm shadow-xl mb-8">
            <CardHeader className="text-center">
              <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-blue-900 mb-2">How to Share Your Photos</CardTitle>
              <CardDescription className="text-lg">
                Simple steps to contribute to our photo collection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-green-900 mb-2">Fill the Form</h3>
                  <p className="text-gray-700 text-sm">Provide your contact information below</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-blue-900 mb-2">Visit Google Photos</h3>
                  <p className="text-gray-700 text-sm">Click the link to access our shared album</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-purple-900 mb-2">Upload Photos</h3>
                  <p className="text-gray-700 text-sm">Add your beautiful photos to the shared collection</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submission Form */}
          <Card className="border-green-200 bg-white/90 backdrop-blur-sm shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-900 flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                Photo Submission Form
              </CardTitle>
              <CardDescription className="text-lg">
                Let us know who's sharing these precious memories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg font-medium">Your Name *</Label>
                    <Input
                      id="name"
                      value={submitterName}
                      onChange={(e) => setSubmitterName(e.target.value)}
                      placeholder="Enter your full name"
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={submitterEmail}
                      onChange={(e) => setSubmitterEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="h-12"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-lg font-medium">Photo Description (Optional)</Label>
                  <Textarea
                    id="description"
                    value={photoDescription}
                    onChange={(e) => setPhotoDescription(e.target.value)}
                    placeholder="Tell us about the photos you're sharing (e.g., 'Photos from the morning rituals', 'Family group photos', etc.)"
                    className="min-h-24"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Submit & Get Upload Link
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Google Photos Link */}
          <Card className="border-purple-200 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <Camera className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-purple-900 mb-2">Upload Your Photos</CardTitle>
              <CardDescription className="text-lg">
                Access our shared Google Photos album
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-gray-700 leading-relaxed">
                After submitting the form above, click the link below to access our Google Photos shared album. 
                You'll be able to upload your photos directly to our family collection.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mt-0.5" />
                  <div className="text-left">
                    <p className="text-yellow-800 font-medium">Note:</p>
                    <p className="text-yellow-700 text-sm">
                      Please submit the form above first so we can track who is contributing photos. 
                      This helps us properly credit and thank everyone for their contributions.
                    </p>
                  </div>
                </div>
              </div>
              
              <a 
                href={googlePhotosLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Camera className="w-5 h-5 mr-2" />
                  Open Google Photos Album
                </Button>
              </a>
              
              <p className="text-gray-600 text-sm">
                The link will open in a new tab. You may need to sign in to your Google account 
                if you haven't already.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PhotoSubmission;
