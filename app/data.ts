// data/Data.ts

import { Event } from "./event";

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "Tech Conference",
    date: "2024-12-01",
    venue: "Room 101, Engineering Building",
    fee: "Free",
    organizer: "Tech Club",
    description: "A conference on the latest in technology.",
    image: "/path/to/placeholder.jpg",
    status: "current", // current event
  },
  {
    id: 2,
    title: "Art Exhibition",
    date: "2024-12-05",
    venue: "Room 202, Art Building",
    fee: "$5",
    organizer: "Art Club",
    description: "An exhibition of student artwork.",
    image: "/path/to/placeholder.jpg",
    status: "past", // past event
  },
  {
    id: 3,
    title: "Cultural Night",
    date: "2024-12-10",
    venue: "Hall 3, Cultural Center",
    fee: "Free",
    organizer: "Cultural Club",
    description: "A night showcasing diverse cultures and performances.",
    image: "/path/to/placeholder.jpg",
    status: "planned", // planned event
  },
  {
    id: 4,
    title: "Robotics Workshop",
    date: "2024-12-15",
    venue: "Room 301, Engineering Lab",
    fee: "$10",
    organizer: "Robotics Club",
    description: "Hands-on workshop for building basic robots.",
    image: "/path/to/placeholder.jpg",
    status: "current", // current event
  },
  {
    id: 5,
    title: "Music Festival",
    date: "2024-12-18",
    venue: "Outdoor Arena, University Campus",
    fee: "$20",
    organizer: "Music Club",
    description: "A festival featuring local and international bands.",
    image: "/path/to/placeholder.jpg",
    status: "planned", // planned event
  },
  {
    id: 6,
    title: "AI & ML Symposium",
    date: "2024-11-28",
    venue: "Room 201, Computer Science Building",
    fee: "Free",
    organizer: "Tech Club",
    description: "An in-depth exploration of Artificial Intelligence and Machine Learning.",
    image: "/path/to/placeholder.jpg",
    status: "past", // past event
  },
  {
    id: 7,
    title: "Photography Exhibition",
    date: "2024-12-20",
    venue: "Room 102, Art Building",
    fee: "$5",
    organizer: "Photography Club",
    description: "An exhibition showcasing student photography.",
    image: "/path/to/placeholder.jpg",
    status: "past", // past event
  },
  {
    id: 8,
    title: "Startup Pitch Day",
    date: "2024-12-25",
    venue: "Room 110, Business School",
    fee: "Free",
    organizer: "Entrepreneurship Club",
    description: "An event where student startups pitch their ideas to investors.",
    image: "/path/to/placeholder.jpg",
    status: "current", // current event
  },
  {
    id: 9,
    title: "Web Development Bootcamp",
    date: "2025-01-05",
    venue: "Room 204, IT Center",
    fee: "$30",
    organizer: "Coding Club",
    description: "A bootcamp to teach the fundamentals of web development.",
    image: "/path/to/placeholder.jpg",
    status: "planned", // planned event
  },
  {
    id: 10,
    title: "Eco-Fair",
    date: "2025-01-10",
    venue: "Campus Green",
    fee: "Free",
    organizer: "Eco Club",
    description: "An eco-friendly event showcasing sustainable products and ideas.",
    image: "/path/to/placeholder.jpg",
    status: "current", // current event
  },
];

export const mockClubs = [
  {
    id: 1,
    name: "Tech Club",
    logo: "/placeholder%20image.jpg",
    description: "The Tech Club is all about exploring the latest in technology, coding, and innovation.",
    goals: "To foster innovation and tech education among students.",
    members: [
      { id: 1, name: "Alice", position: "President" },
      { id: 2, name: "Bob", position: "Vice President" },
      { id: 3, name: "Charlie", position: "Secretary" },
    ],
    gallery: [
      { id: 1, imageUrl: "/placeholder%20image.jpg" },
      { id: 2, imageUrl: "/placeholder%20image.jpg" },
      { id: 3, imageUrl: "/placeholder%20image.jpg" },
    ],
    events: [
      mockEvents[0], // Tech Conference
      mockEvents[6], // AI & ML Symposium
    ],
  },
  {
    id: 2,
    name: "Art Club",
    logo: "/placeholder%20image.jpg",
    description: "The Art Club brings together students with a passion for all forms of art and creativity.",
    goals: "To inspire creativity and provide a platform for artistic expression.",
    members: [
      { id: 1, name: "David", position: "President" },
      { id: 2, name: "Eva", position: "Treasurer" },
      { id: 3, name: "Fiona", position: "Event Coordinator" },
    ],
    gallery: [
      { id: 1, imageUrl: "/placeholder%20image.jpg" },
      { id: 2, imageUrl: "/placeholder%20image.jpg" },
      { id: 3, imageUrl: "/placeholder%20image.jpg" },
    ],
    events: [
      mockEvents[1], // Art Exhibition
    ],
  },
  {
    id: 3,
    name: "Cultural Club",
    logo: "/placeholder%20image.jpg",
    description: "The Cultural Club celebrates the diverse cultures and traditions of students from around the world.",
    goals: "To promote cultural exchange and celebrate global diversity.",
    members: [
      { id: 1, name: "Grace", position: "President" },
      { id: 2, name: "Henry", position: "Vice President" },
      { id: 3, name: "Isabella", position: "Secretary" },
    ],
    gallery: [
      { id: 1, imageUrl: "/placeholder%20image.jpg" },
      { id: 2, imageUrl: "/placeholder%20image.jpg" },
      { id: 3, imageUrl: "/placeholder%20image.jpg" },
    ],
    events: [
      mockEvents[2], // Cultural Night
    ],
  },
  {
    id: 4,
    name: "Robotics Club",
    logo: "/placeholder%20image.jpg",
    description: "The Robotics Club focuses on building robots and learning about automation and robotics technology.",
    goals: "To inspire the next generation of engineers and robotics enthusiasts.",
    members: [
      { id: 1, name: "Jack", position: "President" },
      { id: 2, name: "Kathy", position: "Technical Lead" },
      { id: 3, name: "Liam", position: "Event Organizer" },
    ],
    gallery: [
      { id: 1, imageUrl: "/placeholder%20image.jpg" },
      { id: 2, imageUrl: "/placeholder%20image.jpg" },
      { id: 3, imageUrl: "/placeholder%20image.jpg" },
    ],
    events: [
      mockEvents[3], // Robotics Workshop
    ],
  },
  {
    id: 5,
    name: "Music Club",
    logo: "/placeholder%20image.jpg",
    description: "The Music Club is for students who are passionate about music and want to improve their skills.",
    goals: "To bring together musicians, organize performances, and encourage musical creativity.",
    members: [
      { id: 1, name: "Monica", position: "President" },
      { id: 2, name: "Nathan", position: "Vice President" },
      { id: 3, name: "Olivia", position: "Musical Director" },
    ],
    gallery: [
      { id: 1, imageUrl: "/placeholder%20image.jpg" },
      { id: 2, imageUrl: "/placeholder%20image.jpg" },
      { id: 3, imageUrl: "/placeholder%20image.jpg" },
    ],
    events: [
      mockEvents[4], // Music Festival
    ],
  },
  {
    id: 6,
    name: "Photography Club",
    logo: "/placeholder%20image.jpg",
    description: "The Photography Club encourages students to explore photography and improve their skills.",
    goals: "To share the love of photography, organize photo shoots, and showcase members’ works.",
    members: [
      { id: 1, name: "Paul", position: "President" },
      { id: 2, name: "Quinn", position: "Vice President" },
      { id: 3, name: "Rachel", position: "Secretary" },
    ],
    gallery: [
      { id: 1, imageUrl: "/placeholder%20image.jpg" },
      { id: 2, imageUrl: "/placeholder%20image.jpg" },
      { id: 3, imageUrl: "/placeholder%20image.jpg" },
    ],
    events: [
      mockEvents[7], // Photography Exhibition
    ],
  },
  {
    id: 7,
    name: "Entrepreneurship Club",
    logo: "/placeholder%20image.jpg",
    description: "The Entrepreneurship Club helps students develop business ideas and foster an entrepreneurial mindset.",
    goals: "To create opportunities for students to build, pitch, and develop their business ventures.",
    members: [
      { id: 1, name: "Steven", position: "President" },
      { id: 2, name: "Tina", position: "Treasurer" },
      { id: 3, name: "Ursula", position: "Project Manager" },
    ],
    gallery: [
      { id: 1, imageUrl: "/placeholder%20image.jpg" },
      { id: 2, imageUrl: "/placeholder%20image.jpg" },
      { id: 3, imageUrl: "/placeholder%20image.jpg" },
    ],
    events: [
      mockEvents[8], // Startup Pitch Day
    ],
  },
  {
    id: 8,
    name: "Coding Club",
    logo: "/placeholder%20image.jpg",
    description: "The Coding Club brings together students who are passionate about programming and coding.",
    goals: "To foster collaboration, learning, and the development of coding skills through projects and competitions.",
    members: [
      { id: 1, name: "Victor", position: "President" },
      { id: 2, name: "Wendy", position: "Technical Lead" },
      { id: 3, name: "Xander", position: "Event Coordinator" },
    ],
    gallery: [
      { id: 1, imageUrl: "/placeholder%20image.jpg" },
      { id: 2, imageUrl: "/placeholder%20image.jpg" },
      { id: 3, imageUrl: "/placeholder%20image.jpg" },
    ],
    events: [
      mockEvents[9], 
    ],
  },
  {
    id: 9,
    name: "Eco Club",
    logo: "/placeholder%20image.jpg",
    description: "The Eco Club works towards promoting sustainability and environmental awareness among students.",
    goals: "To raise awareness about environmental issues and engage students in sustainability efforts.",
    members: [
      { id: 1, name: "Yara", position: "President" },
      { id: 2, name: "Zane", position: "Vice President" },
      { id: 3, name: "Alice", position: "Event Coordinator" },
    ],
    gallery: [
      { id: 1, imageUrl: "/placeholder%20image.jpg" },
      { id: 2, imageUrl: "/placeholder%20image.jpg" },
      { id: 3, imageUrl: "/placeholder%20image.jpg" },
    ],
    events: [
      mockEvents[10], 
    ]
  },
];


export const students = [
  {
    id: 1,
    name: "Alice",
    bio: "A passionate student of environmental science, Alice is actively involved in promoting sustainability through student organizations.",
    email: "alice@example.com",
    contactNumber: "+60123456789",
    clubAffiliations: ["Eco Club", "Photography Club"],
    achievements: [
      "Winner of the Eco-Friendly Poster Design Competition 2024",
      "Volunteer at the University Sustainability Program",
    ],
    events: [1, 2, 4], 
    profilePicture: "/placeholder-image.jpg",
  },
  {
    id: 2,
    name: "Bob",
    bio: "Bob is an aspiring entrepreneur, always looking for new ways to solve real-world problems through innovation and technology.",
    email: "bob@example.com",
    contactNumber: "+60129876543",
    clubAffiliations: ["Entrepreneurship Club", "Tech Club"],
    achievements: [
      "Organized Startup Pitch Day 2024",
      "Second Place in the Business Idea Pitch Competition 2024",
    ],
    events: [2, 3], 
    profilePicture: "/placeholder-image.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    bio: "Charlie is a tech enthusiast with a love for coding and web development. He enjoys collaborating on projects and contributing to open-source communities.",
    email: "charlie@example.com",
    contactNumber: "+60123498765",
    clubAffiliations: ["Coding Club", "Robotics Club"],
    achievements: [
      "First Place in the University Hackathon 2024",
      "Contributor to an Open-Source Web Development Project",
    ],
    events: [1, 3, 4], 
    profilePicture: "/placeholder-image.jpg",
  },
];
