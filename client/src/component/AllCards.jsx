import { browseData } from '@/lib/api/data';
import React from 'react';
import Card from './Card';

const AllCards = async () => {

    const data = await browseData()
    console.log(data)

    return (
        <div className='max-w-[80%] mx-auto'>
            <div className="flex flex-col md:flex-row gap-4 mb-8">

  {/* Search */}
  <div className="flex flex-1">
    <input
      type="text"
      placeholder="Search events..."
      className="w-full px-4 py-2 rounded-l-lg border border-gray-700 bg-[#111827] text-white outline-none"
    />

    <button
      className="px-5 py-2 bg-linear-to-r from-cyan-500 to-blue-700 hover:bg-blue-700 text-white rounded-r-lg transition"
    >
      Search
    </button>
  </div>

  {/* Category Filter */}
  <select className="px-4 py-2 rounded-lg border border-gray-700 bg-[#111827] text-white">
    <option value="all">All Categories</option>
    <option value="tech">Tech</option>
    <option value="music">Music</option>
    <option value="sports">Sports</option>
  </select>

  {/* Sort */}
  <select className="px-4 py-2 rounded-lg border border-gray-700 bg-[#111827] text-white">
    <option value="">Sort By</option>
    <option value="lowToHigh">Price: Low to High</option>
    <option value="highToLow">Price: High to Low</option>
    <option value="newest">Newest First</option>
  </select>

</div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    data.map(v => <Card key={v._id} event={v}></Card>)
                }
            </div>
        </div>
    );
};

export default AllCards;