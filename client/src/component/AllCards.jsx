'use client'
import React, { useState } from 'react';
import Card from './Card';
import { useRouter } from 'next/navigation';
import { searchingData } from '@/lib/api/data';

const AllCards = ({filterData}) => {

    const BaseUrl = process.env.NEXT_PUBLIC_SERVER_URL

    const [s, setS] = useState('')
    const [sort, setSort] = useState('normal')
    const [cat, setCategory] = useState('')
    const router = useRouter()
    console.log(sort)

    const a = () => {
        console.log(s)
        if(!s){
            router.push(`/browse`)
        }else{
            router.push(`/browse?search=${s}`)
        }
    }
    console.log(filterData)

    let finalData = [...filterData]

    if (cat && cat !== "all") {
      finalData = finalData.filter(v => v.category === cat);
    }


    if(sort==='high'){
      finalData = [...filterData].sort((a,b) => Number(b.price) - Number(a.price))
    }
    else if(sort==='low'){
      finalData = [...filterData].sort((a,b) => Number(a.price) - Number(b.price))
    }




    return (
        <div className='max-w-[80%] mx-auto'>
            <div className="flex flex-col md:flex-row gap-4 mb-8">

  {/* Search */}
  <div className="flex flex-1">
    <input
      type="text"
      onChange={(e) => setS(e.target.value)}
      placeholder="Search events..."
      className="w-full px-4 py-2 rounded-l-lg border border-gray-700 bg-[#111827] text-white outline-none"
    />

    <button onClick={a}
      className="px-5 py-2 bg-linear-to-r from-cyan-500 to-blue-700 hover:bg-blue-700 text-white rounded-r-lg transition"
    >
      Search
    </button>
  </div>

  {/* Category Filter */}
  <select onChange={(e) => setCategory(e.target.value)}
  className="px-4 py-2 rounded-lg border border-gray-700 bg-[#111827] text-white">
    <option value="all">All Categories</option>
    <option value="tech">Tech</option>
    <option value="music">Music</option>
    <option value="sports">Sports</option>
  </select>

  {/* Sort */}
  <select onChange={(e) => setSort(e.target.value)}
  className="px-4 py-2 rounded-lg border border-gray-700 bg-[#111827] text-white">
    <option value="">Sort By</option>
    <option value="low">Price: Low to High</option>
    <option value="high">Price: High to Low</option>
    <option value="normal">Default</option>
  </select>

</div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    finalData.map(v => <Card key={v._id} event={v}></Card>)
                }
            </div>
        </div>
    );
};

export default AllCards;