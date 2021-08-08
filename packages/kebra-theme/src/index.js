import Root from "./components";
import KebraAPI from './kebra-api';
import { fetch  } from 'frontity';

const kebraTheme = {
	name: "kebra-theme",
	roots: {
		theme: Root,
	},
	state: {
		theme: {
			isMobileMenuOpen: false,
			autoPrefetch: 'in-view',
			blog: [],
			blogProps: {
				page: 1,
				cats: '',
				total: 12
			},
			blogSection: []
		},
	},
	actions: {
		theme: {
			toggleMobileMenu: ({state}) => {
				state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
				state.theme.isMobileMenuOpen ? document.body.classList.add('open-menu') : document.body.classList.remove('open-menu');
			},
			beforeSSR: async ({ state, actions }) => {
				await Promise.all([
					actions.source.fetch("option", {force: false}),
					actions.theme.fetchBlog(),
					actions.theme.fetchBlogSection()
				]);
			},
			fetchBlog: async ({ state, actions }) => {
				const url = state.frontity.url + '/wp-json/kebra-api/v1/blog/';
				const response = await fetch(url, {
					crossDomain:true,
					method: 'POST',
					headers: {'Content-Type':'application/json'},
					body: JSON.stringify(state.theme.blogProps)
				});
				const data = await response.json();
				state.theme.blog = data;
			},
			fetchBlogSection: async ({ state, actions }) => {
				const url = state.frontity.url + '/wp-json/kebra-api/v1/blog/';
				const response = await fetch(url, {
					crossDomain:true,
					method: 'POST',
					headers: {'Content-Type':'application/json'},
					body: JSON.stringify({
						page: 1,
						cats: '',
						total: 2
					})
				});
				const data = await response.json();
				state.theme.blogSection = data;
			}
		},
	},
	libraries: {
		source:{ 
			handlers: KebraAPI()
		}
	},
}
export default kebraTheme;