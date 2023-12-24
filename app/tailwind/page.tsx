import Image from "next/image"

export default function Page(){
    return (
        // <div className="h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        //     <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 
        //     sm:flex sm:items-center sm:py-2 dark:bg-gray-800 sm:space-x-4 sm:dark:hover:bg-gray-700">
        //         <Image
        //         src='/hero-mobile.png'
        //         alt="hero mobile"
        //         width={150}
        //         height={50}
        //         className="mx-auto sm:mx-0 sm:shrink-0 transform hover:scale-105 duration-500"
        //         />

        //         <div className="text-center space-y-2 sm:text-left">
        //             <div className="space-y-0.5">
        //                 <h1 className="text-black font-semibold dark:text-gray-300">Learn with AGL</h1>
        //                 <p className="text-body text-gray-500 font-medium dark:text-gray-400">YouTube Channel</p>
        //             </div>
        //             <button className="btn btn-purple">Visit Now</button> <button className="ml-2 btn btn-green">Website</button>
                
                    
        //         </div>
        //     </div>
        // </div>
        <TestGrid />
    )
}



function TestGrid() {
    return (

        <div className="sm:grid-layout">
            <div className="h-[400px] sm:main-content bg-slate-400">
                hello
            </div>
            <div className="h-[400px] sm:main-content bg-slate-500">
                hello One
            </div>
            <div className="h-[400px] sm:main-content bg-slate-600">
                hello Two
            </div>
            <div className="h-[400px] sm:main-content bg-slate-700">
                hello Three
            </div>
            <div className="h-[400px] sm:main-content bg-slate-800">
                hello Four
            </div>
            <div className="h-[200px] sm:main-footer bg-black text-white">
                Footer
            </div>
        </div>

        // <div className="flex-container grid-container">
        //     <div>1</div> 
        //     <div>2</div>
        //     <div>3</div>
        //     <div>4</div>
        //     <div>5</div>
        //     <div>6</div>
        //     <div>7</div>
        //     <div>8</div>
        // </div>

        // <div className="flex-container grid-container">
        //     {/* <div className="header">HEADER</div>
        //     <div className="menu">MENU</div>
        //     <div className="content">CONTENT</div>
        //     <div className="footer">FOOTER</div> */}


        //     <div className="img normal">1</div>
        //     <div className="img normal">2</div>
        //     <div className="img big">3</div>
        //     <div className="img normal">4</div>
        //     <div className="img horizontal">5</div>
        //     <div className="img normal">6</div>
        //     <div className="img vertical">7</div>
        //     <div className="img normal">8</div>
        //     <div className="img big">9</div>
        //     <div className="img normal">10</div>
        // </div>

        // flexbox 

    //     <div className="container">
    //   {/* <!-- using float --> */}
    //   <h2>USING FLOAT</h2>
    //   <div className="float">
    //     <main>
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry.
    //     </main>
    //     {/* <!-- <main>
    //       <img src="./images/logo.png" /> Lorem Ipsum is simply dummy text of
    //       the printing and typesetting industry.
    //     </main> --> */}
    //     <section>
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry.
    //     </section>
    //     <section>
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry.
    //     </section>
    //   </div>

    //   {/* <!-- using flexbox --> */}
    //   <h2>USING FLEXBOX</h2>
    //   <div className="flexbox">
    //     <main>
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry.
    //     </main>
    //     <section>
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum is simply dummy text of the printing and
    //       typesetting industry. Lorem Ipsum is simply dummy text of the printing
    //       and typesetting industry.
    //     </section>
    //     <section>
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry.
    //     </section>
    //   </div>
    // </div>
    );
}