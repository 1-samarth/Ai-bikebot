import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Bike, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <Bike className="w-12 h-12 text-white" />
        </div>
        <div>
          <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Route Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Looks like you've taken a wrong turn! The page you're looking for
            doesn't exist.
          </p>
        </div>
        <Link to="/">
          <Button className="bg-gradient-to-br from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
            <Home className="w-4 h-4 mr-2" />
            Back to BikeBot
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
