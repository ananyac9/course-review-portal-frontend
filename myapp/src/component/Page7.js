import React, { useState } from 'react'
export default function Page7() {
    const[text,settext] = useState('')
    const [review , setreview] = useState();
    function handleText(event){
        settext(event.target.value);
    }
    
    const handleclear = () =>{
      setreview("");
    }

  return (<>
<div className='d7a'>
    <h1>YOUR REVIEW</h1>
</div>
    <div className='d7b'>
        <form className='form2'>
            <textarea className='textarea' placeholder='enter your review .....' onChange={handleText} value={review}/>
        </form>
    </div>
    <>
  <br/>
    <div className="pagecombine2">
    <div className="f2">
      <button type='button' className="btn btn-clear" onClick={handleclear}> clear </button>
    </div>
    <div className="f3">
      <button type='button' className="btn btn-submit"> Submit </button>
      </div>
    </div>
     <h1> OTHER COURSES</h1>
     </>
    </>
  );
}
