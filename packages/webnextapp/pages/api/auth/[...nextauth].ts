import NextAuth from 'next-auth';
import IdentityServer4Provider from 'next-auth/providers/identity-server4';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

const oauth2 = 'https://localhost:5001';

export const authOptions: any = {
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),
    // Github Provider
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
    // Identity Server Provider
    IdentityServer4Provider({
      id: 'identity-server4',
      name: 'IdentityServer4',
      issuer: process.env.IdentityServer4_ISSUER,
      clientId: 'oauthClient',
      clientSecret: 'secret',
      //   checks: ["pkce"],
      accessTokenUrl: `${oauth2}/connect/token`,
      profileUrl: `${oauth2}/connect/userinfo`,
      authorization: {
        params: {
          scope: 'openid profile ApiOneScope',
          redirect_uri: 'http://localhost:3000/api/auth/callback/identity-server4',
          response_type: 'code',
          grant_type: 'authorization_code',
        },
      },
      profile(profile) {
        // console.log({ profile });
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          role: profile.role,
        };
      },
    }),
  ],
  secret: 'XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=',
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token, user }: any) {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }: any) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
