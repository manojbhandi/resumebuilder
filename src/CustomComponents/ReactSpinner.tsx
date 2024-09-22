import { Audio, RotatingLines, RotatingTriangles, ThreeCircles } from 'react-loader-spinner'


import React from 'react'
interface Props {
  loading: boolean
}
function ReactSpinner(props: Props) {
  const { loading } = props;
  return (
    loading ?
      <div className="fixed inset-0 h-screen w-screen bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        <div className='bg-transparent'>
          <RotatingTriangles
            // colors={"red"}
            width={100}
            height={100}
            visible={true}
          />
        </div>
      </div> : null
  )
}

export default ReactSpinner