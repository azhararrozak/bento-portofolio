import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Build with ❤️ Azhar Arrozak. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
