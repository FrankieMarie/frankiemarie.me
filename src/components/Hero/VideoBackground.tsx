import video from '../../assets/video/backgroundVideo.mp4';

const VideoBackground = () => {
  return (
    <div className='h-screen w-full'>
      <video
        className='h-full w-full object-cover'
        src={video}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoBackground;
