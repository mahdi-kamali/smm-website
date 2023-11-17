import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';




const MaxLineText = ({ content, maxLine, targetClass, isMarquee }) => {


    const componentRef = useRef()


    const textStyles = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: maxLine,
        lineClamp: maxLine,
        WebkitBoxOrient: 'vertical',
    };



    return (
        <div style={textStyles}
            className={targetClass}
            ref={componentRef}
        >
            {
                isMarquee ?
                    <marquee behavior="" direction="right">
                        {content}
                    </marquee>
                    : content
            }
        </div>
    )
}

export default MaxLineText