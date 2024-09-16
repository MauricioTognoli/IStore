'use client'
import React, { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import SigninAlert from '@/components/SigninAlert';

const UserProfile: React.FC = () => {
  const { isLogged, user } = useContext(UserContext);

  return (
    <div className="h-full">
      {!isLogged ? (
        <SigninAlert />
      ) : (
        <div className="mt-36 mx-auto p-4 shadow-md rounded-lg ">
          <h1 className="text-4xl font-bold text-center mb-10">User Profile</h1>
          <div className="mb-4 rounded-lg p-20  m-5 border border-blue-700">
            <h2 className="text-2xl font-semibold">Name:</h2>
            <p className='text-xl mt-2 text-gray-400'>{user?.user?.name}</p>
          </div>
          <div className="mb-4 rounded-lg p-20 bg-neutral-800 m-5 border border-blue-700">
            <h2 className="text-2xl font-semibold">Email:</h2>
            <p className='text-xl mt-2 text-gray-400'>{user?.user?.email}</p>
          </div>
          <div className="mb-4 rounded-lg p-20 m-5 border border-blue-700">
            <h2 className="text-2xl font-semibold text-gray-400">Phone:</h2>
            <p className='text-xl mt-2'>{user?.user?.phone}</p>
          </div>
          <div className="mb-4 rounded-lg p-20 bg-neutral-800 m-5 border border-blue-700">
            <h2 className="text-2xl font-semibold text-gray-400">Address:</h2>
            <p className='text-xl mt-2'>{user?.user?.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;