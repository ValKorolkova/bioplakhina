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
            <div className="gallery-image-container">
                <img className="gallery-image" src={image} alt="study photos" />
            </div>
            <div className="gallery-btn-container">
                <button onClick={previousPhoto} className="gallery-btn lora-regular">Предыдущая фотография</button>
                <button onClick={nextPhoto} className="gallery-btn lora-regular">Следующая фотография</button>
            </div>
        </div>
    )
}
export default Gallery;