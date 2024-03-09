import Page4 from "./component/Page4";
import Page2 from "./component/Page2";
import Page6 from "./component/Page6";
import Page7 from "./component/Page7";
import Page7b from "./component/Page7b";
import Page8 from "./component/Page8";
import Page8b from "./component/Page8b";
import Page9 from "./component/Page9";


import React from 'react'

export default function Homepage() {
  return (
    <div>
        <Page4/>
      <Page8/>
  <Page2/>
  <Page7/>
  <div className='page6'>
    <div className='page6a'>
      <Page6/>
    </div>
    <div className='page6b'>
      <Page6/>
    </div>
    <div className='page6c'>
      <Page6/>
    </div>
  </div>
  <Page9/>
    </div>
  )
}
