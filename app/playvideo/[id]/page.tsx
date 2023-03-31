import { getVideo } from '@/app/api/videoOnline'
import Carousel from '@/components/Carousel'
import React from 'react'

const page =async ({params}) => {
  const {id} = params
  const video =await getVideo()
 

  console.log(video.videos[0])
  return ( 
    <div>
      holaa {id}
    </div>
  )
}

export default page