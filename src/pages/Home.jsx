import GlareHover from "../bitsComponent/GlareHover"
import RotatingText from "../bitsComponent/RotatingText"

const Home = () => {
    return (
        <div className="container mx-auto px-10 pt-20 pb-10">
            <div className="col-6">
                <div className="home-info">
                    <div className="text mb-7">
                        <div className="flex flex-wrap items-center mb-6">
                            <h1 className="text-white text-3xl font-bold">I am Abhishek</h1>
                            <div className="ms-3">
                                <RotatingText
                                    texts={['Developer', 'Freelancer', 'Coder', 'Learner']}
                                    mainClassName="pt-3 sm:px-2 text-2xl md:px-3 sm:pt-1 sm:pb-0 px-2 mt-1 bg-slate-800 text-white overflow-hidden sm:py-1 justify-center rounded-lg"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[#8750f7] text-5xl font-bold leading-[60px]">Next-Level Web <br /> Developer.</h2>
                            <p className="text-white mt-5 text-[20px] leading-7">I break down complex user experience problems to <br /> create integritiy focussed solutions that connect <br /> billions of people</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <div className="flex items-center gap-5">
                            <div className="cv">
                                <GlareHover
                                    glareColor="#ffffff"
                                    width = "170px"
                                    height = "60px"
                                    glareOpacity={0.3}
                                    glareAngle={-30}
                                    glareSize={300}
                                    transitionDuration={800}
                                    playOnce={false}
                                >
                                    <span className="text-sm text-white">Download CV <i className="ri-download-2-line text-xl ms-2"></i></span>
                                </GlareHover>
                            </div>
                            <ul className="flex gap-6">
                                <li className="px-3 py-2 border rounded-full border-[#8750f7] text-[#8750f7]"><i className="ri-instagram-line"></i></li>
                                <li className="px-3 py-2 border rounded-full border-[#8750f7] text-[#8750f7]"><i className="ri-twitter-x-line"></i></li>
                                <li className="px-3 py-2 border rounded-full border-[#8750f7] text-[#8750f7]"><i className="ri-linkedin-fill"></i></li>
                                <li className="px-3 py-2 border rounded-full border-[#8750f7] text-[#8750f7]"><i className="ri-github-fill"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6"></div>
        </div >
    )
}

export default Home