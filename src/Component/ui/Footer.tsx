const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center text-gray-400 mb-10">
        © 2025 Shabari K S | Built in India
        <div className="flex">
            Crafted with ❤️ using Vite. Check out my projects on
            <a 
                className="ml-1  text-gray-400 decoration-2 hover:text-gray-200 hover:underline focus:underline focus:outline-none focus:text-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-500 dark:hover:text-gray-200 dark:focus:text-gray-100" 
                href="https://github.com/Shabari-K-S"
            >
                GitHub
            </a>.
        </div>
    </div>
  )
}

export default Footer
