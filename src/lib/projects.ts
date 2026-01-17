export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[]; // Array of image URLs - can be 1 or multiple
  tags?: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform MVP",
    description: "Built a scalable e-commerce platform with real-time inventory management, payment integration, and admin dashboard. Launched in 6 weeks with 10,000+ active users.",
    images: [
      "/projects/ecommerce-1.jpg",
      "/projects/ecommerce-2.jpg",
      "/projects/ecommerce-3.jpg",
    ],
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    id: "2",
    title: "AI-Powered Analytics Dashboard",
    description: "Developed an intelligent analytics platform that processes millions of data points in real-time, providing actionable insights through machine learning algorithms.",
    images: [
      "/projects/analytics-1.jpg",
    ],
    tags: ["React", "Python", "TensorFlow", "AWS"],
    link: "#",
  },
  {
    id: "3",
    title: "Mobile Food Delivery App",
    description: "Created a full-stack food delivery application with real-time tracking, push notifications, and seamless payment processing. Served 50,000+ orders in first month.",
    images: [
      "/projects/food-1.jpg",
      "/projects/food-2.jpg",
    ],
    tags: ["React Native", "Node.js", "MongoDB", "Firebase"],
    link: "#",
  },
  {
    id: "4",
    title: "SaaS Project Management Tool",
    description: "Built a comprehensive project management SaaS platform with team collaboration, time tracking, and automated reporting features. Used by 500+ teams worldwide.",
    images: [
      "/projects/saas-1.jpg",
      "/projects/saas-2.jpg",
      "/projects/saas-3.jpg",
      "/projects/saas-4.jpg",
    ],
    tags: ["Vue.js", "Django", "PostgreSQL", "Docker"],
    link: "#",
  },
  {
    id: "5",
    title: "Healthcare Telemedicine Platform",
    description: "Developed a secure telemedicine platform with video consultations, prescription management, and patient records. HIPAA compliant with end-to-end encryption.",
    images: [
      "/projects/healthcare-1.jpg",
      "/projects/healthcare-2.jpg",
    ],
    tags: ["Next.js", "WebRTC", "HIPAA", "AWS"],
    link: "#",
  },
  {
    id: "6",
    title: "Fintech Payment Gateway",
    description: "Created a robust payment processing system with fraud detection, multi-currency support, and instant settlements. Processing $10M+ monthly transactions.",
    images: [
      "/projects/fintech-1.jpg",
    ],
    tags: ["Go", "Kubernetes", "Redis", "Microservices"],
    link: "#",
  },
];
