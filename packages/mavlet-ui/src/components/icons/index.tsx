import { JSX } from 'solid-js/jsx-runtime'

interface IconProps {
  style?: JSX.CSSProperties | undefined
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      stroke-width="0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      style={
        props.style
          ? { overflow: 'visible', 'font-size': '22px', ...props.style }
          : { overflow: 'visible', 'font-size': '22px' }
      }
    >
      <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34Z"></path>
    </svg>
  )
}

export function LeftIcon(props: IconProps) {
  return (
    <svg
      stroke-width="0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      height="1em"
      width="1em"
      style={props.style ? { overflow: 'visible', ...props.style } : { overflow: 'visible' }}
    >
      <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"></path>
    </svg>
  )
}

export function LogoIcon() {
  return (
    <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.0148 10.2692V17.7198M26.0148 10.2692L32.3822 7.09874M26.0148 10.2692L19.6475 7.09874M26.0148 17.7198L32.3822 14.0738V7.09874M26.0148 17.7198L19.6475 14.0738V7.09874M32.3822 7.09874L26.0148 3.66406L19.6475 7.09874" stroke="#5F58FF" stroke-width="2" stroke-linejoin="round"/>
      <path d="M14.3371 28.5505V36.0011M14.3371 28.5505L20.7045 25.38M14.3371 28.5505L7.96973 25.38M14.3371 36.0011L20.7045 32.355V25.38M14.3371 36.0011L7.96973 32.355V25.38M20.7045 25.38L14.3371 21.9453L7.96973 25.38" stroke="#5F58FF" stroke-width="2" stroke-linejoin="round"/>
      <path d="M37.6935 28.5505V36.0011M37.6935 28.5505L44.0609 25.38M37.6935 28.5505L31.3262 25.38M37.6935 36.0011L44.0609 32.355V25.38M37.6935 36.0011L31.3262 32.355V25.38M44.0609 25.38L37.6935 21.9453L31.3262 25.38" stroke="#5F58FF" stroke-width="2" stroke-linejoin="round"/>
      <path d="M23.2417 17.4531L19.1465 23.1071" stroke="#5F58FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M28.895 17.4531L32.9902 23.1071" stroke="#5F58FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M21.9189 29.3438L30.1622 29.3438" stroke="#5F58FF" stroke-width="2" stroke-linecap="round"/>
      <path d="M51.3643 28.001V12.5H54.5654L59.3135 24.3379H59.3887L64.1367 12.5H67.3379V28.001H64.8457V16.9795H64.7598L60.291 28.001H58.4111L53.9424 16.9795H53.8672V28.001H51.3643Z" fill="black"/>
      <path d="M69.0029 28.001L74.5459 12.5H77.6611L83.2041 28.001H80.293L78.9824 23.9941H73.2139L71.9033 28.001H69.0029ZM76.0713 15.2607L73.9121 21.8564H78.2842L76.1357 15.2607H76.0713Z" fill="black"/>
      <path d="M87.2861 28.001L81.915 12.5H84.9336L88.8652 25.0469H88.9189L92.8613 12.5H95.8799L90.498 28.001H87.2861Z" fill="black"/>
      <path d="M97.5342 28.001V12.5H100.306V25.6699H107.342V28.001H97.5342Z" fill="black"/>
      <path d="M109.329 28.001V12.5H119.362V14.8311H112.101V19.0098H118.965V21.2549H112.101V25.6699H119.362V28.001H109.329Z" fill="black"/>
      <path d="M125.561 28.001V14.8311H120.92V12.5H132.951V14.8311H128.321V28.001H125.561Z" fill="black"/>
    </svg>
  )
}

export function QRCodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z" />
    </svg>
  )
}
