import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../assets/img'
import { useState, useEffect } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

const ProjectWork = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const images = [
    projects.LiveList,
    projects.Scorecard,
    projects.Commentary,
    projects.Subscription,
  ]

  const allFeatures = [
    // Features for LiveList
    {
      leftFeatures: [
        {
          title: 'Live Updates',
          items: [
            { text: 'Real-time Score Updates', status: 'active' },
            { text: 'Live Match Feed', status: 'active' },
            { text: 'Instant Notifications', status: 'active' },
          ],
        },
        {
          title: 'Match Coverage',
          items: [
            { text: 'Multiple Match Support', status: 'active' },
            { text: 'Tournament Tracking', status: 'active' },
            { text: 'Team Rankings', status: 'active' },
          ],
        },
      ],
      rightFeatures: [
        {
          title: 'Live Match Center',
          description:
            'Real-time updates for ongoing matches with instant score synchronization.',
          status: 'active',
        },
        {
          title: 'Match List View',
          description:
            'Comprehensive list of all matches with their current status and quick access.',
          status: 'active',
        },
        {
          title: 'Tournament Coverage',
          description:
            'Complete tournament coverage with standings and team statistics.',
          status: 'active',
        },
      ],
    },
    // Features for Scorecard
    {
      leftFeatures: [
        {
          title: 'Optimized Data Flow',
          items: [
            { text: 'Score Change Triggers', status: 'active' },
            { text: 'Rate-Limited API Calls', status: 'active' },
            { text: 'Firestore Optimization', status: 'active' },
          ],
        },
        {
          title: 'UI Components',
          items: [
            { text: 'Dynamic Score Updates', status: 'active' },
            { text: 'Efficient Re-rendering', status: 'active' },
            { text: 'Responsive Table Layout', status: 'active' },
          ],
        },
      ],
      rightFeatures: [
        {
          title: 'Smart Data Fetching',
          description:
            'Optimized API calls triggered by Firestore score changes, preventing rate limit issues while maintaining real-time updates.',
          status: 'active',
        },
        {
          title: 'Performance Optimization',
          description:
            'Efficient data synchronization strategy that minimizes Firestore reads while ensuring accurate score updates.',
          status: 'active',
        },
        {
          title: 'Advanced UI Structure',
          description:
            'Complex table-based layout with optimized rendering cycles and smooth transitions between score updates.',
          status: 'active',
        },
      ],
    },
    // Features for Commentary
    {
      leftFeatures: [
        {
          title: 'Data Management',
          items: [
            { text: 'Firestore Rate Limiting', status: 'active' },
            { text: 'Pagination System', status: 'active' },
            { text: 'Cache Optimization', status: 'active' },
          ],
        },
        {
          title: 'Filter Integration',
          items: [
            { text: 'Innings-wise Filtering', status: 'active' },
            { text: 'Score-based Filtering', status: 'active' },
            { text: 'Key Moments Filter', status: 'active' },
          ],
        },
      ],
      rightFeatures: [
        {
          title: 'Optimized Data Flow',
          description:
            'Smart API calls triggered by score updates with rate limiting to prevent Firestore quota exhaustion.',
          status: 'active',
        },
        {
          title: 'Advanced Pagination',
          description:
            'Efficient pagination system managing both live and historical commentary data with seamless transitions.',
          status: 'active',
        },
        {
          title: 'Dynamic Filtering',
          description:
            'Comprehensive filtering system for innings, scores, and key moments with optimized query handling.',
          status: 'active',
        },
      ],
    },
    // Features for Subscription
    {
      leftFeatures: [
        {
          title: 'Subscription Management',
          items: [
            { text: 'Active Plan Status', status: 'active' },
            { text: 'Renewal Tracking', status: 'active' },
            { text: 'Plan Feature Access', status: 'active' },
          ],
        },
        {
          title: 'Platform Integration',
          items: [
            { text: 'iOS Sandbox Testing', status: 'active' },
            { text: 'Android Testing Flow', status: 'active' },
            { text: 'Subscription Restore', status: 'active' },
          ],
        },
      ],
      rightFeatures: [
        {
          title: 'Plan Management',
          description:
            'Comprehensive subscription plans with feature-specific access control and active plan status tracking with renewal information.',
          status: 'active',
        },
        {
          title: 'Purchase Flow',
          description:
            'Streamlined subscription purchase process with sandbox testing implementation for both iOS and Android platforms.',
          status: 'active',
        },
        {
          title: 'Subscription Recovery',
          description:
            'Robust subscription restoration system with cross-platform support and automatic validation of existing subscriptions.',
          status: 'active',
        },
      ],
    },
  ]

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  useEffect(() => {
    let interval
    if (isAutoPlay) {
      interval = setInterval(() => {
        paginate(1)
      }, 4000)
    }
    return () => clearInterval(interval)
  }, [page, isAutoPlay])

  // Update currentImage when page changes
  useEffect(() => {
    setCurrentImage(Math.abs(page % images.length))
  }, [page])

  const handleManualInteraction = () => {
    setIsAutoPlay(false)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  return (
    <section id="projectwork" className="bg-navy">
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
            <span className="text-purple-400">Cricket</span>{' '}
            <span className="text-white">App</span>
          </h2>
          <div className="w-2/3 h-0.5 mx-auto bg-purple-400"></div>
        </div>
      </motion.div>

      {/* FEATURES SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-8 md:gap-16 px-4 md:px-10">
        {/* LEFT FEATURES */}
        <div className="w-full md:w-1/3 order-2 md:order-1">
          <AnimatePresence mode="wait">
            {allFeatures[currentImage].leftFeatures.map((section, index) => (
              <motion.div
                key={`${currentImage}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-8"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-playfair font-semibold text-lg md:text-xl mb-4 text-white"
                >
                  {section.title ?? ''}
                </motion.h3>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={`${currentImage}-${index}-${itemIndex}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-green-500`}
                      ></div>
                      <span className="text-sm text-gray-300">
                        {item.text ?? ''}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CENTER PHONE */}
        <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative scale-90 md:scale-100">
            {/* Phone frame with slimmer borders */}
            <div
              className="w-[300px] h-[620px] bg-[#1A1A1A] rounded-[50px] p-[4.5px] relative
                          border-[6px] border-[#1A1A1A] shadow-[0_0_0_1px_#2A2A2A,0_20px_50px_-20px_rgba(0,0,0,0.7)]
                          before:content-[''] before:absolute before:inset-0
                          before:rounded-[44px] before:border-[1px] before:border-[#2A2A2A]/30
                          after:content-[''] after:absolute after:inset-[-1px]
                          after:rounded-[50px] after:border-[1px] after:border-[#000]/20"
            >
              {/* Screen Container */}
              <div
                className="w-full h-full bg-black rounded-[44px] relative overflow-hidden
                            before:content-[''] before:absolute before:top-0 before:left-0 before:right-0
                            before:h-[40%] before:bg-gradient-to-b before:from-[#1a1a1a]/20 before:to-transparent
                            after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0
                            after:h-[40%] after:bg-gradient-to-t after:from-[#000]/50 after:to-transparent"
              >
                {/* Play/Pause Button */}
                <motion.button
                  onClick={toggleAutoPlay}
                  className="absolute top-4 right-4 z-30 bg-purple-500/50 hover:bg-purple-500/70
                            p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isAutoPlay ? (
                    <FaPause className="w-4 h-4 text-white" />
                  ) : (
                    <FaPlay className="w-4 h-4 text-white" />
                  )}
                </motion.button>

                {/* Dynamic Island */}
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px]
                              bg-black rounded-b-[24px] z-20
                              before:content-[''] before:absolute before:top-[8px] before:left-[24px]
                              before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#1a1a1a]
                              after:content-[''] after:absolute after:top-[10px] after:right-[30px]
                              after:w-[4px] after:h-[4px] after:rounded-full after:bg-[#2a2a2a]"
                >
                  {/* Camera/Sensors */}
                  <div
                    className="absolute top-[8px] left-[44px] w-[5px] h-[5px] rounded-full
                                bg-[#1a1a1a] ring-[1.5px] ring-[#000]/50"
                  ></div>
                </div>

                {/* Side Button (Right) - Power Button */}
                <div
                  className="absolute -right-[4px] top-[120px] w-[2px] h-[50px]
                              bg-[#121212] rounded-r-sm shadow-[-1px_0_1px_#000]/30"
                ></div>

                {/* Volume Buttons (Left) */}
                <div
                  className="absolute -left-[4px] top-[100px] w-[2px] h-[35px]
                              bg-[#121212] rounded-l-sm shadow-[1px_0_1px_#000]/30"
                ></div>
                <div
                  className="absolute -left-[4px] top-[145px] w-[2px] h-[35px]
                              bg-[#121212] rounded-l-sm shadow-[1px_0_1px_#000]/30"
                ></div>

                {/* Inner Screen Content */}
                <div className="w-full h-full relative overflow-hidden rounded-[44px]">
                  <AnimatePresence
                    initial={false}
                    custom={direction}
                    mode="popLayout"
                  >
                    <motion.img
                      key={page}
                      src={images[currentImage]}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragStart={handleManualInteraction}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x)
                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1)
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1)
                        }
                      }}
                      className="w-full h-full object-cover object-top absolute inset-0"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Subtle shadow under the phone */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[260px] h-[15px]
                          bg-black/20 blur-xl rounded-full"
            ></div>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="w-full md:w-1/3 order-3">
          <AnimatePresence mode="wait">
            {allFeatures[currentImage].rightFeatures.map((feature, index) => (
              <motion.div
                key={`${currentImage}-${index}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full bg-green-500`}></div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="font-playfair font-semibold text-lg md:text-xl text-white"
                  >
                    {feature.title ?? ''}
                  </motion.h3>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-sm text-gray-400 leading-relaxed"
                >
                  {feature.description ?? ''}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default ProjectWork
