
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Gift, MessageSquare } from "lucide-react";

const WhyJoin = () => {
  return (
    <section className="section bg-gray-900 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-block text-sm font-medium bg-white/10 text-white px-3 py-1 rounded-full mb-4">
            WHY JOIN
          </div>
          
          <h2 className="heading-lg mb-6">Join the visionaries shaping education</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mb-3">
                <Clock className="h-6 w-6 text-rosqin-blue" />
              </div>
              <CardTitle className="text-white">Early Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Be the first to explore powerful features before anyone else.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mb-3">
                <Gift className="h-6 w-6 text-rosqin-blue" />
              </div>
              <CardTitle className="text-white">Exclusive Perks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Get rewards, bonuses, and surprises just for early supporters.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mb-3">
                <MessageSquare className="h-6 w-6 text-rosqin-blue" />
              </div>
              <CardTitle className="text-white">Your Voice Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Co-create Rosqin, help shape with your insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
