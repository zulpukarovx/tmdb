import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/outline'
import SearchForm from './SearchForm'


const Navbar = () => {
  return (
    <nav className='z-50 w-full
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-7'>
        <div className='flex justify-between mx-auto w-full max-w-screen-2xl px-6
        xs:px-8 sm:px-16'>
            <Link href='/' className='font-bold'>Home</Link>
            <Bars3Icon className='block md:hidden size-8' />
            <ul className='flex justify-center gap-x-3
            max-md:hidden md:gap-x-10'>
                <li className='text-gradient_blue-purple font-bold'>
                    <Link href="favorites">
                        Favorites
                    </Link>
                </li>
                <li className='font-normal'>
                    <Link href="movies">
                        Movies
                    </Link>
                </li>
                <li className='font-normal'>
                    <Link href="tvshows">
                        TV shows
                    </Link>
                </li>
            </ul>
        </div>
        <div className='flex justify-end mx-auto w-full max-w-screen-2xl pt-4 px-6
        xs:px-8 sm:px-16'>
            <SearchForm />
        </div>
    </nav>
  )
}

export default Navbar