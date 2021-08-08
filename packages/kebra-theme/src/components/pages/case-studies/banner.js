import Image from "@frontity/components/image";

const Banner = (props) => {
        return(
                <>
                        {props.data.img != '' && 
                                <div className="banner">
                                        <div className="wrapper">
                                                <figure>
                                                        <Image src={props.data.img} />
                                                </figure>
                                        </div>
                                </div>
                        }
                </>
        )
}

export default Banner;