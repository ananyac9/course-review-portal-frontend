import { useState } from 'react';
import axios from 'axios';
export default function Review() {
    const [review , setreview] = useState();

    const handlereview =(event)=>{
        setreview(event.target.value);
    }
    const handleclear = () =>{
      setreview("");
    }

/* const handlesubmit =  (e)=>{
      e.preventDefault();
      axios.post("",{ // here api is to be added 
        review:review
      })
      .then((response)=>{
        console.log(response);
       
      })
      .catch((error)=>{
        console.log("there is error loading this data" , error )
      })
      setreview("");
    }
    */
  return (<>
<div className='d7a'>
    <h1>YOUR REVIEW</h1>
</div>
    <div className='d7b'>
        <form className='form2'>
            <textarea className='textarea' placeholder='enter your review .....' onChange={handlereview} value={review}/>
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
