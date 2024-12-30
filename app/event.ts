export interface Club {
    id: number;
    name: string;
    members: string[]; // Names of the club members
    events: number[]; // List of event IDs related to this club
  }
  
  export interface Event {
    id: number;
    title: string;
    date: string;
    venue: string;
    fee: string;
    organizer: string;
    description: string;
    image: string;
    status: "planned" | "current" | "past"; // Event status
    participants?: string[]; // List of participant names
  }
  