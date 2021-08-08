import useInView from "@frontity/hooks/use-in-view";

const Loadmore = (props) => {
        const { ref, inView } = useInView({ triggerOnce: true });
        if(inView && props.state.theme.blog.data.pagination.next != null){
                props.state.theme.blogProps.page = props.state.theme.blog.data.pagination.next;
                props.getBlog();
        }
        return(
                <div ref={ref}>Loadmore...</div>
        )
}

export default Loadmore;