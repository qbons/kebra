import { connect, fetch, css  } from 'frontity';
import { useState, useRef } from "react";
import Loadmore from './loadmore';

const parseLoadMore = (rawBlog) => {
	let blogs = [];
	rawBlog.map((item, index) => {
		const blog = {
			id:item.id,
			title:item.title,
			tags: item.tags,
			thumb:item.thumb,
			slug:item.slug,
			date:item.date,
			url:item.url,
		};
		blogs.push(blog);
	});
	return blogs;
}
const Blog = ({ state, actions, libraries }) => {
	const req = state.source.get(state.router.link);
        const content = req.data.content;
	const data = state.theme.blog.data;
	const userEmail = useRef();
	const [isLoading, setLoading] = useState(false);
	const [blog, setLoadedBlog] = useState(parseLoadMore(data.content));
	const [blogCategory, setBlogCategory] = useState([]);

	async function submitSubscribe(e) {
                e.preventDefault();
		setLoading(true);
		const url = state.frontity.url + '/wp-json/kebra-api/v1/subscribe/';
		const enteredEmail = userEmail.current.value;
		const response = await fetch(url, {
			crossDomain:true,
			method: 'POST',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				email: enteredEmail
			})
		});
		const data = await response.json();
		setLoading(false);
		alert(data.msg);
        }
	async function getBlog(){
		setLoading(true);
		const res = await actions.theme.fetchBlog();
		state.theme.blogProps.page == 1 ? setLoadedBlog(parseLoadMore(state.theme.blog.data.content)) : setLoadedBlog([...blog,...state.theme.blog.data.content]);
		setLoading(false);
	}
	function submitCategory(e,props) {
		if (e.target.checked) {
			blogCategory.push(props);
		}else{
			let index = blogCategory.indexOf(props);
			if (index !== -1) {
				blogCategory.splice(index, 1);
			}
		}
		setBlogCategory(blogCategory);
		state.theme.blogProps.cats = blogCategory;
		state.theme.blogProps.page = 1;
		getBlog();
        }
	return (
		<>
			<div className={isLoading ? "inner-blog fetching" : "inner-blog" }>
				
				<div className="wrapper">
					<div className="subscribe">
						{content.subtitle != '' &&<span>{content.subtitle}</span>}
						{content.title != '' && <h2>{content.title}</h2>}
						<form id="form-subscribe" onSubmit={submitSubscribe} >
							<input type="email" name="email" placeholder="Enter your email to subscribe" required="required" ref={userEmail} />
							<button type="submit" className="cvr-bg" ></button>
						</form>
					</div>
					{content.category.length > 0 &&
						<div className="filter-cat">
							<span>Category</span>
							<div className="scrollx">
								<div className="wrap">
									{content.category.map((item, index) => {
										return(
											<label key={index}>
												{item.name}
												<input type="checkbox" name="cats[]" value={item.slug} className="blog-filter-param type-checkbox" onChange={ (e) => submitCategory(e, item.slug)} />
												<b></b>
											</label>
										)
									})}
								</div>
							</div>
						</div>
					}
					<div className="search">
						<form method="GET" action={content.search} target="_blank">
							<label> Do you have a certain topic you want to find out?</label>
							<fieldset>
								<input type="text" placeholder="Search here" required="required" name="query" />
								<button type="submit" className="cvr-bg"></button>
							</fieldset>
						</form>
					</div>
					{blog.length > 0 &&
						<div className="blog-list rowflex">
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
					}
					{ !isLoading && <Loadmore state={state} getBlog={getBlog} /> }
				</div>
			</div>
		</>
	);
};

export default connect(Blog);
