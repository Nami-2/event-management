"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EventCard from "./EventCard";
import { mockEvents, mockClubs } from "../data";

const HeroSection = () => {
  const [selectedClub, setSelectedClub] = useState<string>("");

  const filteredEvents = selectedClub
    ? mockEvents.filter((event) => event.organizer === selectedClub)
    : mockEvents;

  const upcomingEvents = filteredEvents.filter(
    (event) => event.status === "current" || event.status === "planned"
  );

  return (
    <div className="min-h-screen p-8 m-8 bg-gray-50">
      <h2 className="mb-6 text-3xl font-bold text-center black">
        Upcoming Events
      </h2>
      
      <div className="w-full max-w-xs mb-8">
        <Select
          value={selectedClub}
          onValueChange={(value) => setSelectedClub(value)}
        >
          <SelectTrigger className="border-teal-300 focus:ring-teal-500">
            <SelectValue placeholder="Select Club" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Clubs</SelectItem>
            {mockClubs.map((club) => (
              <SelectItem key={club.name} value={club.name}>
                {club.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {upcomingEvents.length === 0 ? (
          <p className="text-gray-500">No upcoming events available.</p>
        ) : (
          upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}
      </div>
    </div>
  );
};

export default HeroSection;