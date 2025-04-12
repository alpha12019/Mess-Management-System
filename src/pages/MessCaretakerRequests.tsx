import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface UpdatePaymentRequest {
  studentId: string;
  transactionNo: string;
  image: string;
  amount: number;
  paymentDate: string;
  remark: string;
}

interface RegistrationRequest {
  studentId: string;
  transactionNo: string;
  image: string;
  amount: number;
  startDate: string;
  paymentDate: string;
  remark: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface DeregistrationRequest {
  studentId: string;
  remark: string;
  status: 'pending' | 'approved' | 'rejected';
}

type RequestType = 'registration' | 'deregistration' | 'update';

const MessCaretakerRequests: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RequestType>('update');
  const [updateRequests] = useState<UpdatePaymentRequest[]>([
    { studentId: '21BCS067', transactionNo: '3457', image: 'Payment', amount: 5000, paymentDate: '2025-01-02', remark: '' },
    { studentId: '21BCS067', transactionNo: '3457', image: 'Payment', amount: 34567, paymentDate: '2025-01-14', remark: '' },
    { studentId: '21BCS067', transactionNo: '12233400', image: 'Payment', amount: 5000, paymentDate: '2025-01-23', remark: '' },
    { studentId: '22BCS183', transactionNo: '12233400', image: 'Payment', amount: 600, paymentDate: '2025-01-09', remark: '' },
    { studentId: '22BCS183', transactionNo: '12233400', image: 'Payment', amount: 5000, paymentDate: '2025-01-29', remark: '' },
    { studentId: '22BCS183', transactionNo: '12233400', image: 'Payment', amount: 5000, paymentDate: '2025-01-29', remark: '' },
    { studentId: '22BCS183', transactionNo: '23456', image: 'Payment', amount: 234, paymentDate: '2025-01-24', remark: '' },
    { studentId: '22BCS183', transactionNo: '23456', image: 'Payment', amount: 234, paymentDate: '2025-01-24', remark: '' }
  ]);

  const [requests] = useState<RegistrationRequest[]>([
    {
      studentId: '22BCS183',
      transactionNo: '345678',
      image: 'Student',
      amount: 10000,
      startDate: '2025-01-05',
      paymentDate: '2025-01-01',
      remark: 'NA',
      status: 'pending'
    },
    // Repeat the same data 9 more times to match the image
    ...Array(9).fill({
      studentId: '22BCS183',
      transactionNo: '345678',
      image: 'Student',
      amount: 10000,
      startDate: '2025-01-10',
      paymentDate: '2025-01-01',
      remark: 'NA',
      status: 'pending'
    })
  ]);

  const [deregistrationRequests] = useState<DeregistrationRequest[]>([
    { studentId: '21BCS167', remark: 'dont want to eat anymore ...', status: 'pending' },
    { studentId: '21BCS267', remark: 'dfe', status: 'pending' },
    { studentId: '22BCS105', remark: 'xcvgbhnj', status: 'pending' },
    { studentId: '22BCS180', remark: 'zsfgh', status: 'pending' }
  ]);

  const renderContent = () => {
    switch (activeTab) {
      case 'update':
        return (
          <>
            <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
              Update Payment Requests
            </h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Transaction No
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Payment Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Remark
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Accept/Reject
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {updateRequests.map((request, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {request.studentId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {request.transactionNo}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 underline">
                          <a href="#">{request.image}</a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {request.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {request.paymentDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <input
                            type="text"
                            placeholder="Enter remark"
                            className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
                            value={request.remark}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                              Accept
                            </button>
                            <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      case 'deregistration':
        return (
          <>
            <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
              Deregistration Requests
            </h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Remark
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {deregistrationRequests.map((request, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {request.studentId}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {request.remark}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                              Accept
                            </button>
                            <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      case 'registration':
        return (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction No
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Remark
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Accept/Reject
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {requests.map((request, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {request.studentId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {request.transactionNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 underline">
                        <a href="#">{request.image}</a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {request.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {request.startDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {request.paymentDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {request.remark}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {request.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                            Accept
                          </button>
                          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('registration')}
            className={`pb-4 px-1 ${
              activeTab === 'registration'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Registration Requests
          </button>
          <button
            onClick={() => setActiveTab('deregistration')}
            className={`pb-4 px-1 ${
              activeTab === 'deregistration'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Deregistration Requests
          </button>
          <button
            onClick={() => setActiveTab('update')}
            className={`pb-4 px-1 ${
              activeTab === 'update'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Update Requests
          </button>
        </nav>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default MessCaretakerRequests; 