import { paymentData } from '@/lib/api/data';
import { getSerSession } from '@/lib/api/session';
import React from 'react';

const page = async () => {

    const user = await getSerSession()
    const data = await paymentData(user?.email)
    console.log(data)

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white">Payment History</h1>
                        <p className="text-sm text-neutral-400 mt-1">Manage and view all your recent transactions.</p>
                    </div>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm shadow-2xl">
                    <table className="w-full text-sm text-left text-neutral-300">
                        <thead className="text-xs text-neutral-400 uppercase bg-neutral-900 border-b border-neutral-800">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">User Email</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Amount</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Transaction ID</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Payment Status</th>
                                <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Payment Type</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800">
                            {data && data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index} className="hover:bg-neutral-800/40 transition-colors duration-200">
                                        <td className="px-6 py-4 font-medium text-neutral-200 whitespace-nowrap">
                                            {item.userEmail}
                                        </td>
                                        <td className="px-6 py-4 font-bold text-white">
                                            ${item.amount}
                                        </td>
                                        <td className="px-6 py-4 font-mono text-xs text-neutral-400 tracking-tight">
                                            {item.transactionId}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md border ${
                                                item.paymentStatus === 'paid' 
                                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                                    item.paymentStatus === 'paid' ? 'bg-emerald-400' : 'bg-amber-400'
                                                }`}></span>
                                                {item.paymentStatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.paymentType ? (
                                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-medium px-2.5 py-1 rounded-md">
                                                    {item.paymentType}
                                                </span>
                                            ) : (
                                                <span className="text-neutral-500 italic text-xs">N/A</span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-8 text-neutral-500">
                                        No transactions found.
                                    </td>
                                </tr>
                            )} 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;