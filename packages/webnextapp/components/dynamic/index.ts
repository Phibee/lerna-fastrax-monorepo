import dynamic from "next/dynamic";

// Button
export const Button = dynamic(
      () => {
            return import("shared/src/components/Button");
      },
      { ssr: false }
);

// Aside
export const Aside = dynamic(
      () => {
            return import("shared/src/components/Aside");
      },
      { ssr: false }
);

export const Loader = dynamic(
      () => {
            return import("shared/src/components/Loader");
      },
      { ssr: false }
);

export default { Aside, Button, Loader };
