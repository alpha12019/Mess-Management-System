import React from 'react';
import { 
  ArrowTrendingUpIcon, 
  ArrowTrendingDownIcon, 
  CurrencyDollarIcon, 
  UsersIcon, 
  ShoppingBagIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement 
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement
);

const Dashboard: React.FC = () => {
  // Sample data for stats
  const stats = [
    { 
      title: 'Total Revenue', 
      value: '₹2,45,235', 
      change: '+12.5%', 
      isPositive: true,
      icon: CurrencyDollarIcon,
      iconBg: 'bg-blue-100',
      iconColor: 'text-primary' 
    },
    { 
      title: 'Active Students', 
      value: '1,245', 
      change: '+8.2%', 
      isPositive: true,
      icon: UsersIcon,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600' 
    },
    { 
      title: 'Meals Served', 
      value: '3,485', 
      change: '+15.5%', 
      isPositive: true,
      icon: ShoppingBagIcon,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600' 
    },
    { 
      title: 'Pending Requests', 
      value: '12', 
      change: '-5.2%', 
      isPositive: true,
      icon: ClipboardDocumentCheckIcon,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600' 
    },
  ];

  // Line chart data
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Mess Revenue',
        data: [125000, 135000, 128000, 142000, 138000, 145000, 150000, 155000, 153000, 160000, 162000, 168000],
        borderColor: '#3584F5',
        backgroundColor: 'rgba(53, 132, 245, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Bar chart data
  const ordersData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Meals Served',
        data: [450, 480, 520, 510, 490, 380, 350],
        backgroundColor: '#3584F5',
        borderRadius: 6,
      },
    ],
  };

  // Doughnut chart data
  const customerData = {
    labels: ['Regular', 'Special Diet', 'Guest'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ['#3584F5', '#4CAF50', '#F44336'],
        borderWidth: 0,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function(value: any) {
            return '$' + value + 'k';
          },
        },
        grid: {
          display: true,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: true,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    cutout: '70%',
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark">Mess Dashboard</h1>
        <p className="text-gray-500">Welcome back, Ankit! Here's what's happening with your mess today.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card flex items-start">
            <div className={`p-3 rounded-lg ${stat.iconBg} ${stat.iconColor} mr-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <div className="flex items-center mt-1">
                {stat.isPositive ? (
                  <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowTrendingDownIcon className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm ml-1 ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="card col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Monthly Revenue Overview</h2>
            <select className="p-2 border rounded-lg text-sm">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-80">
            <Line data={revenueData} options={lineChartOptions} />
          </div>
        </div>
        
        {/* Customer Distribution */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-6">Student Distribution</h2>
          <div className="h-80 flex items-center justify-center">
            <Doughnut data={customerData} options={doughnutOptions} />
          </div>
        </div>
      </div>
      
      {/* Orders Chart */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Weekly Meal Distribution</h2>
          <select className="p-2 border rounded-lg text-sm">
            <option>Current Week</option>
            <option>Previous Week</option>
            <option>Last Month</option>
          </select>
        </div>
        <div className="h-80">
          <Bar data={ordersData} options={barChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 