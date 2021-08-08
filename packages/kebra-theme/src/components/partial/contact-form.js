import { connect } from 'frontity';

const ContactFormHeader = (props) => {
        const data = props.data.contact;
        return(
                <div className="hentry">
                        {data.subtitle != '' && <b>{data.subtitle}</b>}
                        {data.title != '' && <h2>{data.title}</h2>}
                        {data.text != '' && <p>{data.text}</p>}
                </div>
        )
}

export {ContactFormHeader}

const ContactForm = ({state, libraries}) => {
        const themeOpt = state.theme.options.data;
        const Html2React = libraries.html2react.Component;        
        return (
                <>
                        <div className="form-basic">
                                <Html2React html={themeOpt.contact.form} />
                        </div>
                </>
        )
}

export default connect(ContactForm);