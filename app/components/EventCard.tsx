"use client";

import { Event } from "../event";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2">
      <div className="relative h-48 overflow-hidden">
        <Image
          src=""
          alt={event.title}
          className="object-cover w-full h-full"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-1">{event.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          {event.date}
        </Badge>
        
        <p className="text-sm text-gray-600 line-clamp-3">
          {event.description}
        </p>
        
        <div className="space-y-1">
          <p className="text-sm text-gray-500">
            Venue: {event.venue}
          </p>
          <p className="text-sm text-gray-500">
            Fee: {event.fee}
          </p>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;