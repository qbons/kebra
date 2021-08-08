
import { connect, css  } from 'frontity';

const SectionBlog = ({state}) => {
        const data = state.theme.blogSection.data;
        const blog = data.content;
        return(
                <>
                        {(typeof blog !== "undefined" && blog.length > 0) &&
                                <div className="blog-section">
                                        <div className="wrapper">
                                                <div className="rowflex">
                                                        {blog.map((item, index) => {
                                                                return(
                                                                        <div key={index} className="item">
                                                                                {item.img != '' && <figure><a href={item.url} target="_blank"  css={css`background-image: url('${item.thumb}')`}></a></figure>}
                                                                                <div className="caption">
                                                                                        {item.tags.length  > 0 ? <a href={data.blogURL+'search/?tag='+item.tags[0].slug} className="cat" target="_blank">{item.tags[0].name}</a> : <a>&nbsp;</a>}
                                                                                        <h3><a href={item.url} target="_blank">{item.title}</a></h3>
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })}
                                                </div>
                                        </div>
                                </div>
                        }
                </>
        )
}

export default connect(SectionBlog);