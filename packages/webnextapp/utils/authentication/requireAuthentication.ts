import { authOptions } from "@/pages/api/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export const requireAuthentication = async (context: any, cb: any) => {
      const session = await getSession(context);

      if (!session) {
            /**
             * to force deletion of cookies
             * coz though sign-out using signOut Function (https://next-auth.js.org/getting-started/client#signout) is called
             * it is still retain authenticated data and will not redirected to login page such as Identity Server 4 Login Page
             */
            context.res.setHeader("Set-Cookie", [
                  `next-auth.session-token.0=deleted; Max-Age=0; path=/`,
                  `next-auth.session-token.1=deleted; Max-Age=0; path=/`,
                  `idsrv.session=deleted; Max-Age=0; path=/`,
                  `next-auth.csrf-token=deleted; Max-Age=0; path=/`,
                  `.AspNetCore.Identity.Application=deleted; Max-Age=0; path=/`,
            ]);

            return {
                  redirect: {
                        destination: "/login",
                        permanent: false,
                  },
            };
      }

      return cb({ session });
};
