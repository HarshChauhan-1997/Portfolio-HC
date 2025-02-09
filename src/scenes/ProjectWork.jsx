import { motion } from "framer-motion";
import {projects} from '../assets/img'

const ProjectWork = () => {
  const features = [
    {
      title: "Backend Integration",
      items: [
        { text: "Firestore Real-time Updates", status: "active" },
        { text: "Live Score Integration", status: "active" },
        { text: "Match Statistics Sync", status: "active" },
      ]
    },
    {
      title: "State Management",
      items: [
        { text: "Redux Implementation", status: "active" },
        { text: "Custom Reducers", status: "active" },
        { text: "Performance Optimization", status: "active" },
      ]
    }
  ];

  const rightFeatures = [
    {
      title: "Live Score Updates",
      description: "Real-time score updates using Firestore, ensuring instant data synchronization for live matches.",
      status: "active"
    },
    {
      title: "Component Architecture",
      description: "Built with reusable components for match cards, score displays, and team statistics for consistent UI.",
      status: "active"
    },
    {
      title: "Data Management",
      description: "Implemented Redux with custom reducers for efficient state management and optimal performance.",
      status: "active"
    }
  ];

  return (
    <section id="projectwork" className="pt-24 pb-48 bg-navy">
      {/* HEADING */}
      <motion.div
        className="md:w-2/5 mx-auto text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <h2 className="font-playfair font-semibold text-3xl md:text-4xl mb-5">
            <span className="text-purple-400">Cricket</span>{" "}
            <span className="text-white">App</span>
          </h2>
          <div className="w-2/3 h-0.5 mx-auto bg-purple-400"></div>
        </div>
      </motion.div>

      {/* FEATURES SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-8 md:gap-16 px-4 md:px-10">
        {/* LEFT FEATURES */}
        <div className="w-full md:w-1/3 order-2 md:order-1">
          {features.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="font-playfair font-semibold text-lg md:text-xl mb-4 text-white">{section.title}</h3>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-green-500`}></div>
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CENTER PHONE */}
        <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative scale-90 md:scale-100">
            {/* Phone frame with slimmer borders */}
            <div className="w-[300px] h-[620px] bg-[#1A1A1A] rounded-[50px] p-[4.5px] relative
                          border-[6px] border-[#1A1A1A] shadow-[0_0_0_1px_#2A2A2A,0_20px_50px_-20px_rgba(0,0,0,0.7)]
                          before:content-[''] before:absolute before:inset-0
                          before:rounded-[44px] before:border-[1px] before:border-[#2A2A2A]/30
                          after:content-[''] after:absolute after:inset-[-1px]
                          after:rounded-[50px] after:border-[1px] after:border-[#000]/20">

              {/* Screen Container */}
              <div className="w-full h-full bg-black rounded-[44px] relative overflow-hidden
                            before:content-[''] before:absolute before:top-0 before:left-0 before:right-0
                            before:h-[40%] before:bg-gradient-to-b before:from-[#1a1a1a]/20 before:to-transparent
                            after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0
                            after:h-[40%] after:bg-gradient-to-t after:from-[#000]/50 after:to-transparent">

                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px]
                              bg-black rounded-b-[24px] z-20
                              before:content-[''] before:absolute before:top-[8px] before:left-[24px]
                              before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#1a1a1a]
                              after:content-[''] after:absolute after:top-[10px] after:right-[30px]
                              after:w-[4px] after:h-[4px] after:rounded-full after:bg-[#2a2a2a]">
                  {/* Camera/Sensors */}
                  <div className="absolute top-[8px] left-[44px] w-[5px] h-[5px] rounded-full
                                bg-[#1a1a1a] ring-[1.5px] ring-[#000]/50"></div>
                </div>

                {/* Side Button (Right) - Power Button */}
                <div className="absolute -right-[4px] top-[120px] w-[2px] h-[50px]
                              bg-[#121212] rounded-r-sm shadow-[-1px_0_1px_#000]/30"></div>

                {/* Volume Buttons (Left) */}
                <div className="absolute -left-[4px] top-[100px] w-[2px] h-[35px]
                              bg-[#121212] rounded-l-sm shadow-[1px_0_1px_#000]/30"></div>
                <div className="absolute -left-[4px] top-[145px] w-[2px] h-[35px]
                              bg-[#121212] rounded-l-sm shadow-[1px_0_1px_#000]/30"></div>

                {/* Inner Screen Content */}
                <div className="w-full h-full relative overflow-hidden rounded-[44px]">
                  {/* Background Image */}
                  <img
                    src={projects.LiveList}
                    alt="Live Cricket Score"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Subtle shadow under the phone */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[260px] h-[15px]
                          bg-black/20 blur-xl rounded-full"></div>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="w-full md:w-1/3 order-3">
          {rightFeatures.map((feature, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full bg-green-500`}></div>
                <h3 className="font-playfair font-semibold text-lg md:text-xl text-white">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectWork;
