import React from 'react'
import landingn from '../images/landingn.png';
import network from '../images/network.png';
const Info = () => {
  return (
    <div>
        <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={landingn}
            alt=""
        />
                <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={network}
            alt=""
        />
    </div>
    

  )
}

export default Info