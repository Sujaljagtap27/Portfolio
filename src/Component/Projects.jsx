import React from 'react'
import Projectcard from './Projectcard'

const Projects = () => {
  return (
    <div id='Project' className='p-10 md:p-24  text-white'>
        <h1 className='text-2xl md:text-4xl  text-white font-bold'>Projects</h1>
        <div className="py-12 px-8 flex justify-between flex-wrap gap-5">
            <Projectcard
            title="Netflix Clone"
            main="it is devloped using html,css."
            cardimg="https://imgsrv2.voi.id/oMPVTt6tQ1LaA3A8ih0hUs7u0rwBUMdn8AyY4xzHQf0/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yNTA3NjIvMjAyMzAyMDMxNjA3LW1haW4uY3JvcHBlZF8xNjc1NDE1MjU4LmpwZWc.jpg"/>
              <Projectcard
            title="Spotify Clone"
            main="it is devloped using html,css & javascript."
            cardimg="https://m.media-amazon.com/images/I/A11sM7ihyNL.png"/>
              <Projectcard
            title="Quiz app"
            main="it is devloped using html,css,javascript & react."
            cardimg="https://user-images.githubusercontent.com/26218291/133905987-58c5b658-f3f8-45de-ba1e-dcaae04d600b.png"/>
        </div>
    </div>
  )
}

export default Projects