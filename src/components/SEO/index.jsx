import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Helmet } from "react-helmet-async";



const SETTINGS_QUERY  = gql`
query SettingsQuery {
    writingSettings {
      defaultCategory
      defaultPostFormat
      useSmilies
    }
    allSettings {
      generalSettingsTitle
      generalSettingsDescription
      generalSettingsUrl
    }
  }

`;

const SEO = ({ title, description, canonical, robots }) => {
    const { loading, error, data } = useQuery(SETTINGS_QUERY);

    const settings = data?.allSettings;

    if (loading) {
        return <p>Carregando</p>
    }
    if (error) {
        return <p>Error</p>
    }

    const titlePage = title ? title : settings.generalSettingsTitle;
    const descPage = description ? settings.generalSettingsDescription : description;
    const canonicalPage = canonical ? canonical :  settings.generalSettingsUrl; 
    const robotsPage = robots ? robots : "index, follow";
    
    return(
        <Helmet>
            <title>{titlePage}</title>
            <meta name="description" content={descPage} />
            <meta name="theme-color" content="#FF0000"/>
            <meta name="robots" content={robotsPage}/>
            <link rel="canonical" href={canonicalPage} />
            <meta property="og:title" content={titlePage} />
            <meta property="og:description" content={descPage} />

            { /* End Twitter tags */ }
        </Helmet>
    )
}

export default SEO;