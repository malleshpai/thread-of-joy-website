import { Clock, Droplets, Star, Flame } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const UdakashantiDay = () => {
  const rituals = [
    {
      name: "Sankalpam",
      description: "Sacred resolution and intention setting for the ceremony",
      significance: "The formal declaration of purpose and seeking divine blessings",
      icon: Star
    },
    {
      name: "Vishvasena",
      description: "Invocation of the cosmic army of deities for protection",
      significance: "Seeking protection from all negative forces during the ceremony",
      icon: Star
    },
    {
      name: "Abudya Shradam",
      description: "Ancestral worship and offerings to departed souls",
      significance: "Honoring ancestors and seeking their blessings for the occasion",
      icon: Flame
    },
    {
      name: "Udakashanti",
      description: "Sacred water purification ceremony",
      significance: "Purification of mind, body, and spirit through sacred water rituals",
      icon: Droplets
    },
    {
      name: "5 Palaka Pooja",
      description: "Worship of five sacred elements through specific rituals",
      significance: "Balancing and harmonizing the five elements within the initiate",
      icon: Star
    },
    {
      name: "Kalasha Teertha Prokshana",
      description: "Sprinkling of sacred water from consecrated vessels",
      significance: "Final purification and blessing with holy water from multiple sources",
      icon: Droplets
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Droplets className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-elegant">
            Udakashanti Day
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-6 h-6 text-orange-600 mr-2" />
            <span className="text-2xl text-orange-700 font-semibold">June 7th, 2025</span>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The first day of our sacred ceremony focuses on purification and preparation. 
            Udakashanti, meaning "peace through water," involves powerful rituals that cleanse 
            and prepare the participants for the main ceremony.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-blue-200 bg-white/90 backdrop-blur-sm shadow-xl mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-900 mb-2 font-elegant">The Sacred Purpose</CardTitle>
              <CardDescription className="text-lg">
                Understanding the spiritual significance of purification
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed space-y-4">
              <p className="text-gray-800">
                <strong>Udakashanti</strong> is derived from two Sanskrit words: "Udaka" (water) and "Shanti" (peace). 
                This day-long ceremony purifies the environment, the participants, and creates a sacred space 
                conducive to spiritual transformation.
              </p>
              
              <p className="text-gray-800">
                Water, being one of the five sacred elements (Pancha Mahabhuta), holds immense purifying power 
                in Hindu tradition. The rituals performed on this day invoke divine energies and remove any 
                obstacles that might interfere with the main ceremony.
              </p>
            </CardContent>
          </Card>

          {/* Ritual Breakdown */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center text-orange-900 mb-8 font-elegant">Sacred Rituals</h2>
            <div className="grid gap-6">
              {rituals.map((ritual, index) => (
                <Card key={index} className="border-orange-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <ritual.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-orange-900 font-elegant">{ritual.name}</CardTitle>
                        <div className="text-sm text-orange-600 font-medium">Ritual {index + 1}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-800 font-medium">{ritual.description}</p>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <p className="text-gray-700 italic">{ritual.significance}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Spiritual Preparation */}
          <Card className="border-yellow-200 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-yellow-900 mb-2 font-elegant">Spiritual Preparation</CardTitle>
              <CardDescription className="text-lg">
                Creating the perfect foundation for transformation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-lg leading-relaxed">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-orange-900 mb-3 font-elegant">For the Family</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Maintain purity of thought and action</li>
                    <li>• Observe fasting if prescribed</li>
                    <li>• Participate with devotion and reverence</li>
                    <li>• Create a peaceful environment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 font-elegant">For the Initiates</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mental preparation for the journey ahead</li>
                    <li>• Understanding the ceremony's significance</li>
                    <li>• Cultivating respect for traditions</li>
                    <li>• Embracing the spiritual transformation</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-800 border-l-4 border-blue-500 pl-6 italic font-sanskrit">
                "आपो हि ष्ठा मयोभुवस्ता न ऊर्जे दधातन।" <br/>
                <span className="text-sm text-gray-600 font-sans">
                  "Waters are indeed the source of bliss, they grant us strength and energy."
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UdakashantiDay;
