import { connect } from 'frontity';
import Link from '@frontity/components/link';

const Footer = ({state, libraries}) => {
        const themeOpt = state.theme.options.data;
        const Html2React = libraries.html2react.Component;
        return (
                <>
                        <footer id="bottom">
                                <div className="footer-widget">
                                        <div className="wrapper">
                                                <div className="rowflex">
                                                        <div className="col">
                                                                <div className="widget widget_social">
                                                                        {themeOpt.logoTxt != '' && <h3 className="widget-title">{themeOpt.logoTxt}</h3>}
                                                                        {themeOpt.slogan != '' && <strong>{themeOpt.slogan}</strong>}
                                                                        {themeOpt.social.length > 0 &&
                                                                                <div className="sc">
                                                                                        <small>Connect with us.</small>
                                                                                        <div className="wrap">
                                                                                                {themeOpt.social.map((item, index) => {
                                                                                                        return (
                                                                                                                item.url != '' && <a key={index} href={item.url} className={"cvr-bg " +item.id}></a>
                                                                                                        )
                                                                                                })}
                                                                                        </div>
                                                                                </div>
                                                                        }
                                                                </div>
                                                        </div>

                                                        {themeOpt.menu.company.length > 0 &&
                                                                <div className="col">
                                                                        <div className="widget">
                                                                                <h3 className="widget-title">Company</h3>
                                                                                <ul>
                                                                                        {themeOpt.menu.company.map((item, index) => {
                                                                                                return <li key={index}><Link link={item.slug}>{item.title}</Link></li>
                                                                                        })}
                                                                                </ul>
                                                                        </div>
                                                                </div>
                                                        }

                                                        {themeOpt.menu.about.length > 0 &&
                                                                <div className="col">
                                                                        <div className="widget">
                                                                                <h3 className="widget-title">About</h3>
                                                                                <ul>
                                                                                        {themeOpt.menu.about.map((item, index) => {
                                                                                                return <li key={index}><Link link={item.slug}>{item.title}</Link></li>
                                                                                        })}
                                                                                </ul>
                                                                        </div>
                                                                </div>
                                                        }

                                                        {themeOpt.menu.solution.length > 0 &&
                                                                <div className="col">
                                                                        <div className="widget">
                                                                                <h3 className="widget-title">Solutions</h3>
                                                                                <ul>
                                                                                        {themeOpt.menu.solution.map((item, index) => {
                                                                                                return <li key={index}><Link link={item.slug}>{item.title}</Link></li>
                                                                                        })}
                                                                                </ul>
                                                                        </div>
                                                                </div>
                                                        }

                                                        {themeOpt.link.length > 0 && 
                                                                <div className="col">
                                                                        <div className="widget widget_link">
                                                                                {themeOpt.link.map((item, index) => {
                                                                                        return(
                                                                                                <a key={index} href={item.id == 'ml' ? 'mailto:'+item.url : 'https://'+item.url} className={"cvr-bg-bf ic-"+item.id}>{item.url}</a>
                                                                                        )     
                                                                                })}
                                                                        </div>
                                                                </div>
                                                        }
                                                </div>
                                        </div>
                                </div>
                                {themeOpt.office.length > 0 && 
                                        <div className="location">
                                                <div className="wrapper">
                                                        <div className="rowflex">
                                                                {themeOpt.office.map((item, index) => {
                                                                        return(
                                                                                <div key={index} className="widget widget_location">
                                                                                        {item.loc != '' && <h3>{item.loc}</h3>}
                                                                                        {item.addr != '' && <Html2React html={item.addr} />}
                                                                                </div>
                                                                        )
                                                                })}
                                                        </div>
                                                </div>
                                        </div>
                                }

                                <div className="tribute">
                                        <div className="wrapper clearfix">
                                                {themeOpt.copy != '' && <p>{themeOpt.copy}</p>}
                                                {themeOpt.menu.footer.length > 0 &&
                                                        <ul>
                                                                {themeOpt.menu.footer.map((item, index) => {
                                                                        return <li key={index}><Link link={item.slug}>{item.title}</Link></li>
                                                                })}
                                                        </ul>
                                                }
                                        </div>
                                </div>

                        </footer>
                </>
        )
}

export default connect(Footer);