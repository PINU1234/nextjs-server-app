import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
export const authOptions = {
    providers:[
        GithubProvider({
            clientId:'Ov23liMso9gyO7oOT4j1',
            clientSecret:'8aad0389daacd6d09a299b85874696095358336d'
        })
    ]
}

export default NextAuth(authOptions);