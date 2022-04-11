const Folder = props => (
  <svg
    width='36'
    height='27'
    viewBox='0 0 36 27'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4.97583 3.37L4.53323 19.3035C4.51592 19.9268 5.06692 20.4137 5.68329 20.3199L26.7255 17.1179C27.1803 17.0486 27.5293 16.678 27.5709 16.2198L28.8842 1.77332C28.9431 1.12611 28.3786 0.595597 27.7363 0.694416L10.257 3.38354C9.85895 3.44478 9.5 3.13682 9.5 2.73412C9.5 2.3425 9.1596 2.03782 8.77037 2.08107L5.86502 2.40389C5.3691 2.45899 4.98969 2.87123 4.97583 3.37Z'
      fill='#A39F9F'
      stroke='#40293F'
      stroke-width='0.25'
    />
    <g filter='url(#filter0_d)'>
      <path
        d='M7.59081 8.2737C7.28053 8.68966 6.77307 9.68078 6 12C4.97295 15.0812 4.41471 18.3967 4.16479 20.1812C4.07247 20.8404 4.65333 21.38 5.30802 21.2597L27.6021 17.1649C28.1107 17.0715 28.4612 16.6057 28.4439 16.089C28.2689 10.8552 30.5275 5.44501 31 4.5C31.4561 3.58784 11.9433 7.25189 8.51176 7.90262C8.18612 7.96437 7.78899 8.00803 7.59081 8.2737Z'
        fill='url(#paint0_linear)'
      />
      <path
        d='M7.59081 8.2737C7.28053 8.68966 6.77307 9.68078 6 12C4.97295 15.0812 4.41471 18.3967 4.16479 20.1812C4.07247 20.8404 4.65333 21.38 5.30802 21.2597L27.6021 17.1649C28.1107 17.0715 28.4612 16.6057 28.4439 16.089C28.2689 10.8552 30.5275 5.44501 31 4.5C31.4561 3.58784 11.9433 7.25189 8.51176 7.90262C8.18612 7.96437 7.78899 8.00803 7.59081 8.2737Z'
        stroke='#40293F'
        stroke-width='0.25'
      />
    </g>
    <defs>
      <filter
        id='filter0_d'
        x='0.0297852'
        y='1.23'
        width='35.1029'
        height='25.1716'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow'
          result='shape'
        />
      </filter>
      <linearGradient
        id='paint0_linear'
        x1='22'
        y1='16.6154'
        x2='12.6025'
        y2='2.12038'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#B4B4B4' />
        <stop offset='1' stop-color='#FFFCFC' />
      </linearGradient>
    </defs>
  </svg>
)

export default Folder
