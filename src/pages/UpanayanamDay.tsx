
import { Clock, Circle, Star, Flame, Heart, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const UpanayanamDay = () => {
  const rituals = [
    {
      name: "Sankalpam",
      description: "Sacred resolution and formal beginning of the main ceremony",
      significance: "Setting the divine intention for the thread ceremony",
      icon: Star
    },
    {
      name: "Vivesana",
      description: "Detailed preparation and sanctification of the ceremonial space",
      significance: "Creating a sacred environment worthy of divine presence",
      icon: Circle
    },
    {
      name: "Punyaham",
      description: "Auspicious time calculation and divine invocation",
      significance: "Ensuring the ceremony begins at the most favorable moment",
      icon: Clock
    },
    {
      name: "Yagnopavita Aradhya",
      description: "Worship and consecration of the sacred thread",
      significance: "Infusing the thread with divine energy and blessings",
      icon: Circle
    },
    {
      name: "Yagno Dhanum",
      description: "Five respected individuals present the sacred thread",
      significance: "Community blessing and acceptance of the initiate",
      icon: Star
    },
    {
      name: "Yago Dharana",
      description: "The actual wearing of the sacred thread",
      significance: "The moment of spiritual rebirth and transformation",
      icon: Circle
    },
    {
      name: "Kumara Bhojanum",
      description: "Special feast for the young initiate",
      significance: "Celebrating the new spiritual status with nourishment",
      icon: Heart
    },
    {
      name: "Aurdhay Homa",
      description: "Sacred fire ceremony for health and well-being",
      significance: "Invoking divine protection and blessing for long life",
      icon: Flame
    },
    {
      name: "Shilarohanam",
      description: "Standing on a sacred stone with new dhoti",
      significance: "Symbolizing strength, stability, and new beginning",
      icon: Star
    },
    {
      name: "Moundji Dharana",
      description: "Wearing the sacred girdle made of munja grass",
      significance: "Symbol of restraint, discipline, and brahmacharya",
      icon: Circle
    },
    {
      name: "Ajinhum Dharana",
      description: "Wearing the sacred deer skin",
      significance: "Symbol of non-violence and connection to nature",
      icon: Heart
    },
    {
      name: "Asthagrahanum",
      description: "Receiving the eight essential items for student life",
      significance: "Equipping the student with tools for spiritual learning",
      icon: BookOpen
    },
    {
      name: "Agniparathadhati Mantrum",
      description: "Learning the sacred mantras for fire worship",
      significance: "First lessons in Vedic chanting and fire rituals",
      icon: Flame
    },
    {
      name: "Kumara Lingana",
      description: "Embracing the son in his new spiritual status",
      significance: "Parental acceptance and blessing of the transformation",
      icon: Heart
    },
    {
      name: "Kumara Karney Mantrum Japitva",
      description: "Teaching the code of conduct for brahmacharya life",
      significance: "Guidance on how to live as a spiritual student",
      icon: BookOpen
    },
    {
      name: "Brahmachara Magamethi",
      description: "Formal declaration of entering studenthood",
      significance: "Taking vows of celibacy, study, and service",
      icon: Star
    },
    {
      name: "Pradhnahoma",
      description: "Principal fire offering and oblations",
      significance: "Major offerings to invoke divine blessings",
      icon: Flame
    },
    {
      name: "Brahma-upamadeshum",
      description: "Teaching of sacred Gayatri mantra",
      significance: "Receiving the most sacred mantra for daily practice",
      icon: BookOpen
    },
    {
      name: "Palashadundum Grhanum",
      description: "The ceremonial running with sacred wood",
      significance: "Demonstrating readiness to serve the guru",
      icon: Star
    },
    {
      name: "Suryadharshana",
      description: "First formal worship of the Sun deity",
      significance: "Beginning daily solar worship tradition",
      icon: Circle
    },
    {
      name: "Sumitadhanahomo",
      description: "Final fire ceremonies and offerings",
      significance: "Concluding the sacred fire rituals with gratitude",
      icon: Flame
    },
    {
      name: "Questions and Answers",
      description: "Testing the initiate's understanding and commitment",
      significance: "Confirming readiness for the spiritual path",
      icon: BookOpen
    },
    {
      name: "Biksha",
      description: "First act of seeking alms/food",
      significance: "Learning humility and dependence on divine grace",
      icon: Heart
    },
    {
      name: "Ashirvada",
      description: "Receiving blessings from elders and family",
      significance: "Community support for the spiritual journey",
      icon: Star
    },
    {
      name: "Aarti",
      description: "Final prayer ceremony with light offering",
      significance: "Celebrating the completion with divine gratitude",
      icon: Flame
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Circle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
            Upanayanam Day
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-6 h-6 text-orange-600 mr-2" />
            <span className="text-2xl text-orange-700 font-semibold">June 8th, 2025</span>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The sacred day of transformation. Today marks the spiritual rebirth as our sons 
            receive the sacred thread and begin their journey as formal students of Vedic wisdom.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-red-200 bg-white/90 backdrop-blur-sm shadow-xl mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-red-900 mb-2">The Sacred Transformation</CardTitle>
              <CardDescription className="text-lg">
                Understanding the journey from childhood to studenthood
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed space-y-4">
              <p className="text-gray-800">
                <strong>Upanayanam</strong> literally means "bringing near" - bringing the student near to the guru 
                and to divine knowledge. This elaborate ceremony, with its 25 distinct rituals, transforms 
                a child into a formal student of spiritual wisdom.
              </p>
              
              <p className="text-gray-800">
                Each ritual has deep symbolic meaning, from the wearing of the sacred thread to the first 
                lesson in Gayatri mantra. This day marks the beginning of a lifelong commitment to learning, 
                dharma, and spiritual growth.
              </p>
            </CardContent>
          </Card>

          {/* Sacred Thread Explanation */}
          <Card className="border-yellow-200 bg-white/90 backdrop-blur-sm shadow-xl mb-8">
            <CardHeader className="text-center">
              <Circle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-yellow-900 mb-2">The Sacred Thread (Yagnopavita)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg leading-relaxed">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h3 className="font-semibold text-orange-900 mb-2">Three Strands</h3>
                  <p className="text-gray-700 text-sm">Representing the three debts: to God, to sages, and to ancestors</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-2xl">9</span>
                  </div>
                  <h3 className="font-semibold text-red-900 mb-2">Nine Threads</h3>
                  <p className="text-gray-700 text-sm">Each strand contains three threads, totaling nine sacred threads</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-2xl">∞</span>
                  </div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Eternal Bond</h3>
                  <p className="text-gray-700 text-sm">Symbolizing the eternal connection to dharma and divine wisdom</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ritual Breakdown */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center text-red-900 mb-8">The 25 Sacred Rituals</h2>
            <div className="grid gap-4">
              {rituals.map((ritual, index) => (
                <Card key={index} className="border-orange-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-red-900 flex items-center">
                          <ritual.icon className="w-5 h-5 mr-2 text-orange-600" />
                          {ritual.name}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    <p className="text-gray-800 text-sm font-medium">{ritual.description}</p>
                    <div className="border-l-4 border-orange-500 pl-3">
                      <p className="text-gray-700 text-sm italic">{ritual.significance}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gayatri Mantra */}
          <Card className="border-purple-200 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-purple-900 mb-2">The Sacred Gayatri Mantra</CardTitle>
              <CardDescription className="text-lg">
                The most sacred prayer taught during Upanayanam
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
                <p className="text-xl text-purple-900 font-semibold mb-4">
                  ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं<br/>
                  भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥
                </p>
                <p className="text-lg text-purple-800 italic">
                  "Om Bhur Bhuvaḥ Swaḥ Tat-savitur Vareñyaṃ<br/>
                  Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Prachodayāt"
                </p>
              </div>
              
              <p className="text-gray-800 leading-relaxed">
                <strong>Translation:</strong> "We meditate on the glory of the Creator who has created the Universe; 
                who is worthy of Worship; who is the embodiment of Knowledge and Light; who is the remover of 
                all Sin and Ignorance. May He enlighten our Intellect."
              </p>
              
              <p className="text-gray-700 text-sm border-t pt-4">
                This mantra becomes the daily prayer for the initiated student, to be recited during 
                the three sandhya times (dawn, noon, and dusk) throughout their life.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UpanayanamDay;
