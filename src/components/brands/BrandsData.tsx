
import React from 'react';
import BrandLogo from './BrandLogo';
import BrandLogoRow from './BrandLogoRow';

const BrandsData: React.FC = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
  {/* First Row */}
  <BrandLogo className="text-2xl font-bold p-2">SNITCH</BrandLogo>
  <BrandLogo className="text-2xl text-red-700 px-2 py-1 rounded p-2">zepto</BrandLogo>
  <BrandLogo className="text-2xl text-blue-950 font-semibold font-serif p-2">HEALTHKART</BrandLogo>
  <BrandLogo className="text-2xl text-red-700 px-2 py-1 rounded p-2">sleepycat</BrandLogo>
  <BrandLogo className="text-2xl font-bold p-2">mokobara</BrandLogo>

  {/* Second Row */}
  <BrandLogo className="text-xl font-bold p-2">Dꓮ Daily Objects</BrandLogo>
  <BrandLogo className="text-2xl bg-red-600 text-white px-2 py-1 rounded p-2">Prestige</BrandLogo>
  <BrandLogo className="text-2xl font-semibold font-serif p-2">boAt</BrandLogo>
  <BrandLogo className="text-2xl font-semibold font-serif p-2">CROSSBEATS</BrandLogo>
  <BrandLogo className="text-2xl bg-blue-600 text-white p-2">Sangeetha</BrandLogo>

  {/* Third Row */}
  <BrandLogo className="text-xl font-bold text-navy-600 p-2">THE SLEEP COMPANY</BrandLogo>
  <BrandLogo className="p-2">
    <div className="flex items-center space-x-1">
      <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">M</div>
      <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">N</div>
      <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">S</div>
    </div>
  </BrandLogo>
  <BrandLogo className="text-2xl bg-black text-pink-500 px-4 py-1 font-bold p-2">SOLESEARCH</BrandLogo>
  <BrandLogo className="text-2xl font-bold p-2">गली LABS</BrandLogo>
  <BrandLogo className="text-2xl font-bold p-2">masaba<span className="text-red-600">●</span></BrandLogo>

  {/* Fourth Row */}
  <BrandLogo className="text-2xl font-bold p-2">BAJAAO</BrandLogo>
  <BrandLogo className="text-2xl font-bold text-red-600 p-2">CELLBELL</BrandLogo>
  <BrandLogo className="text-2xl font-bold text-green-700 p-2">GREEN<sup>®</sup> SOUL</BrandLogo>
  <BrandLogo className="text-2xl font-bold p-2">SETU</BrandLogo>
  <BrandLogo className="text-2xl font-serif p-2">JUST IN TIME</BrandLogo>
</div>

  );
};

export default BrandsData;
