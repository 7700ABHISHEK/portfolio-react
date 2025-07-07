import BlurText from "../bitsComponent/BlurText"

const SectionHeading = () => {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div>
            <BlurText
                text="My Services"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl my-8 text-white flex justify-center"
            />
        </div>
    )
}

export default SectionHeading