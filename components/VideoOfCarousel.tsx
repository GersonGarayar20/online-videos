import React from 'react'

const VideoOfCarousel = () => {
  return (
    <div className="w-full h-24    px-4  grid grid-cols-2 grid-rows-1 gap-3">
    <video src="ranaVideo.mp4" controls aspect-video className='h-full rounded-lg'>
    </video>
    <div className=''>
      <div className='font-semibold text-white/90'>rana carnivora</div>
      <div className='flex gap-2 py-2 text-xs'>
        <figure className='w-5 h-5 bg-white/50 rounded-full '>

        </figure>
        <div>
          <div>name</div>
          <div>8 subscriptores</div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default VideoOfCarousel