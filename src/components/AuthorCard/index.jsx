import { useQuery } from "@apollo/react-hooks";
import { AUTHOR_QUERY } from "../../api/queries"; 

const AuthorCard = () => {
    const { loading, error, data } = useQuery(AUTHOR_QUERY);
    if (loading) {
        return <p>Carregando</p>
    }
    if (error) {
        return <p>Error</p>
    }
    const author = data?.user;
    const authorImg = author?.avatar;
    return(
        <div className="author-card">
            <img src={authorImg.url}  alt="" width={100} height={100} />
            <span>{author.firstName  + " " + author.lastName }</span>    
            <a href={author.url}>Minha pagina</a>      
        </div>
    )

}

export default AuthorCard;