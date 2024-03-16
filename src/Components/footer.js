import * as React from "react";
import imgl from "../assets/footer.jpg";
import img2 from "../assets/feedback.jpg";

export default function Footer() {
    return (
        <div className="flex justify-center items-center self-stretch px-16 py-50 mt-5 w-full text-xl text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:max-w-full ">
            <div className="g2">
                <img src={imgl} style={{ width: 300, height: 170 }} />
            </div>
            <div className="g4">
                <img src={img2} style={{ width: 910, height: 170 }} />
            </div>
        </div>
    );
}
