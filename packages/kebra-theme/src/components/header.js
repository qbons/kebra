import { connect } from 'frontity';
import Link from '@frontity/components/link';

const Header = ({state,actions}) => {
        const req = state.source.get(state.router.link);
        const themeOpt = state.theme.options.data;
        function toggleMenu(e){
                e.preventDefault();
                actions.theme.toggleMobileMenu();
        }
        return(
                <>
                        <header id="top">
                                <div className="wrapper clearfix">
                                        <div className="logo">
                                                <Link link="/"><img src={themeOpt.logo} width="260"/></Link>
                                        </div>
                                        <div className="mobile-trigger"><a href="#" className="menu-mobile" onClick={toggleMenu}><span className="menu-bar"><b></b></span></a></div>
                                        {themeOpt.menu.header.length > 0 &&
                                                <div className="mainmenu clearfix">
                                                        <ul>
                                                                {themeOpt.menu.header.map((item, index) => {
                                                                        let classes = req[item.marker] ? 'current-menu-item ' : '';
                                                                        if(item.classes.length > 0){
                                                                                item.classes.map((cls,idx) => {
                                                                                        classes +=  cls ;
                                                                                });
                                                                        }
                                                                        return (
                                                                                <li key={index} className={classes}><Link link={item.slug} onClick={actions.theme.toggleMobileMenu}>{item.title}</Link></li>
                                                                        )
                                                                })}
                                                        </ul>
                                                </div>
                                        }
                                </div>
                        </header>
                </>
        )
}

export default connect(Header);