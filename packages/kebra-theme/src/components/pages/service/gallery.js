import {Fancybox } from "@fancyapps/ui";
import Image from "@frontity/components/image";

const Gallery = (props) => {
        let gallery = [] ;
        props.data.map((galleryItem, indexParent) => {
                galleryItem.source.map((img, index) => {
                        gallery.push( {
                                src:img.src,
                                thumbnail: img.thumbnail,
                        });
                });
        });
        function showModal(e, index){
                e.preventDefault();
                Fancybox.show(gallery, {
                        startIndex: index
                });
        }
        return(
                <>
                        {
                                props.data.map((galleryItem, indexParent) => {
                                return(
                                        <div className={galleryItem.itemClass} key={indexParent}>
                                                <div className="wrapper">
                                                        <div className="rowflex">
                                                                {galleryItem.source.map((imageItem, indexChild) => {
                                                                        return(
                                                                                <figure key={indexChild}>
                                                                                        <a href="#" onClick={(e) => showModal(e, imageItem.index)}><Image src={imageItem.thumbnail} /></a>
                                                                                </figure>
                                                                        )        
                                                                })}
                                                        </div>
                                                </div>
                                        </div>
                                )
                        })}
                </>
        )
}

export default Gallery;