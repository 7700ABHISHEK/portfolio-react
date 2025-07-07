import Header from "./components/Header"
import 'remixicon/fonts/remixicon.css'
import Home from "./pages/home"
import Particles from "./bitsComponent/Particles"
import MyService from "./pages/MyService"

const App = () => {

    return (
        <div className="font-sora bg-[#0f0716]">
            <div style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="relative z-10">
                <Header />
                <Home />
                <MyService />
            </div>
        </div>
    )
}

export default App