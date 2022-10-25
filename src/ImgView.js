import React from 'react'
import PropTypes from 'prop-types'

function ImgView({ img, size, resolution, }) {

function Resolution(){
    if(resolution === "high")
    return "1040x760"
    else
    return "260x190"
}

    return (
        <div
            className={`bg-cover bg-local bg-no-repeat bg-center ${"h-"+ size} ${"w-"+ size} rounded-full mx-auto my-8`}
            style={{
                backgroundImage: `url("https://cdn.nba.com/headshots/nba/latest/${Resolution()}/${img}.png")`
            }}>
        </div>
    )
}

ImgView.propTypes = {
    img: PropTypes.number,
    size: PropTypes.string,
    resolution: PropTypes.string 
}

export default ImgView