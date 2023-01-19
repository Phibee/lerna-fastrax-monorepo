import React from "react";
import styled from "styled-components";

export interface AsideProps {
      position?: "right" | "left";
      width?: Number;
      className?: string;
      flat?: boolean;
      children?: React.ReactNode;
}

const StyledAside = styled.aside<AsideProps>`
      ${(props) => (props.flat ? "display: flex; flex: 1;" : "height: 100vh;")}
      flex: 0 0 auto;
      max-width: 300px;
      order: ${(props) => (props.position === "right" ? 1 : 0)};
      width: ${(props) => (props.width ? props.width + "px" : "15em")};
`;

export const Aside = ({ className, children, ...props }: AsideProps) => {
      return (
            <>
                  <StyledAside
                        {...props}
                        className={`flex flex-col  ${className ?? ""}`}
                  >
                        {children}
                  </StyledAside>
            </>
      );
};

export default Aside;
