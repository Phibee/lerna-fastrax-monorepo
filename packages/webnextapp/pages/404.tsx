import React from "react";
import Image from "next/image";
import Page from "../components/page";
import { useRouter } from "next/router";
import { Button } from "@/components/dynamic";

export const PageNotFound: React.FC<{}> = () => {
      const router = useRouter();

      return (
            <Page className="flex h-screen flex-col justify-center">
                  <div className="inline-flex flex-grow items-end pb-3">
                        <Image
                              alt="Page Not Found"
                              width="400"
                              height="400"
                              src={"/assets/error-404-page.svg"}
                              className="mx-auto"
                        />
                  </div>
                  <div className="flex-grow">
                        <h1 className="font-sans text-center text-5xl mb-5 font-bold">
                              Page Not Found
                        </h1>
                        <h2 className="font-sans text-center text-xl text-gray-400">
                              We're sorry, the page you requested could not be
                              found.
                        </h2>
                        <div className="flex justify-center mt-5">
                              <Button
                                    ripple
                                    shadow
                                    variant="success"
                                    onClick={() => router.push("/")}
                              >
                                    Go to Home Page
                              </Button>
                        </div>
                  </div>
            </Page>
      );
};

export default PageNotFound;
