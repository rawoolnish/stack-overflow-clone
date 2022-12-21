import React from 'react'

const Avatar=({ Children,backgroundColor,px,py,color ,cursor,borderRadius,fontSize})=> {
    const style = {
        backgroundColor,
        padding:`${py} ${px}`,
        color: color|| "black",
        borderRadius,
        fontSize,
        textAlign: "center",
        cusrsor: cursor || 'null',
        textDecoration:"none"
        
    }
  return (
      <div style={style}>
          {Children}
      </div>
  )
}

export default Avatar