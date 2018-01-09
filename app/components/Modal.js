import { default as OriginalModal } from 'react-modal';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

function ThumbVertical( { style, ...props} ){
    const finalStyle = {
       ...style,
       cursor: 'pointer',
       borderRadius: 'inherit',
       backgroundColor: 'rgba(255,255,255,.9)',
       marginTop:20
   };
   const finalProps = {
       ...props,
       className: 'rcs-vert'
   };
    return (
        <div style={finalStyle} {...finalProps } />
    );
}

export default function Modal( props ){
  return(
    <OriginalModal {...props} >
    <Scrollbars style={{ height: 400 }} renderThumbVertical={ThumbVertical} thumbSize={100} >
    {props.children || '' }
    </Scrollbars>
    </OriginalModal>
  )
}