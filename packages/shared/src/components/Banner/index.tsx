import React from 'react';

import BannerHeader from '../BannerHeader';
import BannerControls from '../BannerControl';
import styles from './Banner.module.scss';

export interface BannerProps {
  title: string;
  subTitle?: string;
  isHeaderBoxTogglerVisible?: boolean;
}

const Banner = ({ title, subTitle, isHeaderBoxTogglerVisible }: BannerProps) => {
  return (
    <div className={`${styles.container} flex flex-row flex-grow-0 flex-shrink-0`} id="banner_area">
      <BannerHeader title={title} subTitle={subTitle} isHeaderBoxTogglerVisible={isHeaderBoxTogglerVisible} />
      <BannerControls />
    </div>
  );
};

export default Banner;
