import HeroPost from '@/components/post/HeroPost'
import Image from 'next/image'
import React from 'react'
import PostContent from './PostContent'

export default function page() {
  return (
      <div className='container'>
         <HeroPost/>
          <PostContent/>
    </div>
  )
}
