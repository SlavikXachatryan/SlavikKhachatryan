import { NavLink } from "react-router"
import logo from "../../assets/logo.edccbd13 (1).png"
import { nav } from "../../data/routes"
import Container from "../Container"
import Button from "../ui/Button"
import MobileDrawer from "../blocks/MobileDrawer"

export default function Header() {
  return (
    <Container disableYPadding={true}>
        <header className="flex justify-between items-center">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className="lg:flex items-center gap-8 hidden">
                <nav>
                    <ul className="flex gap-12 font-semibold items-center">
                        {
                            nav.map((route,idx) =>(
                                <li key={idx}>
                                    <NavLink className="text-primary/80 hover:text-second transition-all duration-all" to={route.href}>{route.label}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Button>Get Started free</Button>
            </div >
            <div className="lg:hidden"><MobileDrawer data={nav}></MobileDrawer></div>        
        </header>
    </Container>
  )
}
