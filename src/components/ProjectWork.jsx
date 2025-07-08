const ProjectWork = () => {
    const projects = [
        {
            heading: "Todo List",
            dsc: "A clean and functional todo list built with React.js.",
            img: "/todo-list.png"
        },
        {
            heading: "Notes App",
            dsc: "Minimal notes keeping app using React hooks.",
            img: "/todo-list.png"
        },
        {
            heading: "Task Manager",
            dsc: "Manage your tasks with filters and tags.",
            img: "/todo-list.png"
        },
        {
            heading: "Time Tracker",
            dsc: "Track your time to boost productivity.",
            img: "/todo-list.png"
        },
        {
            heading: "Focus Booster",
            dsc: "Pomodoro-based timer app for focused work.",
            img: "/todo-list.png"
        },
        {
            heading: "Politixy",
            dsc: "Responsive political news site made with HTML & CSS.",
            img: "/todo-list.png"
        },
    ];

    return (
        <section className="bg-[#0e0e10] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-2xl shadow-lg bg-[#1a1a1d] group transition-all duration-500 hover:scale-[1.02]"
                        >
                            {/* Project Image */}
                            <img
                                src={project.img}
                                alt={project.heading}
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Overlay Info */}
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                                <div className="text-white space-y-2">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-fadeInUp">
                                        {project.heading}
                                    </h3>
                                    <p className="text-sm text-gray-300 animate-fadeInUp delay-100">
                                        {project.dsc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectWork;
