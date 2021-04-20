import React from 'react';
import Link from 'next/link';
const NotFound = () => {
  return (
    <div>
      My 404 page <br />
      <Link href='/'>Head Home</Link>
    </div>
  );
};

export default NotFound;
