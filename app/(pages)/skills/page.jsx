import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import React from 'react'

export default function SkillsPage() {
  return (
    <div className="container m-auto text-white">
      <NavBar />
      <div className="w-full h-[82vh] bg-gray-500 bg-opacity-90 flex items-center justify-center">
        <div className="container m-auto text-white">
          <h1 className="text-4xl font-bold mb-4 text-yellow-400">Skills</h1>
          <p className="text-lg mb-4">
            I have a diverse skill set that includes web development, system administration, and networking. 
            My expertise lies in technologies such as React, Node.js, and MikroTik.
          </p>
          <p className="text-lg mb-4">
            I am proficient in creating dynamic and responsive web applications, managing Linux systems, 
            and configuring network devices to ensure optimal performance.
          </p>
          <p className="text-lg mb-4">
            I am always eager to learn new technologies and improve my skills to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}
