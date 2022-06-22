import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oejpso23ke01xx93qa5tat/master',
    cache: new InMemoryCache()
})