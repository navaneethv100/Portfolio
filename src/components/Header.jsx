import React from 'react'

function Header() {
  return (
    <nav>
        <NavContent />
    </nav>
  )
}


const NavContent = () =>{
    return (
        <>
            <h2>Navaneeth.</h2>
            <div>
                <a onClick={() => setMenuOpen(false)} href="#home">
                    Home
                </a>
                <a onClick={() => setMenuOpen(false)} href="#work">
                    Work
                </a>
                <a onClick={() => setMenuOpen(false)} href="#timeline">
                    Experience
                </a>
                <a onClick={() => setMenuOpen(false)} href="#services">
                    Services
                </a>
                <a onClick={() => setMenuOpen(false)} href="#testimonial">
                    Testimonial
                </a>
                <a onClick={() => setMenuOpen(false)} href="#contact">
                    Contact
                </a>
            </div>
                <a href="mailto:navaneethv100@gmail.com">
            <button>Email</button>
            </a>
        </>
    )
}

export default Header