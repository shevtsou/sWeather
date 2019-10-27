import { generateImage } from 'jsdom-screenshot'

export const resolutions = {
  laptop1024x768: {
    viewport: {
      width: 1024,
      height: 768,
    },
  },
  laptop1280x800: {
    viewport: {
      width: 1280,
      height: 800,
    },
  },
  desktop1920x1280: {
    viewport: {
      width: 1920,
      height: 1280,
    },
  },
}

export default () => {
  return Object
    .keys(resolutions)
    .map(resolution => generateImage(resolutions[resolution]))
}
