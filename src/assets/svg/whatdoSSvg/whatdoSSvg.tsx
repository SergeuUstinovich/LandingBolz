interface IWhat {
  className: string
}

export const WhatdoSSvg = ({ className }: IWhat) => {
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
        d="M13.3618 8.40424L13.3618 -7.24102e-07L3.00167 16.1362L11.2898 16.1362L11.2898 24L21.6445 8.40424L13.3618 8.40424Z"
        fill="white"
      />
    </svg>
  )
}
