import React from 'react'

export default function AnimatedFilm() {
  return (
    <React.Fragment>
        <div className='h-auto'>
        {/* mobile */}
            <center>
            <div className="mt-20 md:justify-around md:hidden">
                <iframe className="rounded-lg"  width="350" height="350" src="https://www.youtube.com/embed/rmqJq3XejhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="rounded-lg"  width="350" height="350" src="https://www.youtube.com/embed/u_lbZ8DdKFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="rounded-lg" width="350" height="350" src="https://www.youtube.com/embed/qv8ryLHAZdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </center>
        {/* lg */}
            <div className="hidden mt-20 md:justify-around md:flex">
                <iframe className="rounded-lg"  width="560" height="315" src="https://www.youtube.com/embed/rmqJq3XejhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="rounded-lg"  width="560" height="315" src="https://www.youtube.com/embed/u_lbZ8DdKFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="md:flex justify-around mt-5 hidden">
                <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/qv8ryLHAZdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </React.Fragment>
  )
}
