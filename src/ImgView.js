import React from 'react'
import PropTypes from 'prop-types'

function ImgView({ img, size, isHighRes, }) {

function Resolution(){
    if(isHighRes)
    return "1040x760"
    else
    return "260x190"
}

    return (
        <div
            className={`bg-cover bg-local bg-no-repeat bg-center h-60 w-60 rounded-full mx-auto`}
            style={{
                backgroundImage: `url("https://cdn.nba.com/headshots/nba/latest/${Resolution()}/${img}.png")`
            }}>
        </div>
    )
}

ImgView.propTypes = {
    img: PropTypes.number,
    size: PropTypes.number,
    resolution: PropTypes.bool
}

export default ImgView