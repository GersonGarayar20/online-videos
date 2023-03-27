import React from 'react'

const page = () => {
  return (
    <div className='absolute  w-screen '>
      <div >
        <video controls aspect-video>
          <source src="ranaVideo.mp4" type='video/mp4' />
        </video>
      </div>

      <div className="w-ful bg-zinc-900 rounded-b-custom mb-2 px-4 py-4">
        <div className='flex justify-between mb-4'>
          <div className='flex'>
            <figure className="w-5 h-5 rounded-full bg-black">
            </figure>
            <div>
              <div className='text-white text-xs font-bold'>The Rings of Power Offical Trailer</div>
              <sub className='text-slate-500'>Amazone prime - 8m subscribers</sub>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        {/* icons */}
        <div className='flex justify-between mb-4'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            <sub>1.4k</sub>
          </div>
          
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
            <sub>3.8k</sub>
          </div>

          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            <sub>3.8k</sub>
          </div>

          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <sub>3.8k</sub>
          </div>

          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
            <sub>3.8k</sub>
          </div>

        </div>
        <div className='flex justify-center items-center gap-2 '>
          <div className='bg-zinc-800 p-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </div>

          <button className='flex items-center bg-red-600 rounded-borderCus py-2 px-4 font-bold text-xs'>Subscrib </button>
        </div>
      </div>

      <p className='mb-2 px-4 text-xs'>
        Mybe you like that
      </p>


      <div className="carousel h-64 flex flex-col gap-2">
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
        
        
      </div>
    </div>
  )
}

export default page