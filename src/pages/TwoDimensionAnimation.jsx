import React from 'react'

export default function TwoDimensionAnimation() {
  return (
    <React.Fragment>
        <div className='h-auto pb-10'>
        {/* mobile */}
            <center>
            <div className="mt-20 md:justify-around md:hidden">
              <iframe className="mb-5 rounded-lg" width="350" height="350" src="https://www.youtube.com/embed/qbac1bKYmf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe className="mb-5 rounded-lg" width="350" height="350" src="https://www.youtube.com/embed/to-62t3OxUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe className="mb-5 rounded-lg" width="350" height="350" src="https://www.youtube.com/embed/CkW9Ic0Zdgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </center>
        {/* lg */}
            <div className="hidden mt-20 md:justify-around md:flex">
              <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/qbac1bKYmf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/to-62t3OxUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="md:flex justify-around mt-5 hidden">
              <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/CkW9Ic0Zdgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </React.Fragment>
  )
}
