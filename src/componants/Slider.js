import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Slider(props) {
    return (
        <Carousel autoPlay={true}  showThumbs={false}  infiniteLoop={true} autoFocus={true} >
            <div>
                <img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" height={560} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCX7DiOTEzcs7_RtXgLtSktBuRfqRSX4y3Oe5Uhzyqjfn3DuEA4RnGBz-3cLqzI3bV4E&usqp=CAU" height={560} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2014/11/26/20/12/grass-546794_1280.jpg" height={560} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default Slider;