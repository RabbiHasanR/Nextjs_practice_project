import Image from "next/image"

export default function Page(){
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 
            sm:flex sm:items-center sm:py-2 dark:bg-gray-800 sm:space-x-4 sm:dark:hover:bg-gray-700">
                <Image
                src='/hero-mobile.png'
                alt="hero mobile"
                width={150}
                height={50}
                className="mx-auto sm:mx-0 sm:shrink-0 transform hover:scale-105 duration-500"
                />

                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold dark:text-gray-300">Learn with AGL</p>
                        <p className="text-gray-500 font-medium dark:text-gray-400">YouTube Channel</p>
                    </div>
                    <button className="px-4 py-1 border border-purple-200
                    text-purple-600 font-semibold rounded-full hover:text-white
                    hover:bg-purple-500 hover:border-transparent focus:outline-none
                    focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:text-purple-500">Subscribe</button>
                </div>
            </div>
        </div>
    )
}