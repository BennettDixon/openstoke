import { ViewPort } from 'models'
import { Breakpoints } from 'styles'

export const getWindowDimensions = () => {
  if (typeof window !== 'undefined') {
    return { height: window.innerHeight, width: window.innerWidth }
  }
  return null
}

export const getViewPort = () => {
  const windowDims = getWindowDimensions()
  if (!windowDims) {
    return ViewPort.unknown
  }

  if (windowDims.width <= Breakpoints.mobileNumeric) {
    return ViewPort.mobile
  }
  if (windowDims.width <= Breakpoints.desktopNumeric) {
    return ViewPort.desktop
  }
  if (windowDims.width <= Breakpoints.tabletNumeric) {
    return ViewPort.tablet
  }
  if (windowDims.width <= Breakpoints.desktopLgNumeric) {
    return ViewPort.desktopLg
  }

  return ViewPort.unknown
}

export default getViewPort
