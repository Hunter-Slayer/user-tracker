const Dashboard = () => {
    return (
      <div className="flex justify-center items-center p-6">
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          
          <div className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow p-6 border rounded-lg">
            <h5 className="mb-2 font-bold text-2xl text-gray-900 dark:text-white">Active User</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Details about active users.</p>
            <a href="#" className="inline-flex items-center bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 px-3 py-2 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-center text-sm text-white focus:outline-none">
              View Active Users
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
  
          <div className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow p-6 border rounded-lg">
            <h5 className="mb-2 font-bold text-2xl text-gray-900 dark:text-white">Inactive User</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Details about inactive users.</p>
            <a href="#" className="inline-flex items-center bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 px-3 py-2 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-center text-sm text-white focus:outline-none">
              View Inactive Users
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
  
          <div className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow p-6 border rounded-lg">
            <h5 className="mb-2 font-bold text-2xl text-gray-900 dark:text-white">All User</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Details about all users.</p>
            <a href="#" className="inline-flex items-center bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 px-3 py-2 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-center text-sm text-white focus:outline-none">
              View All Users
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  