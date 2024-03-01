import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Helmet } from "react-helmet";


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
    }
  }

`;

const Head = () => {
    const { loading, error, data } = useQuery(SETTINGS_QUERY);

    const settings = data?.allSettings;

    if (loading) {
        return <p>Carregando</p>
    }
    if (error) {
        return <p>Error</p>
    }

    return(
        <Helmet>
            <title>{settings.generalSettingsTitle}</title>
            <meta name="description" content={settings.generalSettingsDescription} />
            <meta name="theme-color" content="#FF0000"/>
        </Helmet>
    )
}

export default Head;