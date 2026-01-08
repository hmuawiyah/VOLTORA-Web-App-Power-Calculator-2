import Link from "next/link"
import { Button } from "./ui/button"
import { FaGithub } from "react-icons/fa"
import Setting from "./Setting"


const Navbar = () => {
  return (
    <div className="fixed inset-0 flex justify-between items-center h-13 bg-white w-full px-5 md:px-20 xl:px-40 z-50">
      <span className="text-xl font-bold uppercase">Voltora</span>
      <Setting />
      {/* <Link href="/" target="_blank">
        <Button variant={'primary'} className="flex items-center gap-2"><FaGithub/> Github</Button>
      </Link> */}
      {/* <span>Github</span> */}
    </div>
  )
}

export default Navbar
