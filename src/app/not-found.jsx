import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <div className='h-screen flex items-center'>
        <h2 className="text2">Not Fount Page 404</h2>
        <Link href="/">Go Back to Home</Link>
      </div>
    </div>
  );
}
