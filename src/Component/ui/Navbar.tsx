
const Navbar = () => {
  return (
    <div className="w-full h-[70px] text-white">
      <div className="px-28 py-6 flex flex-row w-full justify-between items-center">
        <h2 className="text-2xl font-semibold ">Shabari K S</h2>
        <div className="flex felx-row gap-5">
            <a href="/" >Home</a>
            <a href="/about" >About</a>
            <a href="/projects" >Projects</a>
            <a href="/contact" >Contact Me</a>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
