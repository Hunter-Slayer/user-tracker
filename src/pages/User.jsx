import React, { useState } from 'react';

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
      <div className="flex justify-end items-center p-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 shadow-md px-4 py-2 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold text-white transition-colors duration-200 ease-in-out focus:outline-none"
          onClick={openModal}
        >
          Add New User
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="relative bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg w-full max-w-md">
            <button
              className="top-3 right-3 absolute text-gray-500 hover:text-gray-700 dark:hover:text-gray-400 dark:text-gray-300"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="mb-4 font-semibold text-gray-900 text-xl dark:text-white">Add New User</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-gray-300 dark:border-gray-600 dark:bg-gray-900 p-2 border rounded-lg w-full dark:text-gray-100"
                  placeholder="Enter user name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="border-gray-300 dark:border-gray-600 dark:bg-gray-900 p-2 border rounded-lg w-full dark:text-gray-100"
                  placeholder="Enter user address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-gray-300 dark:border-gray-600 dark:bg-gray-900 p-2 border rounded-lg w-full dark:text-gray-100"
                  placeholder="Enter user email"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <table className="rtl:text-right w-full text-gray-500 text-left text-md dark:text-gray-400">
        <thead className="bg-gray-50 dark:bg-gray-700 text-gray-700 text-xs dark:text-gray-400 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Address</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800 odd:bg-white even:bg-gray-50 border-b text-md">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-slate-800 dark:text-slate-200 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
