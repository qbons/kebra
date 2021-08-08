import Image from "@frontity/components/image";

const Team = (props) => {
        const Html2React = props.libraries.html2react.Component;
        return(
                <div className="rowflex">
                        {props.team.map((item,index) => {
                                return( 
                                        <div key={index} className="item">
                                                {item.img != '' && <figure><Image src={item.img} /></figure>}
                                                <div className="caption">
                                                        {item.name != '' && <h3>{item.name}</h3>}
                                                        {item.occ != '' && <span>{item.occ}</span>}
                                                        {item.text != '' &&
                                                                <div className="txt">
                                                                        <Html2React html={item.text} />
                                                                </div>
                                                        }
                                                </div>
                                                <div className="soc">
                                                        {item.linkedin != '' && <a href={item.linkedin} className="cvr-bg in"></a> }
                                                        {item.email != '' && <a href={"mailto:" + item.email} className="cvr-bg ml"></a> }
                                                </div>
                                        </div>
                                )     
                        })}
                </div>
        )
}

export default Team;