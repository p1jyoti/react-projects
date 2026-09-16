import React from 'react'

const Loader = () => {
    return (
        <div>
            <div className="flex  p-8 justify-center items-center h-[112]">
                <div className="text-center space-y-6">
                    <div
                        className="w-24 h-24 border-4 border-t-[#00e600] border-gray-700 rounded-full animate-spin mx-auto"
                    ></div>
                    <div
                        className="text-white font-semibold text-4xl opacity-90 animate-fadeIn"
                    >
                        Almost There...
                    </div>
                    <div className="text-white text-sm opacity-80 animate-fadeIn">
                        <p>We're getting everything ready for you...</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Loader