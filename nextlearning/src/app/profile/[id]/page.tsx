import React from 'react';

function UserProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="mt-4">
          <span className="text-sm font-medium text-gray-500">Your ID:</span>
          <p className="text-xl font-semibold text-blue-600 mt-1 break-words">
            {params.id}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;