import { useState } from "react"
import GlareHover from "../bitsComponent/GlareHover"

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full text-white">
            <div className="container mx-auto px-10 gap-5 py-5 flex items-center justify-between">

                <div className="flex items-center gap-7 cursor-pointer">
                    <img className="w-14" src="/logo.webp" alt="logo" />
                    <p className="font-medium md:block hidden text-sm">code.abhishekdubey@gmail.com</p>
                </div>

                <nav className="xl:block hidden">
                    <ul className="flex gap-5 cursor-pointer font-medium">
                        <li className="header-text">Service</li>
                        <li className="header-text">Works</li>
                        <li className="header-text">Resume</li>
                        <li className="header-text">Skills</li>
                        <li className="header-text">Testimonial</li>
                        <li className="header-text">Contact</li>
                    </ul>
                </nav>

                <div className="flex gap-4">
                    <div className="flex items-center" >
                        <GlareHover
                            glareColor="#ffffff"
                            glareOpacity={0.3}
                            glareAngle={-30}
                            glareSize={300}
                            transitionDuration={800}
                            playOnce={false}
                        >
                            <span className="text-sm font-bold text-white">Hire Me!</span>
                        </GlareHover>
                    </div>
                    {/* For Mobile Screen */}

                    <button className="xl:hidden text-3xl text-purple-800" onClick={() => {
                        return setMenuOpen(!menuOpen);
                    }}>
                        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                    </button>
                </div>
            </div>

            {
                <div
                    className={`xl:hidden overflow-hidden px-10 transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <ul className="flex flex-col gap-4 text-sm font-medium py-4">
                        <li className="hover:text-purple-800 cursor-pointer">Service</li>
                        <li className="hover:text-purple-800 cursor-pointer">Works</li>
                        <li className="hover:text-purple-800 cursor-pointer">Resume</li>
                        <li className="hover:text-purple-800 cursor-pointer">Skills</li>
                        <li className="hover:text-purple-800 cursor-pointer">Testimonial</li>
                        <li className="hover:text-purple-800 cursor-pointer">Contact</li>
                    </ul>
                </div>
            }

        </header>
    )
}

export default Header