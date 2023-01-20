import React from 'react';
import styled from 'styled-components';

import _ from 'lodash';

const BannerControlsWrapperStyled = styled.div`
  display: flex;
  background: #333333;
`;

const BannerControlsStyled = styled.div`
  display: flex;
  background: white;
  border-top-left-radius: 25px;
  padding: 8px 15px;
  flex-direction: column;
  min-width: 280px;
`;

export interface BannerControlsProps {}

const BannerControls: React.FC<BannerControlsProps> = () => {
  return (
    <BannerControlsWrapperStyled id="banner_control">
      <BannerControlsStyled>
        <div className="flex flex-row items-center mb-2">
          <div className="w-col w-1/3">Group</div>
          <div className="w-col w-2/3">
            <label>SAMPLE</label>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-col w-1/3">Location</div>
          <div className="w-col w-2/3">
            {/* <DropDownList
              style={{ width: '100%' }}
              data={project.projectSites}
              value={selected}
              disabled={(project?.projectSites || []).length <= 1}
              textField="title"
              onChange={(e) => {
                dispatch(changeProjectSite(e.target.value['id']));
                checkSelected();
              }}
            /> */}
          </div>
        </div>
      </BannerControlsStyled>
    </BannerControlsWrapperStyled>
  );
};

export default React.memo(BannerControls);
