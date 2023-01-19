import Page from "@/components/page";
import { Loader } from "@/components/dynamic";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
      const [show, setShow] = useState(false);

      async function handleIdentityServerSignin() {
            await signIn("identity-server4", {
                  callbackUrl: "http://localhost:3000",
            });
      }

      useEffect(() => {
            handleIdentityServerSignin();
      }, []);

      return (
            <Page className="flex h-screen">
                  <Loader />
            </Page>
      );
}

export async function getServerSideProps() {
      return {
            props: {}, // will be passed to the page component as props
      };
}
