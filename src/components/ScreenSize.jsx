import React, { useState } from 'react'
import { useEffect } from 'react'

const ScreenSize = () => {
    const [width, setWidth] = useState(
       {
        winWidth : window.innerWidth,
        widHeight : window.innerHeight
       }
    )

    const detectSize = () => {
        setWidth({
            winWidth : window.innerWidth,
            widHeight : window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize' , detectSize)

        return () => {
            window.removeEventListener("resize" , detectSize)
        }
    },[width])
  return (
    <div>
        <p>width : {width.winWidth}</p>
        <p>Height : {width.widHeight}</p>
        </div>
  )
}

export default ScreenSize