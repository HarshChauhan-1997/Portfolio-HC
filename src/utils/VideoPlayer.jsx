export const VideoPlayer = ({ video }) => {
  return (
    <div>
      <video
        className="w-[80%] sm:w-[95%] border-2 border-amber-50 rounded-2xl"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        {/* Add additional <source> elements for different video formats */}
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
