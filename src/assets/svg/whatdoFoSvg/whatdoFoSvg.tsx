interface IWhat {
  className: string
}

export const WhatdoFoSvg = ({ className }: IWhat) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 10C15.976 10 20 8.626 20 6C20 3.374 15.976 2 12 2C8.024 2 4 3.374 4 6C4 8.626 8.024 10 12 10Z"
        fill="white"
      />
      <path
        d="M4 10C4 12.626 8.024 14 12 14C15.976 14 20 12.626 20 10V8C20 10.626 15.976 12 12 12C8.024 12 4 10.626 4 8V10Z"
        fill="white"
      />
      <path
        d="M4 14C4 16.626 8.024 18 12 18C15.976 18 20 16.626 20 14V12C20 14.626 15.976 16 12 16C8.024 16 4 14.626 4 12V14Z"
        fill="white"
      />
      <path
        d="M4 18C4 20.626 8.024 22 12 22C15.976 22 20 20.626 20 18V16C20 18.626 15.976 20 12 20C8.024 20 4 18.626 4 16V18Z"
        fill="white"
      />
    </svg>
  )
}
