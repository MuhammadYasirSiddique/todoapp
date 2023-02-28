import Link from 'next/link'

export default function Footer(){
    return(
        
            <footer className="bg-gray-800 py-10  flex-shrink-0">
          <div className="container mx-auto px-6">
            <p className="text-center text-white">
              My Website &copy; {new Date().getFullYear()}. <br/>
              Muhammad Yasir (PIAIC-173738) <br/>
              Blockchain Batch-37 Qtr-2
            </p>
          </div>
        </footer>
        
    );
}