import React, { FunctionComponent, ReactChild } from 'react'
import Slide from '@material-ui/core/Slide'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    '&:hover': {
      "& $backArrow": {
        opacity: 1
      },
      "& $forwardArrow": {
        opacity: 1
      }
   }
  },
  backArrow: {
    position: 'absolute',
    zIndex: 10,
    fontSize: '48px',
    color: 'white',
    left: '10%',
    top: 'calc(50% - 24px)',
    opacity: 0,
    transition: 'opacity 300ms linear'
  },
  forwardArrow: {
    position: 'absolute',
    zIndex: 10,
    fontSize: '48px',
    color: 'white',
    right: '10%',
    top: 'calc(50% - 24px)',
    opacity: 0,
    transition: 'opacity 300ms linear'
  }
}));

interface carouselProps {
  autoPlay: boolean,
  height: string
}
const AptugoCarousel: FunctionComponent<carouselProps> = (props) => {
  const classes = useStyles()

  const [currentSlide, setCurrentSlide] = React.useState<number>(0)
  const [isOver, setIsOver] = React.useState<boolean>(false)
  let timer

  const slides = (props.children as Array<React.ReactElement>)
  
  const nextSlide = () => {
    const nextSlide = currentSlide + 1 === slides.length ? 0 : currentSlide + 1
    setCurrentSlide(nextSlide)
  }

  const mouseOverHandler = () => {
    clearTimeout(timer)
    setIsOver(true)
  }

  const mouseLeaveHandler = () => {
    if (props.autoPlay) {
      timer = setTimeout(() => {
        nextSlide()
      }, 10000)
    }
    setIsOver(false)
  }

  React.useEffect(() => {
    if (props.autoPlay && !isOver) {
      timer = setTimeout(() => {
        nextSlide()
      }, 10000)
    }
  }, [currentSlide, timer])

  return (
    <div className={classes.root} style={ { height: props.height } }>
      <ArrowBackIcon className={classes.backArrow} />
      <div>
        {slides.map((child, index) => {
          return (
            <Slide
              key={index}
              style={ {position: 'absolute'} }
              direction={currentSlide === index ? "left" : "right"}
              in={currentSlide === index}
              timeout={300}
            >
              <div
                style={ {width: '100%'} }
                onMouseOver={mouseOverHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                {child}
              </div>
            </Slide>
          )
        })}
      </div>
      <ArrowForwardIcon onClick={() => nextSlide()} className={classes.forwardArrow} />
    </div>    
  )
} 

export default AptugoCarousel