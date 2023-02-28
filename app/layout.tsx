import Navbar from './components/navbar';
import Footer from './components/footer';
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
          <div className='z-5 top-0 sticky'>
            <Navbar />
          </div>
          

          <div className=' '>
            <h1 className='text-3xl font-latin font-bold align-middle text-center bg-slate-400  shadow-md shadow-gray-400 py-10
                           text-7xl font-serif text-blue-700' >
              My To DO Application
            </h1> 
            <br/>
            <main className="flex-grow">{children}</main>
      
            </div>
          <div>
              <h1>
                  <Footer />
              </h1>
          </div>
        </body>
    </html>
  );
}
