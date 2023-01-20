import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import amsIcon from "./ams-icons.svg";
import {iconList} from './IconExtractor';
import selectionJS from './selection.json';
export interface ISvgIconProps {
  svgId: string; // Id from Svg Sprite
  size: number;
  svgSprite?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  svgPath?: boolean;
  id?: string;
}

const SvgIconStyled = styled.svg<ISvgIconProps>``;

export const Index: React.FC<ISvgIconProps & React.HTMLAttributes<HTMLOrSVGElement>> = ({ children, ...props }) => {
    const [iconPath, setIconPath] = useState<any>(null);
    const scaleXY = 'scale(' + props.size / 1024 + ',' + props.size / 1024 + ')';
  
    useLayoutEffect(() => {
      const allIcons = iconList(selectionJS);
      const currentIcon = allIcons.filter(c => c.name === props.svgId)[0];
      setIconPath(currentIcon ?  currentIcon?.path : []);
    }, [props.svgId]);
    
  return (
    <SvgIconStyled
      {...props}
      width={props.size}
      height={props.size}
      fill={props.color}
      className={props.className}
      id={props.id}
    >
      <use xlinkHref={(props.svgSprite || amsIcon) + "#icon-" + props.svgId} />
    </SvgIconStyled>
  );
};

export default Index;
