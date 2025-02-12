
const Experience = () => {
  return (    
    <div>
        <h1 className="text-4xl font-bold text-white mt-8 mb-4">Experience</h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023 - December 2023</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Streamlit Campus Ambassador </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Promoted Streamlit within the student community by organizing workshops, hackathons, and hands-on sessions. Engaged with developers to showcase Streamlit's capabilities in building data-driven applications effortlessly. Provided mentorship, created content, and collaborated with peers to enhance adoption and awareness of Streamlit.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2023 - August 2024</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">JSW Steel OHC Project</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Developed and maintained the Occupational Health Center (OHC) management system for JSW Steel. Designed a robust application to streamline health record management, appointment scheduling, and medical reporting. Implemented automation features to enhance efficiency and ensure compliance with industry standards.</p>
                <a href="#" className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                    Learn more 
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </li>
        </ol>

    </div>
  )
}

export default Experience
