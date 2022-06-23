import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4psknbo290m01xthmfu6oz2/master',
    cache: new InMemoryCache()
})