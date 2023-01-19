import React from "react";
import Lottie from "react-lottie";

import clx from "classnames";
import preloaderData from "./preloader2.json";

export interface LoaderProps {
      /**
       * Text below the loader.
       */
      text?: string;
      /**
       * Text color.
       */
      textColor?: string;
      /**
       * Sets container to full height.
       */
      fullHeight?: boolean;
      /**
       * Sets container to full width.
       */
      fullWidth?: boolean;
      /**
       * Children node.
       */
      children?: React.ReactNode;
}

/**
 * Custom loader component made from lottie.
 */
const Loader = ({
      text,
      textColor,
      fullHeight = true,
      fullWidth = true,
}: LoaderProps) => {
      const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: preloaderData,
      };

      const classnames = clx(`flex flex-col items-center justify-center`, {
            "w-full": fullWidth,
            "h-full": fullHeight,
      });

      return (
            <div
                  className={`flex flex-col items-center justify-center ${classnames}`}
            >
                  <Lottie
                        ariaRole="unset"
                        options={defaultOptions}
                        height={60}
                        isClickToPauseDisabled
                  />
                  <h3
                        className="text-center"
                        style={{ color: textColor || "" }}
                  >
                        {text}
                  </h3>
            </div>
      );
};

export default Loader;
