import Link from "next/link";
import { useEffect, useRef, useState } from "react";


const Header = () => {
  const headerRef = useRef();
  const hamburgerRef = useRef();
  const navRef = useRef();
  const [navBarFixed, setnavBarFixed] = useState("");
  const [toggleHamburger, settoggleHamburger] = useState(false);
  const handleScroll = () => {
    if (scrollY > headerRef.current.offsetTop) {
      setnavBarFixed("navbar-fixed");
    } else {
      setnavBarFixed("");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
  });

  return (
    <header className={`absolute top-0 left-0 z-10 flex w-full items-center bg-transparent ${navBarFixed}`} ref={headerRef}>
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <Link href="/">
              <a className="block py-6 text-lg font-bold text-primary">pawitrawarda</a>
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`absolute right-4 block lg:hidden ${toggleHamburger ? "hamburger-active" : ""}`}
              ref={hamburgerRef}
              onClick={() => settoggleHamburger(!toggleHamburger)}>
              <span
                className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span
                className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              id="nav-menu"
              className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none ${toggleHamburger ? "" : "hidden"}`}
              ref={navRef}>
              <ul className="block lg:flex">
                <li className="group">
                  <Link href="/">
                    <a
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/#about">
                  <a
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary">
                    About
                  </a>
                  </Link>
                </li>
                <li className="group">
                <Link href="/#techstack">
                  <a
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary">
                    Tech Stack
                  </a>
                  </Link>
                </li>
                <li className="group">
                <Link href="/#project">
                  <a
                    href="#project"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary">
                    Project
                  </a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/contact">
                  <a
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary">
                    Contact
                  </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header