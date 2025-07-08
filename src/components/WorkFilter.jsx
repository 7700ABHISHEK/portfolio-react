import { useState } from "react";

const WorkFilter = () => {
    const filters = ["All", "React", "JavaScript", "HTML / CSS"];
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="px-4 py-6 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-3 sm:gap-5 bg-[#000012] rounded-full shadow-lg p-2">
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-3xl text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out
                            ${activeFilter === filter
                                ? "bg-[#8750f7] text-white"
                                : "bg-[#1a1a3c] text-white hover:bg-[#8750f7]"}
                        `}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WorkFilter;
