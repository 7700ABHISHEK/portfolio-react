import ProjectWork from "../components/ProjectWork"
import SectionHeading from "../components/SectionHeading"
import WorkFilter from "../components/WorkFilter"

const MyWork = () => {
    return (
        <div className="container mx-auto ">
            <SectionHeading title={'My Recent Works'} dsc={'We make websites that works efficiently on every device and also with modern responsive UI'} />
            <WorkFilter />
            <ProjectWork />
        </div>
    )
}

export default MyWork