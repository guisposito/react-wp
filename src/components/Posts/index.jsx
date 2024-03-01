import { useQuery } from "@apollo/react-hooks";
import { POSTS_QUERY } from "../../api/queries";

const Posts = () => {
    const { loading, error, data } = useQuery(POSTS_QUERY);
    if (loading) {
        return <p>Carregando</p>
    }
    if (error) {
        return <p>Error</p>
    }

    const posts = data?.posts.nodes;

    return (
        posts.map(({ id, date, title, content }) => {
            return(
            <div key={id}>
                <span>{date}</span>
                <span>{title}</span>
                <span>{content}</span>
            </div>
            )
        })
    )

}

export default Posts;