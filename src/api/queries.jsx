import { gql } from "apollo-boost";

export const POSTS_QUERY = gql`
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

export const SETTINGS_QUERY  = gql`
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

export const AUTHOR_QUERY =  gql`
query AuthorQuery {
    user(id: "1", idType: DATABASE_ID) {
      avatar {
        url
      }
      description
      firstName
      lastName
      nicename
      slug
      url
    }
  }
`;