import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-black-400 text-xs shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full">
        <div className="flex justify-between gap-y-10 max-w-screen-2xl 
        px-6 xs:px-8 sm:px-16 max-md:flex-col py-5 mx-auto">
          <p>Copywrite © 2023 Mukhammad Zulpukarov | All Rights Reserved</p>
          <div className="flex gap-x-5">
              <Link href='#'>Terms & Conditions</Link>
              <Link href='#'>Privacy Policy</Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer