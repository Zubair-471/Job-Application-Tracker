// Sample data for Job Application Tracker
// Copy this entire script and run addSampleData() in the browser console

const sampleJobs = [
  {
    id: "1",
    company: "Google",
    position: "Frontend Developer",
    location: "Mountain View, CA",
    salary: "$120,000 - $150,000",
    status: "Applied",
    jobType: "Full-time",
    applicationDate: "2025-01-15",
    jobUrl: "https://careers.google.com/jobs/results/123456",
    description: "We're looking for a talented Frontend Developer to join our team. You'll work on cutting-edge web applications using React, TypeScript, and modern web technologies.",
    notes: "Applied through LinkedIn. Hiring manager is Sarah Johnson. Company has great benefits and work-life balance.",
    contactPerson: "Sarah Johnson",
    contactEmail: "sarah.johnson@google.com",
    contactPhone: "+1 (555) 123-4567",
    createdAt: "2025-01-15T10:30:00.000Z",
    updatedAt: "2025-01-15T10:30:00.000Z"
  },
  {
    id: "2",
    company: "Microsoft",
    position: "Software Engineer",
    location: "Seattle, WA",
    salary: "$130,000 - $160,000",
    status: "Interviewing",
    jobType: "Full-time",
    applicationDate: "2025-01-10",
    jobUrl: "https://careers.microsoft.com/us/en/job/789012",
    description: "Join our Azure team as a Software Engineer. You'll be responsible for developing cloud infrastructure solutions and working with distributed systems.",
    notes: "First interview scheduled for next week. Technical assessment completed. Very interested in the Azure platform.",
    contactPerson: "Mike Chen",
    contactEmail: "mike.chen@microsoft.com",
    contactPhone: "+1 (555) 234-5678",
    createdAt: "2025-01-10T14:20:00.000Z",
    updatedAt: "2025-01-12T09:15:00.000Z"
  },
  {
    id: "3",
    company: "Apple",
    position: "iOS Developer",
    location: "Cupertino, CA",
    salary: "$140,000 - $170,000",
    status: "Offered",
    jobType: "Full-time",
    applicationDate: "2024-12-20",
    jobUrl: "https://jobs.apple.com/en-us/details/345678",
    description: "Develop next-generation iOS applications for millions of users worldwide. Work with Swift, SwiftUI, and cutting-edge mobile technologies.",
    notes: "Offer received! $150,000 base + stock options. Need to respond by Friday. Great team and exciting projects.",
    contactPerson: "Lisa Rodriguez",
    contactEmail: "lisa.rodriguez@apple.com",
    contactPhone: "+1 (555) 345-6789",
    createdAt: "2024-12-20T11:45:00.000Z",
    updatedAt: "2025-01-14T16:30:00.000Z"
  },
  {
    id: "4",
    company: "Amazon",
    position: "Full Stack Developer",
    location: "Seattle, WA",
    salary: "$125,000 - $155,000",
    status: "Rejected",
    jobType: "Full-time",
    applicationDate: "2024-12-15",
    jobUrl: "https://www.amazon.jobs/en/jobs/456789",
    description: "Build scalable web applications using AWS services. Work with React, Node.js, and cloud infrastructure.",
    notes: "Rejected after final round. Feedback: strong technical skills but need more experience with AWS. Will reapply in 6 months.",
    contactPerson: "David Kim",
    contactEmail: "david.kim@amazon.com",
    contactPhone: "+1 (555) 456-7890",
    createdAt: "2024-12-15T13:10:00.000Z",
    updatedAt: "2025-01-08T10:45:00.000Z"
  },
  {
    id: "5",
    company: "Netflix",
    position: "React Developer",
    location: "Los Gatos, CA",
    salary: "$135,000 - $165,000",
    status: "Withdrawn",
    jobType: "Full-time",
    applicationDate: "2025-01-05",
    jobUrl: "https://jobs.netflix.com/jobs/567890",
    description: "Join our streaming platform team. Build user interfaces that millions of users interact with daily using React and modern web technologies.",
    notes: "Withdrew application due to accepting another offer. Great company culture and interesting technical challenges.",
    contactPerson: "Alex Thompson",
    contactEmail: "alex.thompson@netflix.com",
    contactPhone: "+1 (555) 567-8901",
    createdAt: "2025-01-05T15:20:00.000Z",
    updatedAt: "2025-01-16T12:00:00.000Z"
  },
  {
    id: "6",
    company: "Meta",
    position: "Frontend Engineer",
    location: "Menlo Park, CA",
    salary: "$140,000 - $170,000",
    status: "Interviewing",
    jobType: "Full-time",
    applicationDate: "2025-01-08",
    jobUrl: "https://careers.meta.com/jobs/678901",
    description: "Work on Facebook, Instagram, or WhatsApp frontend. Build features used by billions of people worldwide.",
    notes: "Second interview scheduled. Technical skills assessment went well. Very excited about the scale of impact.",
    contactPerson: "Emma Wilson",
    contactEmail: "emma.wilson@meta.com",
    contactPhone: "+1 (555) 678-9012",
    createdAt: "2025-01-08T09:30:00.000Z",
    updatedAt: "2025-01-13T14:20:00.000Z"
  },
  {
    id: "7",
    company: "Uber",
    position: "Mobile Developer",
    location: "San Francisco, CA",
    salary: "$130,000 - $160,000",
    status: "Applied",
    jobType: "Full-time",
    applicationDate: "2025-01-12",
    jobUrl: "https://www.uber.com/careers/list/789012",
    description: "Develop mobile applications for Uber's platform. Work with React Native, iOS, and Android development.",
    notes: "Applied through company website. Hiring process seems to take 2-3 weeks. Interested in the transportation tech space.",
    contactPerson: "Carlos Martinez",
    contactEmail: "carlos.martinez@uber.com",
    contactPhone: "+1 (555) 789-0123",
    createdAt: "2025-01-12T16:45:00.000Z",
    updatedAt: "2025-01-12T16:45:00.000Z"
  },
  {
    id: "8",
    company: "Airbnb",
    position: "Full Stack Engineer",
    location: "San Francisco, CA",
    salary: "$145,000 - $175,000",
    status: "Applied",
    jobType: "Full-time",
    applicationDate: "2025-01-14",
    jobUrl: "https://careers.airbnb.com/positions/890123",
    description: "Build the next generation of Airbnb's platform. Work with React, Node.js, and microservices architecture.",
    notes: "Applied yesterday. Company has great remote work policy. Very interested in the travel industry.",
    contactPerson: "Rachel Green",
    contactEmail: "rachel.green@airbnb.com",
    contactPhone: "+1 (555) 890-1234",
    createdAt: "2025-01-14T10:15:00.000Z",
    updatedAt: "2025-01-14T10:15:00.000Z"
  }
];

function addSampleData() {
  // Clear existing data
  localStorage.removeItem('jobs');
  
  // Add sample data
  localStorage.setItem('jobs', JSON.stringify(sampleJobs));
  
  // Reload the page to show the new data
  window.location.reload();
  
  console.log('Sample data added successfully! The page will reload to show the new job applications.');
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sampleJobs, addSampleData };
}
