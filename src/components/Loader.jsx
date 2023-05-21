import {Html, useProgress} from '@react-three/drei'



function Loader() {
  const {progress} = useProgress()
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
      style={{
        fontSize:14,
        color:'red',
        fontWeight:800,
        marginTop:40
      }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader