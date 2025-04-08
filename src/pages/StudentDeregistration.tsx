import React, { useState } from 'react';

const StudentDeregistration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    batch: '',
    semester: '',
    deregistrationRemark: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
        Deregistration Form
      </h2>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Roll No. and Batch */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 mb-1">
              Roll No. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Enter your roll number"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-1">
              Batch <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              placeholder="Enter your batch"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Semester and Deregistration Remark */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
              Semester <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              placeholder="Enter your semester"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="deregistrationRemark" className="block text-sm font-medium text-gray-700 mb-1">
              Deregistration Remark <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="deregistrationRemark"
              name="deregistrationRemark"
              value={formData.deregistrationRemark}
              onChange={handleChange}
              placeholder="Enter a remark for deregistration"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentDeregistration; 