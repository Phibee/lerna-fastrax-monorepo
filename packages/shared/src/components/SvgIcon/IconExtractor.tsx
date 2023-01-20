export interface IconType {
  name: string;
  path: string[];
  tags: string[];
}

export const iconList = (iconSet: any): IconType[] => {
  const list: IconType[] = [];
  iconSet.icons.forEach((icon: any, indx: number) => {
      list.push({
        name: icon.properties.name,
        path: icon.icon.paths,
        tags: icon.icon.tags,
      });
  });
  return list;
};

export default iconList;
