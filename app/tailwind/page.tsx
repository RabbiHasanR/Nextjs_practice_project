import Image from "next/image"

export default function Page(){
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 
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
                        <h1 className="text-black font-semibold dark:text-gray-300">Learn with AGL</h1>
                        <p className="text-body text-gray-500 font-medium dark:text-gray-400">YouTube Channel</p>
                    </div>
                    <button className="btn btn-purple">Visit Now</button> <button className="ml-2 btn btn-green">Website</button>
                
                    
                </div>
            </div>
        </div>
    )
}