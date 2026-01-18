import { Briefcase } from "lucide-react";

const Experience = () => {
    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-gray-400" />
                Experience
            </h2>

            <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12 md:space-y-16">

                {/* AMI */}
                <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[5px] md:-left-[6px] top-2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-blue-500 ring-4 ring-[#0f0f11] group-hover:bg-blue-400 transition-colors"></div>
                    <span className="text-xs md:text-sm text-gray-500 font-mono mb-2 block uppercase tracking-wider">Jan 2025 - Present</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">Product Engineering Trainee</h3>
                    <div className="text-blue-400 font-medium mb-4 text-sm md:text-base">American Megatrends Inc (AMI)</div>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        Working on low-level system programming projects involving BIOS-level interactions and UEFI Shell application development using the EDK2 framework. Building custom shell utilities for hardware interaction (PCI devices, memory maps, I/O ports) and gaining deep insights into pre-boot environments and firmware interfaces.
                    </p>
                </div>

                {/* JSW */}
                <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[5px] md:-left-[6px] top-2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-600 ring-4 ring-[#0f0f11] group-hover:bg-gray-500 transition-colors"></div>
                    <span className="text-xs md:text-sm text-gray-500 font-mono mb-2 block uppercase tracking-wider">April 2023 - August 2024</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">Full Stack Developer</h3>
                    <div className="text-gray-300 font-medium mb-4 text-sm md:text-base">JSW Steel OHC Project</div>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4">
                        Developed and maintained the Occupational Health Center (OHC) management system. Designed a robust application to streamline health record management, appointment scheduling, and medical reporting, ensuring compliance and operational efficiency.
                    </p>
                    <a href="/projects/jsw-ohc-python" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                        View Project -&gt;
                    </a>
                </div>

                {/* Streamlit */}
                <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[5px] md:-left-[6px] top-2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-600 ring-4 ring-[#0f0f11] group-hover:bg-gray-500 transition-colors"></div>
                    <span className="text-xs md:text-sm text-gray-500 font-mono mb-2 block uppercase tracking-wider">March 2023 - December 2023</span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">Streamlit Campus Ambassador</h3>
                    <div className="text-gray-300 font-medium mb-4 text-sm md:text-base">Streamlit</div>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        Promoted Streamlit within the student community by organizing workshops, hackathons, and hands-on sessions. Mentored peers and created content to showcase Streamlit's capabilities in building data-driven applications.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Experience
