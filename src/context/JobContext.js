import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const JobContext = createContext();

const initialState = {
  jobs: [],
  loading: false,
  error: null
};

const jobReducer = (state, action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return { ...state, jobs: action.payload };
    case 'ADD_JOB':
      return { ...state, jobs: [...state.jobs, action.payload] };
    case 'UPDATE_JOB':
      return {
        ...state,
        jobs: state.jobs.map(job => 
          job.id === action.payload.id ? action.payload : job
        )
      };
    case 'DELETE_JOB':
      return {
        ...state,
        jobs: state.jobs.filter(job => job.id !== action.payload)
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);

  // Load jobs from localStorage on component mount
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobApplications');
    if (savedJobs) {
      try {
        const parsedJobs = JSON.parse(savedJobs);
        if (parsedJobs && parsedJobs.length > 0) {
          dispatch({ type: 'SET_JOBS', payload: parsedJobs });
          console.log('📊 Loaded existing jobs from localStorage:', parsedJobs.length);
        } else {
          // If saved data is empty, add sample data
          console.log('📭 No existing jobs found, adding sample data...');
          loadSampleData();
        }
      } catch (error) {
        console.error('Error loading jobs from localStorage:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load saved jobs' });
        // Add sample data as fallback
        loadSampleData();
      }
    } else {
      // Add sample data if no jobs exist
      console.log('📭 No localStorage data found, adding sample data...');
      loadSampleData();
    }
  }, []);

  // Function to load sample data
  const loadSampleData = () => {
    const sampleJobs = [
      {
        id: uuidv4(),
        company: "Google",
        position: "Senior Frontend Developer",
        location: "Mountain View, CA",
        salary: "$150,000 - $200,000",
        status: "interviewing",
        jobType: "full-time",
        applicationDate: "2024-01-15",
        jobUrl: "https://careers.google.com/jobs/results/123456",
        description: "We're looking for a Senior Frontend Developer to join our team. You'll be responsible for building scalable web applications using React, TypeScript, and modern web technologies. Experience with large-scale applications and performance optimization is required.",
        notes: "Had first interview with Sarah Johnson. Technical round scheduled for next week. Company culture seems great, benefits are excellent.",
        contactPerson: "Sarah Johnson",
        contactEmail: "sarah.johnson@google.com",
        contactPhone: "+1 (555) 123-4567",
        createdAt: "2024-01-15T10:30:00.000Z",
        updatedAt: "2024-01-20T14:45:00.000Z"
      },
      {
        id: uuidv4(),
        company: "Microsoft",
        position: "Software Engineer",
        location: "Seattle, WA",
        salary: "$130,000 - $180,000",
        status: "applied",
        jobType: "full-time",
        applicationDate: "2024-01-18",
        jobUrl: "https://careers.microsoft.com/us/en/job/789012",
        description: "Join our team as a Software Engineer working on Azure cloud services. You'll develop and maintain cloud infrastructure, work with distributed systems, and contribute to open-source projects.",
        notes: "Applied through LinkedIn. Position looks interesting, good opportunity to work with cloud technologies.",
        contactPerson: "Mike Chen",
        contactEmail: "mike.chen@microsoft.com",
        contactPhone: "+1 (555) 234-5678",
        createdAt: "2024-01-18T09:15:00.000Z",
        updatedAt: "2024-01-18T09:15:00.000Z"
      },
      {
        id: uuidv4(),
        company: "Netflix",
        position: "Full Stack Developer",
        location: "Los Gatos, CA",
        salary: "$140,000 - $190,000",
        status: "offered",
        jobType: "full-time",
        applicationDate: "2024-01-10",
        jobUrl: "https://jobs.netflix.com/jobs/345678",
        description: "Build the next generation of streaming platforms. Work on high-traffic applications, microservices architecture, and real-time data processing. Experience with Node.js, React, and AWS required.",
        notes: "Received offer! $175,000 base + stock options. Great team, exciting projects. Need to decide by Friday.",
        contactPerson: "Emily Rodriguez",
        contactEmail: "emily.rodriguez@netflix.com",
        contactPhone: "+1 (555) 345-6789",
        createdAt: "2024-01-10T11:20:00.000Z",
        updatedAt: "2024-01-22T16:30:00.000Z"
      },
      {
        id: uuidv4(),
        company: "Amazon",
        position: "Backend Engineer",
        location: "Seattle, WA",
        salary: "$120,000 - $170,000",
        status: "rejected",
        jobType: "full-time",
        applicationDate: "2024-01-05",
        jobUrl: "https://amazon.jobs/en/jobs/456789",
        description: "Work on Amazon's e-commerce platform. Build scalable backend services, work with large datasets, and optimize performance. Experience with Java, Python, and distributed systems preferred.",
        notes: "Rejected after final round. Technical interview was challenging. Good learning experience though.",
        contactPerson: "David Kim",
        contactEmail: "david.kim@amazon.com",
        contactPhone: "+1 (555) 456-7890",
        createdAt: "2024-01-05T08:45:00.000Z",
        updatedAt: "2024-01-15T13:20:00.000Z"
      },
      {
        id: uuidv4(),
        company: "Meta",
        position: "React Developer",
        location: "Menlo Park, CA",
        salary: "$135,000 - $185,000",
        status: "interviewing",
        jobType: "full-time",
        applicationDate: "2024-01-12",
        jobUrl: "https://careers.meta.com/jobs/567890",
        description: "Join our team building the next generation of social media platforms. Work with React, GraphQL, and modern web technologies. Focus on user experience and performance optimization.",
        notes: "First interview went well. Technical assessment scheduled. Company is investing heavily in VR/AR.",
        contactPerson: "Alex Thompson",
        contactEmail: "alex.thompson@meta.com",
        contactPhone: "+1 (555) 567-8901",
        createdAt: "2024-01-12T14:30:00.000Z",
        updatedAt: "2024-01-19T10:15:00.000Z"
      },
      {
        id: uuidv4(),
        company: "Apple",
        position: "iOS Developer",
        location: "Cupertino, CA",
        salary: "$130,000 - $180,000",
        status: "applied",
        jobType: "full-time",
        applicationDate: "2024-01-20",
        jobUrl: "https://jobs.apple.com/en-us/details/678901",
        description: "Develop iOS applications for millions of users worldwide. Work with Swift, SwiftUI, and Apple's latest technologies. Experience with mobile development and app store guidelines required.",
        notes: "Applied through Apple's career site. Position looks exciting, would love to work on iOS apps.",
        contactPerson: "Lisa Wang",
        contactEmail: "lisa.wang@apple.com",
        contactPhone: "+1 (555) 678-9012",
        createdAt: "2024-01-20T16:45:00.000Z",
        updatedAt: "2024-01-20T16:45:00.000Z"
      },
      {
        id: uuidv4(),
        company: "Uber",
        position: "Data Scientist",
        location: "San Francisco, CA",
        salary: "$140,000 - $190,000",
        status: "withdrawn",
        jobType: "full-time",
        applicationDate: "2024-01-08",
        jobUrl: "https://careers.uber.com/jobs/789012",
        description: "Use data science to improve Uber's services. Work with large datasets, build predictive models, and drive business decisions. Experience with Python, SQL, and machine learning required.",
        notes: "Withdrew application. Got better offer from another company. Uber's work culture concerns.",
        contactPerson: "Rachel Green",
        contactEmail: "rachel.green@uber.com",
        contactPhone: "+1 (555) 789-0123",
        createdAt: "2024-01-08T12:00:00.000Z",
        updatedAt: "2024-01-16T09:30:00.000Z"
      },
      {
        id: uuidv4(),
        company: "Airbnb",
        position: "Product Manager",
        location: "San Francisco, CA",
        salary: "$150,000 - $200,000",
        status: "applied",
        jobType: "full-time",
        applicationDate: "2024-01-22",
        jobUrl: "https://careers.airbnb.com/positions/890123",
        description: "Lead product development for Airbnb's platform. Work with cross-functional teams, define product strategy, and drive user experience improvements. Experience with product management and user research required.",
        notes: "Applied through referral. Company has interesting challenges with global marketplace.",
        contactPerson: "Tom Anderson",
        contactEmail: "tom.anderson@airbnb.com",
        contactPhone: "+1 (555) 890-1234",
        createdAt: "2024-01-22T10:20:00.000Z",
        updatedAt: "2024-01-22T10:20:00.000Z"
      }
    ];
    
    // Add all sample jobs to state at once
    dispatch({ type: 'SET_JOBS', payload: sampleJobs });
    
    console.log('✅ Sample job data loaded automatically!');
    console.log('📊 Number of sample jobs:', sampleJobs.length);
    console.log('🏢 Sample companies:', sampleJobs.map(job => job.company));
  };

  // Save jobs to localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem('jobApplications', JSON.stringify(state.jobs));
  }, [state.jobs]);

  const addJob = (jobData) => {
    const newJob = {
      id: uuidv4(),
      ...jobData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    dispatch({ type: 'ADD_JOB', payload: newJob });
  };

  const updateJob = (id, jobData) => {
    const updatedJob = {
      ...jobData,
      id,
      updatedAt: new Date().toISOString()
    };
    dispatch({ type: 'UPDATE_JOB', payload: updatedJob });
  };

  const deleteJob = (id) => {
    dispatch({ type: 'DELETE_JOB', payload: id });
  };

  const exportJobs = () => {
    const dataStr = JSON.stringify(state.jobs, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `job-applications-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importJobs = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedJobs = JSON.parse(e.target.result);
          if (Array.isArray(importedJobs)) {
            dispatch({ type: 'SET_JOBS', payload: importedJobs });
            resolve('Jobs imported successfully!');
          } else {
            reject('Invalid file format. Please select a valid JSON file.');
          }
        } catch (error) {
          reject('Error parsing JSON file. Please check the file format.');
        }
      };
      reader.onerror = () => reject('Error reading file.');
      reader.readAsText(file);
    });
  };

  const value = {
    ...state,
    addJob,
    updateJob,
    deleteJob,
    exportJobs,
    importJobs
  };

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};
