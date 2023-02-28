import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4  ">
      <div className="container mx-auto px-6 flex justify-between items-center ">
        <Link href="/" className="text-gray-300 hover:text-white hover:text-shadow font-bold text-2xl lg:text-4xl">
            Logo
        
        </Link>
        <ul className="flex items-center ">
          <li>
            <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded">
                About
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded">
                Blog
              
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded">
                Contact
              
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
