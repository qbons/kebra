import Image from "@frontity/components/image";

const Banner = (props) => {
        const item = props.data;
        return(
                <div className="banner">
                        <div className="wrapper">
                                <figure><Image src={item.img} /></figure>
                        </div>
                </div>
        )
}
export default Banner;