import React from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import useRouteStore from '../../providers/route.store';

import SvgIcon from '../SvgIcon';
import styles from './BannerHeader.module.scss';

export interface BannerHeaderProps {
  title?: String;
  subTitle?: String;
  isHeaderBoxTogglerVisible?: boolean;
}

const BannerHeader = (props: BannerHeaderProps) => {
  const toggleHeaderBox = useRouteStore((state: any) => state.toggleHeaderBox);
  const uri = window.location.pathname;
  const headerBoxes = useRouteStore((state: any) => state.headerBoxes);

  const isVisible = React.useMemo(() => headerBoxes.some((c) => uri.includes(c.uri) && c.visible), [headerBoxes, uri]);

  return (
    <div className={`${styles.header} flex flex-1 flex-col relative justify-center`}>
      <div className={styles.content}>
        <h1 className={`${styles.title} text-white m-0 p-0 flex flex-row`}>
          {/* <img alt="FsxSquares" src={ImageResources.FsxSquareThumb} className={styles.image} /> */}
          {props.title}
        </h1>
        <h5 className={`${styles.subtext} text-white p-0 mx-0 mb-0`}>{props.subTitle}</h5>
      </div>
      {props.isHeaderBoxTogglerVisible && (
        <button
          className={`${styles.toggle} absolute flex items-center justify-center w-10 h-10 bg-fsx-yellow shadow-md rounded-full z-10`}
          onClick={() => toggleHeaderBox(uri)}
          title="Toggle header box"
        >
          <AiFillCaretUp
            size={16}
            fill="white"
            style={{ transform: `translate(1px,-1px) rotate(${isVisible ? 0 : 180}deg)` }}
          />
        </button>
      )}
    </div>
  );
};

export default BannerHeader;
