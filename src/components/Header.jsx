import React, { useEffect, useState } from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { PiShoppingCartLight } from 'react-icons/pi'
import { RiMenu3Fill, RiCloseLine, RiAccountBox2Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux'

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useSelector(state => state.cart); // <-- Fix: get cart from Redux

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  const navLinks = [
    { id: "1", name: 'Home', path: '/' },
    { id: "2", name: 'About', path: '/about' },
    { id: "3", name: 'Explore Cars', path: '/shop' },
    { id: "4", name: 'Contact', path: '/contact' },
  ]

  return (
    // Fix: full width, but margin-left for sidebar
    <header className="bg-white p-2 md:p-4 md:rounded-full fixed top-0 left-0 w-full z-50 shadow-lg"
      
    >
      <div className="flex justify-between items-center gap-2 w-full">
        <Link to="/" className="flex flex-row items-center gap-2">
          <AiOutlineCar className="text-[#e11836] text-xl md:text-2xl flex-shrink-0" />
          <h1 className="text-[#e11836] text-lg md:text-2xl font-bold">TexCars</h1>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-2">
          {navLinks.map(link => (
            link.path === "/contact" ?
            <a key={link.id} href={link.path} className="text-[#222] hover:bg-[#e11836] hover:text-white px-2 py-2 rounded-md text-md font-medium">
              {link.name}
            </a>
            :
            <Link key={link.id} to={link.path} className="text-[#222] hover:bg-[#e11836] hover:text-white px-2 py-2 rounded-md text-md font-medium">
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Cart & Hamburger */}
        <div className="flex gap-2 w-max relative">
          <Link to="/cart" className="relative p-2 text-base md:text-lg bg-secondary text-white hover:bg-primary hover:text-secondary px-2 py-2 rounded-md">
            <PiShoppingCartLight />
            {/* Fix: Show cart count */}
            <span className="h-5 w-5 rounded-full text-xs bg-primary text-white grid place-items-center absolute -top-2 -left-2">
              {cart?.length ?? 0}
            </span>
          </Link>

          <Link to="/login" className="relative p-2 text-base md:text-lg bg-secondary text-white hover:bg-primary hover:text-secondary px-2 py-2 rounded-md">
            <RiAccountBox2Fill /></Link>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2 text-base text-[#222] hover:bg-[#e11836] hover:text-white rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-[#222] flex flex-col items-center gap-2 py-4 z-50 rounded-b-lg">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.path}
              className="text-white hover:bg-[#e11836] px-4 py-2 rounded-md text-lg font-medium w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}