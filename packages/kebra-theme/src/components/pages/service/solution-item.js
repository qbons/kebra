import  { useState } from 'react';
import SlideToggle from "react-slide-toggle";

const SolutionItem = (props) => {
        const [isActive, setActive] = useState(false);
        return(
                
                <div className={isActive ? "item active" : "item"}>
                        <SlideToggle
                                collapsed="true"
                                onExpanding={({ range, progress, hasReversed }) => {
                                        setActive(true);
                                }}
                                onCollapsing={({ range, progress, hasReversed }) => {
                                        setActive(false);
                                }}
                        >
                                {({ toggle, setCollapsibleElement }) => (
                                        <>
                                                <h3 className="cvr-bg-af"  onClick={toggle}>{props.title}</h3>
                                                <div className="holder" ref={setCollapsibleElement}>
                                                        <div className="wr">
                                                                {props.children}
                                                        </div>
                                                </div>
                                        </>
                                )}
                        </SlideToggle>
                </div>
        )
}
export default SolutionItem;