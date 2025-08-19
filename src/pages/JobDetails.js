import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useJobs } from '../context/JobContext';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, updateJob, deleteJob } = useJobs();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  const job = jobs.find(j => j.id === id);

  React.useEffect(() => {
    if (job) {
      setFormData(job);
    }
  }, [job]);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job application you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (!formData.company.trim() || !formData.position.trim()) {
      alert('Please fill in at least the company and position fields.');
      return;
    }
    updateJob(id, formData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this job application? This action cannot be undone.')) {
      deleteJob(id);
      navigate('/');
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      applied: 'bg-blue-100 text-blue-800',
      interviewing: 'bg-yellow-100 text-yellow-800',
      offered: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      withdrawn: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {isEditing ? 'Edit Job Application' : job.position}
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  {job.company}
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex gap-3">
                <button
                  onClick={() => navigate('/')}
                  className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Back
                </button>
                {!isEditing && (
                  <>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </>
                )}
                {isEditing && (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Save
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-6">
            {isEditing ? (
              // Edit Form
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Position *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salary
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status || 'applied'}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="applied">Applied</option>
                    <option value="interviewing">Interviewing</option>
                    <option value="offered">Offered</option>
                    <option value="rejected">Rejected</option>
                    <option value="withdrawn">Withdrawn</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Type
                  </label>
                  <select
                    name="jobType"
                    value={formData.jobType || 'full-time'}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                    <option value="freelance">Freelance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Application Date
                  </label>
                  <input
                    type="date"
                    name="applicationDate"
                    value={formData.applicationDate || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job URL
                  </label>
                  <input
                    type="url"
                    name="jobUrl"
                    value={formData.jobUrl || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description || ''}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes || ''}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            ) : (
              // Display Mode
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{job.position}</h2>
                      <p className="text-lg text-gray-600">{job.company}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(job.status)}`}>
                      {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Location</h3>
                  <p className="mt-1 text-sm text-gray-900">{job.location || 'Not specified'}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Salary</h3>
                  <p className="mt-1 text-sm text-gray-900">{job.salary || 'Not specified'}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Job Type</h3>
                  <p className="mt-1 text-sm text-gray-900 capitalize">{job.jobType || 'Not specified'}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Application Date</h3>
                  <p className="mt-1 text-sm text-gray-900">{formatDate(job.applicationDate)}</p>
                </div>

                {job.jobUrl && (
                  <div className="md:col-span-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Job URL</h3>
                    <a
                      href={job.jobUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-blue-600 hover:text-blue-500 break-all"
                    >
                      {job.jobUrl}
                    </a>
                  </div>
                )}

                {/* Contact Information */}
                {(job.contactPerson || job.contactEmail || job.contactPhone) && (
                  <div className="md:col-span-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Contact Information</h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      {job.contactPerson && (
                        <div>
                          <span className="text-sm font-medium text-gray-700">Contact Person:</span>
                          <span className="ml-2 text-sm text-gray-900">{job.contactPerson}</span>
                        </div>
                      )}
                      {job.contactEmail && (
                        <div>
                          <span className="text-sm font-medium text-gray-700">Email:</span>
                          <a href={`mailto:${job.contactEmail}`} className="ml-2 text-sm text-blue-600 hover:text-blue-500">
                            {job.contactEmail}
                          </a>
                        </div>
                      )}
                      {job.contactPhone && (
                        <div>
                          <span className="text-sm font-medium text-gray-700">Phone:</span>
                          <a href={`tel:${job.contactPhone}`} className="ml-2 text-sm text-blue-600 hover:text-blue-500">
                            {job.contactPhone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Job Description */}
                {job.description && (
                  <div className="md:col-span-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Job Description</h3>
                    <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{job.description}</p>
                  </div>
                )}

                {/* Notes */}
                {job.notes && (
                  <div className="md:col-span-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Notes</h3>
                    <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{job.notes}</p>
                  </div>
                )}

                {/* Timestamps */}
                <div className="md:col-span-2 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-500">
                    <div>
                      <span className="font-medium">Created:</span> {formatDate(job.createdAt)}
                    </div>
                    <div>
                      <span className="font-medium">Last Updated:</span> {formatDate(job.updatedAt)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
