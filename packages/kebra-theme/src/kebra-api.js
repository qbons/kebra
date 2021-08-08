const KebraAPI = (props) => {
        return [
                {
                        // HOMEPAGE
                        pattern: "/",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebra-api/v1/homepage`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHomepage: true });
                        }
                }, 
                {
                        // PAGE
                        pattern: "/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebra-api/v1/page/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option,[option.data.marker]: true });
                        }
                }, 
                {
                        // SINGLE CASE STUDY
                        pattern: "/case-study/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebra-api/v1/case-study/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isCaseStudySingle : true });
                        }
                }, 
                {
                        // SINGLE SERVICE
                        pattern: "/service/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebra-api/v1/service/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isServiceSingle : true });
                        }
                }, 
                {
                        // THEME OPTION
                        pattern: "option",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebra-api/v1/option`
                                });
                                state.theme.options = await response.json();
                        }
                }, 
        ];
}

export default KebraAPI;