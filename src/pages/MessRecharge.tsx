import React, { useState } from 'react';

const MessRecharge: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [transactionNo, setTransactionNo] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [image, setImage] = useState<File | null>(null);
  const [date, setDate] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  // Predefined amounts for quick selection
  const quickAmounts = [1000, 2000, 3500, 5000, 10000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">Your mess account has been recharged with ₹{amount}.</p>
          
          <div className="border-t border-b border-gray-200 py-4 my-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Amount</span>
              <span className="font-semibold">₹{amount}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Transaction ID</span>
              <span className="font-semibold">{transactionNo}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date</span>
              <span className="font-semibold">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/mess/dashboard" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center">
              Back to Dashboard
            </a>
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-bold text-blue-600 text-center mb-6">Recharge Mess Account</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Amount Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Amount <span className="text-red-500">*</span>
            </label>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`py-2 px-4 border rounded-lg text-center ${
                    amount === amt.toString() 
                      ? 'bg-blue-50 border-blue-500 text-blue-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setAmount(amt.toString())}
                >
                  ₹{amt.toLocaleString()}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500">₹</span>
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter custom amount"
                className="block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          
          {/* Payment Method */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method <span className="text-red-500">*</span>
            </label>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className={`p-3 border rounded-lg text-center flex flex-col items-center ${
                  paymentMethod === 'upi' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setPaymentMethod('upi')}
              >
                <span className="text-xl mb-1">📱</span>
                <span className="text-sm">UPI</span>
              </button>
              
              <button
                type="button"
                className={`p-3 border rounded-lg text-center flex flex-col items-center ${
                  paymentMethod === 'netbanking' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setPaymentMethod('netbanking')}
              >
                <span className="text-xl mb-1">🏦</span>
                <span className="text-sm">Net Banking</span>
              </button>
              
              <button
                type="button"
                className={`p-3 border rounded-lg text-center flex flex-col items-center ${
                  paymentMethod === 'cash' 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setPaymentMethod('cash')}
              >
                <span className="text-xl mb-1">💵</span>
                <span className="text-sm">Cash</span>
              </button>
            </div>
          </div>
          
          {/* Transaction Details */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Transaction No <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={transactionNo}
              onChange={(e) => setTransactionNo(e.target.value)}
              placeholder="Enter transaction number"
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          {/* Payment Proof */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Proof <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              required
            />
            <p className="mt-1 text-xs text-gray-500">Upload screenshot of payment (max 2MB)</p>
          </div>
          
          {/* Payment Date */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
              loading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Submit Payment'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessRecharge; 