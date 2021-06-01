import { Transition } from 'react-transition-group';
import $ from 'jquery';
import { useContext, useEffect, useState } from 'react';
import { Offsetcontext } from '../context';


export const Fadetransition = (props) =>{    
        const duration = 300;
        const defaultStyle = {
          transition: `opacity ${duration}ms ease-in-out`,
          opacity: 0,
          }
    
        const transitionStyles = {
            entering: { opacity: 1 },
            entered:  { opacity: 1 },
            exiting:  { opacity: 0 },
            exited:  { opacity: 0 },
          };
          
          
        return (
            <Transition in={props.open} timeout={duration}>
              {state => (
                <div style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}>
                    {props.children}          
                </div>
              )}
            </Transition>
        );
}



export const Colortransition = (props) =>{    
  const duration = 300;
  const defaultStyle = {
    transition: `color ${duration}ms ease-in-out`,
    color: 'initial',
  }

  const transitionStyles = {
      entering: { color: `${props.transitioncolor}`  },
      entered:  { color: `${props.transitioncolor}` },
      exiting:  { color: `${props.initialcolor}` },
      exited:   { color: `${props.initialcolor}` },
    };
    
    
  return (
      <Transition in={props.open} timeout={duration}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
              {props.children}          
          </div>
        )}
      </Transition>
  );
}


export const Backgroundtransition = (props) => {
  const offsetY = useContext(Offsetcontext);
  return(
    <div className="parallex_content" style={{backgroundImage:'url("assets/images/1.png")',backgroundPositionY:`-${(offsetY * 0.5)}px`}}>
    </div>
  );
      
}