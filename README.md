# Job Application Tracker

A modern, responsive web application for tracking job applications with a beautiful UI built with React, Tailwind CSS, and Context API. Perfect for job seekers to manage their application process efficiently.

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Tailwind-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Context_API-State_Management-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</div>

## 🌟 Overview

A comprehensive job application management system that helps job seekers track their applications, manage contacts, and stay organized throughout their job search process. Built with modern React practices and professional UI/UX design.

## 🎯 Live Demo

[View Live Demo](https://zubair-471.github.io/Job-Application-Tracker/)

## ✨ Features

### Core Features
- **Dashboard**: View all job applications with filtering and sorting
- **Add Job**: Comprehensive form to add new job applications
- **Job Details**: Detailed view with edit and delete functionality
- **Responsive Design**: Optimized for both mobile and desktop

### Advanced Features
- **Search & Filter**: Search by company/position and filter by status
- **Sorting**: Sort by date, company, position, or status
- **Status Tracking**: Track applications through different stages
- **Contact Management**: Store contact information for each application
- **Notes & Description**: Add detailed notes and job descriptions
- **Export/Import**: Export data to JSON and import from JSON files
- **Local Storage**: Data persists between browser sessions

### Status Types
- Applied
- Interviewing
- Offered
- Rejected
- Withdrawn

### Job Types
- Full-time
- Part-time
- Contract
- Internship
- Freelance

## 🛠 Technology Stack

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Context API**: Global state management
- **UUID**: Unique ID generation
- **LocalStorage**: Data persistence

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation Steps

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the directory
   cd job-application-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🧪 Testing the Application

### Quick Start with Sample Data

1. **Start the application:**
   ```bash
   npm start
   ```

2. **Open the test guide:**
   - Open `test-with-sample-data.html` in your browser
   - Or navigate to `http://localhost:3000`

3. **Add sample data:**
   - Open browser console (F12 → Console tab)
   - Copy and paste the script from `sample-data.js`
   - Run `addSampleData()` in the console
   - The page will reload with sample job applications

### Sample Data Includes:
- **8 realistic job applications** from top tech companies
- **Different statuses**: Applied, Interviewing, Offered, Rejected, Withdrawn
- **Complete information**: Contact details, descriptions, notes, URLs
- **Various job types**: Full-time positions with different salaries

### Testing All Features:

#### 📊 Dashboard Testing
- ✅ View all job applications in cards
- ✅ Status statistics (click to filter)
- ✅ Search by company name or position
- ✅ Filter by application status
- ✅ Sort by date, company, position, or status
- ✅ Export data to JSON file
- ✅ Import data from JSON file

#### ➕ Add Job Testing
- ✅ Fill out the comprehensive form
- ✅ Test form validation (required fields)
- ✅ Add contact information
- ✅ Include job description and notes
- ✅ Set application status and job type
- ✅ Save and return to dashboard

#### 📝 Job Details Testing
- ✅ View detailed job information
- ✅ Click contact links (email, phone)
- ✅ Edit job information inline
- ✅ Delete job with confirmation
- ✅ View timestamps (created/updated)

#### 💾 Export/Import Testing
- ✅ Export current data to JSON
- ✅ Clear all data
- ✅ Import previously exported JSON
- ✅ Verify data integrity

## 📁 Project Structure

```
src/
├── components/
│   └── JobCard.js          # Job card component for dashboard
├── context/
│   └── JobContext.js       # Global state management
├── pages/
│   ├── Dashboard.js        # Main dashboard page
│   ├── AddJob.js          # Add new job form
│   └── JobDetails.js      # Job details and edit page
├── App.js                 # Main app component with routing
└── index.css              # Tailwind CSS imports
```

## 🎨 Features in Detail

### Dashboard Interface
- **Job Cards**: Clean, informative cards for each application
- **Status Indicators**: Color-coded status badges
- **Quick Actions**: View details, edit, and delete buttons
- **Statistics**: Visual representation of application statuses

### Add Job Form
- **Comprehensive Fields**: All necessary job application details
- **Form Validation**: Real-time validation with error messages
- **Contact Information**: Separate section for contact details
- **Rich Text Areas**: Space for detailed descriptions and notes

### Job Details Page
- **Complete Information**: All job details in one view
- **Inline Editing**: Edit information directly on the page
- **Contact Integration**: Click to email or call contacts
- **Action Buttons**: Edit and delete with confirmation

## 🔧 Customization

### Adding New Status Types
Update the status options in `JobContext.js`:
```javascript
const statusOptions = [
    'Applied',
    'Interviewing', 
    'Offered',
    'Rejected',
    'Withdrawn',
    'New Status'  // Add new status
];
```

### Customizing Colors
Edit Tailwind classes in components:
```javascript
// Status colors
const statusColors = {
    'Applied': 'bg-blue-100 text-blue-800',
    'Interviewing': 'bg-yellow-100 text-yellow-800',
    'Offered': 'bg-green-100 text-green-800',
    'Rejected': 'bg-red-100 text-red-800',
    'Withdrawn': 'bg-gray-100 text-gray-800'
};
```

### Adding New Fields
Extend the job object structure in `JobContext.js`:
```javascript
const newJob = {
    id: uuidv4(),
    company: '',
    position: '',
    // ... existing fields
    newField: '',  // Add new field
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};
```

## 📊 Data Structure

Each job application includes:
- **Basic Info**: Company, position, location, salary
- **Status**: Application status and job type
- **Dates**: Application date, created/updated timestamps
- **Contact**: Contact person, email, phone
- **Details**: Job description and notes
- **URL**: Link to the job posting

## 🎯 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile**: iOS Safari, Chrome Mobile

## 💾 Local Storage

All data is automatically saved to the browser's localStorage, so your job applications will persist between browser sessions.

## 📤 Export/Import Format

The export/import feature uses JSON format with the following structure:
```json
[
  {
    "id": "unique-uuid",
    "company": "Company Name",
    "position": "Job Position",
    "location": "Location",
    "salary": "Salary Range",
    "status": "applied",
    "jobType": "full-time",
    "applicationDate": "2025-01-01",
    "jobUrl": "https://...",
    "description": "Job description",
    "notes": "Personal notes",
    "contactPerson": "Contact Name",
    "contactEmail": "email@example.com",
    "contactPhone": "Phone Number",
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
]
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
3. Deploy: `npm run deploy`

## 🤝 Contributing

This is a learning project demonstrating React concepts including:
- Context API for state management
- React Router for navigation
- Tailwind CSS for styling
- Local storage for data persistence
- Form handling and validation
- Responsive design principles

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This project is created for educational purposes as part of a React learning curriculum.

## 👨‍💻 Author & Contact

* **M. Zubair Tariq**
* 📧 [M.ZubairTariq20@gmail.com](mailto:M.ZubairTariq20@gmail.com)
* 💼 [LinkedIn](https://www.linkedin.com/in/muhammad-zubair-tariq-70209b364)
* 🎯 [Fiverr – ZubairWebWorks](https://www.fiverr.com/ZubairWebWorks)

---

**Made by M. Zubair Tariq**

⭐ **Star this repo if you found it useful!**
