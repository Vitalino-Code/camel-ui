import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import { Container } from './styles'
import { useState } from 'react'

const Carousel = ({ slides }) => {
  const [maxWidth, setMaxWidth] = useState(true)
  let images = slides.map(element => {
    return {
      original: element,
      thumbnail: element,
    }
  })

  const carouselProps = {
    showPlayButton: false,
    slideOnThumbnailOver: true,
    onScreenChange: () => {
      setMaxWidth(!maxWidth)
    },
  }

  return (
    <Container $maxWidth={maxWidth}>
      <ImageGallery items={images} {...carouselProps} />
    </Container>
  )
}

export { Carousel }
