import Carousel from 're-carousel'

export default function carousel (props) {
  const frames = props.frameArray.map((frame, i) => {
    return <div>Frame {i}</div>
  })
  return <Carousel auto frames={frames}>
    <span>These children element will be appended to Carousel,</span>
    <span>as normal element other than "frame".</span>
  </Carousel>
}