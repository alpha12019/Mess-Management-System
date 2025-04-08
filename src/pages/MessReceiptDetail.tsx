import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MessReceiptDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Mock receipt data - in a real app, you would fetch this based on the id
  const receipt = {
    id: id || 'TXN123456789',
    date: '2023-10-15T10:30:00',
    amount: 3750,
    method: 'UPI',
    status: 'Success',
    month: 'October',
    year: 2023,
    paidBy: 'John Doe',
    rollNumber: 'B19CS001',
    transactionId: 'UPI/456123/789456',
    upiId: 'johndoe@okbank',
    receiptNumber: 'MESS-REC-2023-001',
    billDetails: [
      { item: 'Basic Mess Fee', amount: 3000 },
      { item: 'Extra Items', amount: 750 },
    ],
    verifiedBy: 'Mess Manager',
    remarks: 'Payment for October 2023 mess bill',
  };

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date(receipt.date).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 print:shadow-none">
        {/* Header with back button */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <button 
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          
          <button 
            onClick={handlePrint}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Receipt
          </button>
        </div>
        
        {/* Receipt Header */}
        <div className="text-center mb-8 border-b pb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">IIIT Jabalpur Mess</h1>
          <p className="text-gray-600 mb-1">Payment Receipt</p>
          <p className="text-sm text-gray-500">{receipt.receiptNumber}</p>
        </div>
        
        {/* Receipt Status Badge */}
        <div className="flex justify-center mb-6">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            receipt.status === 'Success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <span className="mr-1.5">
              {receipt.status === 'Success' ? (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </span>
            {receipt.status}
          </span>
        </div>
        
        {/* Receipt Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Payment Information</h3>
            
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">Receipt ID</p>
                <p className="font-medium">{receipt.id}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-medium">{formattedDate}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Payment Method</p>
                <p className="font-medium">{receipt.method}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Transaction ID</p>
                <p className="font-medium">{receipt.transactionId}</p>
              </div>
              
              {receipt.method === 'UPI' && (
                <div>
                  <p className="text-sm text-gray-500">UPI ID</p>
                  <p className="font-medium">{receipt.upiId}</p>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Student Information</h3>
            
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{receipt.paidBy}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Roll Number</p>
                <p className="font-medium">{receipt.rollNumber}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Month/Year</p>
                <p className="font-medium">{receipt.month} {receipt.year}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Verified By</p>
                <p className="font-medium">{receipt.verifiedBy}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bill Details */}
        <div className="mb-8">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Bill Details</h3>
          
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {receipt.billDetails.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.item}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">
                      ₹{item.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Total
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                    ₹{receipt.amount.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
        {/* Remarks */}
        {receipt.remarks && (
          <div className="mb-8">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Remarks</h3>
            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">{receipt.remarks}</p>
          </div>
        )}
        
        {/* QR Code and Signature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="flex justify-center items-center">
            <div className="bg-gray-100 p-4 rounded-lg w-32 h-32 flex items-center justify-center">
              <span className="text-gray-400 text-xs text-center">QR Code Placeholder</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-end">
            <div className="h-12 mb-2 border-b border-gray-800 w-48"></div>
            <p className="text-sm font-medium">Authorized Signature</p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-6 pt-6 border-t">
          <p>This is a computer-generated receipt and does not require a physical signature.</p>
          <p className="mt-1">For any queries, please contact the Mess Office.</p>
        </div>
      </div>
    </div>
  );
};

export default MessReceiptDetail; 