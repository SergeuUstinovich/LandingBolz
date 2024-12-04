interface IBurger {
  className: string
}

export const BurgerSvg = ({ className }: IBurger) => {
  return (
    <svg
      className={className}
      width="46"
      height="38"
      viewBox="0 0 46 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_823_11967)">
        <rect x="12" y="10" width="22" height="2" fill="#0DD149" />
        <rect x="12" y="16" width="22" height="2" fill="#0DD149" />
        <rect x="12" y="22" width="22" height="2" fill="#0DD149" />
      </g>
      <defs>
        <filter
          id="filter0_d_823_11967"
          x="-5"
          y="-9"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_823_11967"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_823_11967"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
