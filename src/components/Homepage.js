import React from 'react'
import Cardsection from '../homepages/Cardsection'
import Imagetext from '../homepages/Imagetext'
import Logoslider from '../homepages/Logoslider'
import Slider from '../homepages/Slider'
import Teamsecttion from '../homepages/Teamsecttion'
import Work from '../homepages/Work'
function Homepage() {
  return (
    <div>
      <Slider />
      <Work />
      <Cardsection />
      <Imagetext />
      <Logoslider />
      <Teamsecttion />
    </div>
  )
}

export default Homepage
