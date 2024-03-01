import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
query PostsQuery {
    posts {
      nodes {
        id
        date
        title
        content
      }
    }
  }
`;

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