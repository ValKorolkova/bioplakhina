import { GalleryData } from "./GalleryData";
import { useState } from "react";
import "./gallery.css";

function Gallery () {

    const [galleryPhoto, setGalleryPhoto] = useState(0);
    const { image } = GalleryData[galleryPhoto];

    const previousPhoto =() => {
        setGalleryPhoto((galleryPhoto => {
            galleryPhoto --;
            if (galleryPhoto <0) {
                galleryPhoto = GalleryData.length -1
            }
            return galleryPhoto
        }))
    }

    const nextPhoto = () => {
        setGalleryPhoto((galleryPhoto => {
            galleryPhoto ++;
            if (galleryPhoto > GalleryData.length -1) {
                galleryPhoto = 0
            }
            return galleryPhoto
        }))
    }

    return(
        <div className="about-container">
            <div className="title-container">
                <h2 className="title-text cormorant-light">Галерея</h2>
                <div className="line-title"></div>
            </div>

            <div className="gallery-wrapper">
                 <button onClick={previousPhoto} className="gallery-btn lora-regular">
                    <div className="arrow-icon flipped">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="#0f4336"
                         strokeWidth="1.5"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         >
                        <path d="M7.5 3l9 9-9 9" />
                      </svg>
                    </div>
                </button>

            <div className="gallery-image-container">
                <img className="gallery-image" src={image} alt="study photos" />
            </div>

            {/* <div className="gallery-btn-container"> */}
               
    
               <button onClick={nextPhoto} className="gallery-btn lora-regular">
                    <div className="arrow-icon ">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="#0f4336"
                         strokeWidth="1.5"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                        >
                        <path d="M7.5 3l9 9-9 9" />
                      </svg>
                     </div>
             </button>
            </div>
            </div>
       
    )
}
export default Gallery;