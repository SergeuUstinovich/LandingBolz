interface IWhat {
  className: string
}

export const WhatdoFSvg = ({ className }: IWhat) => {
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
        d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z"
        fill="white"
      />
      <path
        d="M22.0496 14.0625L22.0275 14.0447L20.5481 12.8845C20.4545 12.8104 20.3797 12.7151 20.33 12.6065C20.2803 12.4979 20.2571 12.379 20.2622 12.2597V11.7178C20.2575 11.5992 20.281 11.4812 20.3308 11.3735C20.3806 11.2658 20.4553 11.1714 20.5486 11.0981L22.0275 9.9375L22.0496 9.91969C22.2776 9.72969 22.4307 9.46475 22.4814 9.17225C22.532 8.87976 22.477 8.57877 22.3261 8.32312L20.3241 4.85906C20.3218 4.85579 20.3197 4.85234 20.318 4.84875C20.1663 4.59664 19.9311 4.40562 19.6532 4.30886C19.3754 4.2121 19.0724 4.21571 18.7969 4.31906L18.7805 4.32516L17.0414 5.025C16.9317 5.06938 16.8129 5.08704 16.695 5.07653C16.5771 5.06602 16.4633 5.02763 16.3631 4.96453C16.2094 4.86766 16.0531 4.77609 15.8944 4.68984C15.7915 4.63403 15.7031 4.55481 15.6364 4.45856C15.5697 4.36232 15.5266 4.25176 15.5105 4.13578L15.2485 2.28L15.2428 2.24625C15.1858 1.95881 15.0315 1.69977 14.806 1.51265C14.5805 1.32554 14.2974 1.22176 14.0044 1.21875H9.99565C9.69849 1.2197 9.4112 1.32549 9.18439 1.51749C8.95758 1.70948 8.80581 1.97536 8.7558 2.26828L8.75159 2.29453L8.49049 4.15406C8.47448 4.2697 8.43168 4.38001 8.36552 4.4762C8.29936 4.57239 8.21166 4.6518 8.1094 4.70813C7.95018 4.79387 7.79385 4.88486 7.64065 4.98094C7.54065 5.04365 7.42719 5.08174 7.30961 5.09209C7.19202 5.10244 7.07366 5.08475 6.96424 5.04047L5.22377 4.33734L5.20737 4.33078C4.93149 4.22731 4.62807 4.22384 4.34989 4.32096C4.07172 4.41808 3.8364 4.60965 3.68487 4.86234L3.67877 4.87266L1.67393 8.33906C1.52282 8.59497 1.46767 8.89629 1.51833 9.18913C1.569 9.48197 1.72218 9.74724 1.95049 9.9375L1.97252 9.95531L3.4519 11.1155C3.54558 11.1896 3.62035 11.2849 3.67006 11.3935C3.71976 11.5021 3.74299 11.621 3.73784 11.7403V12.2822C3.74253 12.4008 3.71902 12.5188 3.66923 12.6265C3.61944 12.7342 3.54479 12.8286 3.45143 12.9019L1.97252 14.0625L1.95049 14.0803C1.72241 14.2703 1.56935 14.5353 1.51868 14.8277C1.46802 15.1202 1.52304 15.4212 1.67393 15.6769L3.67596 19.1409C3.67826 19.1442 3.6803 19.1477 3.68205 19.1512C3.83375 19.4034 4.06896 19.5944 4.34682 19.6911C4.62469 19.7879 4.92767 19.7843 5.20315 19.6809L5.21955 19.6748L6.95721 18.975C7.06697 18.9306 7.18571 18.913 7.30364 18.9235C7.42157 18.934 7.53531 18.9724 7.63549 19.0355C7.78924 19.1327 7.94549 19.2242 8.10424 19.3102C8.20717 19.366 8.29554 19.4452 8.36222 19.5414C8.42891 19.6377 8.47204 19.7482 8.48815 19.8642L8.74877 21.72L8.7544 21.7537C8.81154 22.0417 8.9662 22.3011 9.19231 22.4882C9.41841 22.6754 9.70213 22.7789 9.99565 22.7812H14.0044C14.3016 22.7803 14.5888 22.6745 14.8157 22.4825C15.0425 22.2905 15.1942 22.0246 15.2442 21.7317L15.2485 21.7055L15.5096 19.8459C15.5258 19.7301 15.569 19.6196 15.6355 19.5234C15.7021 19.4272 15.7903 19.3479 15.893 19.2919C16.0533 19.2056 16.2099 19.1142 16.3617 19.0191C16.4617 18.9564 16.5752 18.9183 16.6928 18.9079C16.8104 18.8976 16.9287 18.9153 17.0381 18.9595L18.7786 19.6603L18.795 19.6669C19.0709 19.7705 19.3744 19.7741 19.6526 19.677C19.9308 19.5798 20.1661 19.3881 20.3175 19.1353C20.3194 19.1318 20.3214 19.1283 20.3236 19.125L22.3256 15.6614C22.477 15.4055 22.5324 15.1041 22.4818 14.8112C22.4312 14.5182 22.278 14.2528 22.0496 14.0625ZM15.7458 12.1763C15.7117 12.9021 15.4674 13.6025 15.0426 14.1921C14.6178 14.7817 14.0308 15.2352 13.3531 15.4974C12.6754 15.7597 11.936 15.8193 11.225 15.6692C10.514 15.519 9.86196 15.1655 9.34813 14.6516C8.83431 14.1377 8.48087 13.4856 8.33079 12.7746C8.18071 12.0635 8.24045 11.3242 8.50276 10.6465C8.76506 9.96881 9.21863 9.38192 9.8083 8.95721C10.398 8.5325 11.0983 8.28827 11.8242 8.25422C12.3454 8.23127 12.8656 8.31702 13.3518 8.50601C13.838 8.695 14.2796 8.98309 14.6484 9.35197C15.0172 9.72085 15.3053 10.1624 15.4942 10.6487C15.6831 11.1349 15.7688 11.6551 15.7458 12.1763Z"
        fill="white"
      />
    </svg>
  )
}
