
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Calendar, Camera } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md border-b border-orange-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ॐ</span>
            </div>
            <span className="text-xl font-bold text-orange-900">Upanayanam 2025</span>
          </Link>
          
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"} 
                size="sm"
                className={isActive("/") ? "bg-orange-600 hover:bg-orange-700" : "text-orange-700 hover:text-orange-900 hover:bg-orange-50"}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            
            <Link to="/udakashanti">
              <Button 
                variant={isActive("/udakashanti") ? "default" : "ghost"} 
                size="sm"
                className={isActive("/udakashanti") ? "bg-orange-600 hover:bg-orange-700" : "text-orange-700 hover:text-orange-900 hover:bg-orange-50"}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Day 1
              </Button>
            </Link>
            
            <Link to="/upanayanam">
              <Button 
                variant={isActive("/upanayanam") ? "default" : "ghost"} 
                size="sm"
                className={isActive("/upanayanam") ? "bg-red-600 hover:bg-red-700" : "text-red-700 hover:text-red-900 hover:bg-red-50"}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Day 2
              </Button>
            </Link>
            
            <Link to="/photos">
              <Button 
                variant={isActive("/photos") ? "default" : "ghost"} 
                size="sm"
                className={isActive("/photos") ? "bg-green-600 hover:bg-green-700" : "text-green-700 hover:text-green-900 hover:bg-green-50"}
              >
                <Camera className="w-4 h-4 mr-2" />
                Photos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
