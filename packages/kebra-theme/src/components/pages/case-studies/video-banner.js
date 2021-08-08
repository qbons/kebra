import {Fancybox } from "@fancyapps/ui";
import Image from "@frontity/components/image";

const VideoBanner = (props) => {
        function showModal(e){
                e.preventDefault();
                Fancybox.show([{ 
                        src: props.data.video,
                        type: "html" 
                }]);
        }
        return(
                <>
                        {(props.data.img != '' && props.data.video != '') &&
                                <div className="banner">
                                        <div className="wrapper">
                                                <figure>
                                                        <a href="#" data-fancybox="" onClick={showModal}><Image src={props.data.img} /></a>
                                                </figure>
                                        </div>
                                </div>
                        }
                </>
        )
}

export default VideoBanner;