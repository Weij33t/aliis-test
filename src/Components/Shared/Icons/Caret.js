import React from 'react'

export const Caret = (props) => {
  return (
    <svg
      className={props.className}
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.999878 1.33334L9.66654 10L0.999878 18.6667"
        stroke={props.isAsc ? '#000' : '#a7a7a7'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
