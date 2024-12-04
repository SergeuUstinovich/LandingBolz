interface IWhat {
  className: string
}

export const WhatsuccessFSvg = ({ className }: IWhat) => {
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
        d="M20.5 1H15.5C14.1215 1 13 2.1215 13 3.5V8.5C13 9.8785 14.1215 11 15.5 11H20.5C21.8785 11 23 9.8785 23 8.5V3.5C23 2.1215 21.8785 1 20.5 1Z"
        fill="white"
      />
      <path
        d="M3.5 11H8.5C9.8785 11 11 9.8785 11 8.5V3.5C11 2.1215 9.8785 1 8.5 1H3.5C2.1215 1 1 2.1215 1 3.5V8.5C1 9.8785 2.1215 11 3.5 11Z"
        fill="white"
      />
      <path
        d="M20.5 13H15.5C14.1215 13 13 14.1215 13 15.5V20.5C13 21.8785 14.1215 23 15.5 23H20.5C21.8785 23 23 21.8785 23 20.5V15.5C23 14.1215 21.8785 13 20.5 13Z"
        fill="white"
      />
      <path
        d="M3.5 23H8.5C9.8785 23 11 21.8785 11 20.5V15.5C11 14.1215 9.8785 13 8.5 13H3.5C2.1215 13 1 14.1215 1 15.5V20.5C1 21.8785 2.1215 23 3.5 23Z"
        fill="white"
      />
    </svg>
  )
}
