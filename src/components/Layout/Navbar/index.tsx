import { Logo } from "@/components/Elements/Logo"
import { NavMenu } from "@/components/Fragments/NavMenu"

const Navbar = () => {
return (<div className="fixed z-40 top-0 left-0 right-0">
    <header className="container bg-blue-800 flex shadow justify-between items-center py-2">
      <Logo />
      <NavMenu />
    </header>
  </div>)
}

export { Navbar }
