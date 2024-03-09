import React, { useState } from 'react'

export default function Page7b() {
    const [review , setreview] = useState();
    function handleText(event){
        setreview(" gdgh");
    }
  return (
  <>
  <br/>
    <div className="pagecombine2">
    <div className="f2">
      <button type='button' className="btn btn-submit" onClick={handleText}> clear </button>
    </div>
    <div className="f3">
      <button type='button' className="btn btn-submit"> Submit </button>
      </div>
    </div>
     <h1> OTHER COURSES</h1>
     </>
  )
}
