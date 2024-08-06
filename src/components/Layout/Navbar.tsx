import { Logo } from "@/components/Elements/Logo"
import { NavMenu } from "@/components/Fragments/NavMenu"

const Navbar = () => {
return (<div className="fixed z-40 top-0 left-0 right-0 bg-blue-800 ">
    <header className="container flex justify-between items-center py-2">
      <Logo />
      <NavMenu />
    </header>
  </div>)
}

export { Navbar }
