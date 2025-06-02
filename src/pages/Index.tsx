
import { Link } from "react-router-dom";
import { Calendar, Camera, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <span className="text-6xl text-orange-600 font-bold">ॐ</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-4">
            Sacred Thread Ceremony
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-700 mb-6">
            Upanayanam
          </h2>
          
          {/* Photo Section for Your Sons */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              <div className="w-48 h-48 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border-4 border-orange-200 flex items-center justify-center">
                <div className="text-center text-orange-600">
                  <Camera className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm font-medium">Your Son's Photo</p>
                </div>
              </div>
              <div className="w-48 h-48 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border-4 border-red-200 flex items-center justify-center">
                <div className="text-center text-red-600">
                  <Camera className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm font-medium">Your Son's Photo</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in celebrating this sacred milestone as our sons embark on their spiritual journey 
            through the ancient tradition of Upanayanam - the ceremony of the sacred thread.
          </p>
          
          {/* Date Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader className="text-center">
                <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-orange-900">Day 1 - Udakashanti</CardTitle>
                <CardDescription className="text-lg font-semibold">June 7th, 2025</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">
                  Purification and preparation rituals including Sankalpam, Vishvasena, and sacred water ceremonies.
                </p>
                <Link to="/udakashanti">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader className="text-center">
                <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-red-900">Day 2 - Upanayanam</CardTitle>
                <CardDescription className="text-lg font-semibold">June 8th, 2025</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4">
                  The sacred thread ceremony with Yagnopavita, Agniparathadhati, and spiritual initiation.
                </p>
                <Link to="/upanayanam">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About the Ceremony */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-yellow-200 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <Heart className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle className="text-3xl text-yellow-900 mb-2">The Significance of Upanayanam</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-800">
                <strong>Upanayanam</strong> (Sanskrit: उपनयनम्) is one of the most important samskaras (sacraments) in Hindu tradition. 
                It marks the beginning of a young person's formal education and spiritual journey, traditionally performed for boys 
                between the ages of 8-16.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">Sacred Thread (Yagnopavita)</h3>
                  <p className="text-gray-700">
                    The sacred thread consists of three strands representing the three debts: to God, to sages, and to ancestors. 
                    It symbolizes purity, wisdom, and the commitment to dharmic living.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Spiritual Rebirth</h3>
                  <p className="text-gray-700">
                    This ceremony is considered a spiritual rebirth, marking the transition from childhood to studenthood (Brahmacharya). 
                    The initiate becomes "twice-born" - once physically and once spiritually.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-800 border-l-4 border-yellow-500 pl-6 italic">
                "यज्ञोपवीतं परमं पवित्रं प्रजापतेर्यत्सहजं पुरस्तात्।" <br/>
                <span className="text-sm text-gray-600">
                  "The sacred thread is supremely pure, born with Prajapati from the beginning."
                </span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Photo Sharing Section */}
        <div className="text-center">
          <Card className="border-green-200 bg-white/90 backdrop-blur-sm shadow-xl max-w-2xl mx-auto">
            <CardHeader>
              <Camera className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-green-900">Share Your Memories</CardTitle>
              <CardDescription className="text-lg">
                Help us capture this special occasion by sharing your photos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                We would love to see the ceremony through your eyes. Please share your photos 
                and help us create a beautiful collection of memories from this sacred day.
              </p>
              <Link to="/photos">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Camera className="w-5 h-5 mr-2" />
                  Submit Photos
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
