import React from 'react';

const CountryFlags = () => {
  const countries = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'South Africa', flag: '🇿🇦' }
  ];

  return (
    <div className="bg-[#002B5B] text-white fixed top-0 left-0 right-0 z-[60]">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {countries.map((country) => (
              <div
                key={country.name}
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="text-lg">{country.flag}</span>
                <span className="text-sm">{country.name}</span>
              </div>
            ))}
          </div>
          <div id="google_translate_element"></div>
        </div>
      </div>
    </div>
  );
};

export default CountryFlags;