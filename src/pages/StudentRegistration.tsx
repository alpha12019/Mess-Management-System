import React, { useState } from 'react';

interface RegistrationForm {
  mess: string;
  transactionNo: string;
  amount: string;
  image: File | null;
  paymentDate: string;
  startDate: string;
  remark: string;
}

const StudentRegistration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationForm>({
    mess: '',
    transactionNo: '',
    amount: '0',
    image: null,
    paymentDate: '',
    startDate: '',
    remark: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl text-blue-600 text-center mb-6">Registration Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Select Mess */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Select Mess <span className="text-red-500">*</span>
            </label>
            <select
              name="mess"
              value={formData.mess}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-gray-500"
              required
            >
              <option value="">Choose Mess</option>
              <option value="mess1">Mess 1</option>
              <option value="mess2">Mess 2</option>
            </select>
          </div>

          {/* Transaction No */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Transaction No <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="transactionNo"
              value={formData.transactionNo}
              onChange={handleInputChange}
              placeholder="Transaction No"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Amount <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded"
              accept="image/*"
              required
            />
          </div>

          {/* Payment Date */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Payment Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Remark */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Remark
            </label>
            <textarea
              name="remark"
              value={formData.remark}
              onChange={handleInputChange}
              placeholder="Add any remarks"
              className="w-full p-2 border border-gray-300 rounded h-24 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration; 