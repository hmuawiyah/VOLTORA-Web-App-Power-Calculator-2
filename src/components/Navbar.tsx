import Link from "next/link"
import { Button } from "./ui/button"
import { FaGithub } from "react-icons/fa"
import Setting from "./Setting"

const Navbar = () => {
  return (
    <div className="fixed inset-0 flex justify-between items-center h-13 border-b bg-card w-full px-5 md:px-20 xl:px-40 z-50">
      <Link href={"/"}> <Button variant={"link"} className="text-xl font-bold uppercase"> Voltora </Button> </Link>
      <Setting />
    </div>
  )
}

export default Navbar
