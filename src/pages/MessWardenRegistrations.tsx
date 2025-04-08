import React, { useState } from 'react';

interface Registration {
  name: string;
  rollNo: string;
  program: string;
  status: string;
  mess: string;
}

const initialRegistrations: Registration[] = [
  {
    name: 'BIKRAM SINGH SOLANKI',
    rollNo: '1713601',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'CHHOTILAL PRAJAPATI',
    rollNo: '1713602',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'PERUMALLA SATESH KUMAR',
    rollNo: '1713604',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'ANUBHAV TIWARI',
    rollNo: '1713605',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'PARUL SAINI',
    rollNo: '1716502',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'RIYA',
    rollNo: '1716503',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'AMIT KUMAR SINGH',
    rollNo: '1716601',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'BHAGYASHREE BEHERA',
    rollNo: '1716602',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'GARGI BHATTACHARYA',
    rollNo: '1716603',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'ASHUTOSH TRIPATHI',
    rollNo: '1721601',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'RISHI KANT',
    rollNo: '1722603',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  },
  {
    name: 'KUMAR MAHARSHI',
    rollNo: '1723602',
    program: 'Phd',
    status: 'Deregistered',
    mess: 'mess2'
  }
];

const MessWardenRegistrations: React.FC = () => {
  const [searchRollNumber, setSearchRollNumber] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [programFilter, setProgramFilter] = useState('All');
  const [messFilter, setMessFilter] = useState('All');
  const [registrations, setRegistrations] = useState<Registration[]>(initialRegistrations);

  const handleSearch = () => {
    let filtered = [...initialRegistrations];

    // Apply roll number search
    if (searchRollNumber) {
      filtered = filtered.filter(reg => 
        reg.rollNo.toLowerCase().includes(searchRollNumber.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== 'All') {
      filtered = filtered.filter(reg => reg.status === statusFilter);
    }

    // Apply program filter
    if (programFilter !== 'All') {
      filtered = filtered.filter(reg => reg.program === programFilter);
    }

    // Apply mess filter
    if (messFilter !== 'All') {
      filtered = filtered.filter(reg => reg.mess === messFilter);
    }

    setRegistrations(filtered);
  };

  const handleApplyFilters = () => {
    handleSearch();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-8">
          View Mess Registrations
        </h1>

        {/* Search and Filters */}
        <div className="mb-6">
          {/* Roll Number Search */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search by Roll Number</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Roll Number"
                value={searchRollNumber}
                onChange={(e) => setSearchRollNumber(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Search
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="All">All</option>
                <option value="Registered">Registered</option>
                <option value="Deregistered">Deregistered</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Program</label>
              <select
                value={programFilter}
                onChange={(e) => setProgramFilter(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="All">All</option>
                <option value="Phd">PhD</option>
                <option value="MTech">M.Tech</option>
                <option value="BTech">B.Tech</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Mess</label>
              <select
                value={messFilter}
                onChange={(e) => setMessFilter(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="All">All</option>
                <option value="mess1">Mess 1</option>
                <option value="mess2">Mess 2</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleApplyFilters}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Apply Filters
          </button>
        </div>

        {/* Registrations Table */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Roll No
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Program
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mess
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {registrations.map((registration) => (
                <tr key={registration.rollNo}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {registration.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {registration.rollNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {registration.program}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                      registration.status === 'Registered' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {registration.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {registration.mess}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MessWardenRegistrations; 