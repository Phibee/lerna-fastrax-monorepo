import React, { ReactNode, useEffect, useState } from 'react';
import { FooterControl } from '@/src';
import styled from 'styled-components';

interface IProps {
  children?: ReactNode;
}

const FooterStyled = styled.div<IProps>`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0 !important;
  flex-direction: row;
  height: 44px;
  justify-content: space-between;
  background: #4e4e4e;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  padding-left: 48px;
  padding-right: 32px;
`;

const FooterWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  min-height: 40px;
  align-items: baseline;
`;

export const Index: React.FC<IProps> = (props) => {
  const [InProgress, SetInProgress] = useState(false);

  return (
    <FooterWrapperStyled>
      <FooterStyled {...props}>
        <div className="flex items-center">
          <span className="text-white text-sm" style={{ color: '#e3e3e3' }}>
            STATUS:
          </span>
          <span className="text-white ml-2 text-base">Ready</span>
        </div>
        <div className="progress-bar flex flex-row items-center">
          {/* 
          TODO: Progress Bar
          <ProgressBar loading={InProgress} /> */}
        </div>
        {props.children}
      </FooterStyled>
      <FooterControl />
    </FooterWrapperStyled>
  );
};

export default React.memo(Index);
