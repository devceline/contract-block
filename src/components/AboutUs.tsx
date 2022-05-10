import React from 'react'

interface AboutUsProps {
  className?: string
}

const AboutUs: React.FC<AboutUsProps> = (props) => {

  const { className } = props
  return (
    <div className='AboutUs'>
      <div className="AboutUs__title">
        <h3>About Us</h3>
        <div>
          This project was made for the System Analysis and Design lecture headed by
          Dr Dalia
        </div>
      </div>
      <div className="AboutUs__group">
        <h3>Group Members</h3>
        <ul className="AboutUs__group-people">
          <li>Shaheen: 20170027</li>
          <li>Joud: 20190336</li>
          <li>Mera: 20190391</li>
          <li>Hala: 20191157</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs