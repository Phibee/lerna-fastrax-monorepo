import { RouteItemProps } from '../types/RouteItemProps';
import produce from 'immer';
import { isEmpty, map } from 'lodash';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface HeaderBoxTogglePerModule {
  module: string;
  uri: string;
  visible?: boolean;
}

export type SettingStore = {
  headerBoxes: HeaderBoxTogglePerModule[];
  loadHeaderBox: (routes: RouteItemProps[]) => void;
  toggleHeaderBox: (uri: string) => void;
};

const useRouteStore = create(
  persist(
    (set, get) => ({
      headerBoxes: [],
      loadHeaderBox: (routes) =>
        set((state) =>
          produce(state, (draft) => {
            if (!isEmpty(draft.headerBoxes)) return;

            draft.headerBoxes = mapRoutesWithHeaderBox(routes);
          }),
        ),
      toggleHeaderBox: (uri) =>
        set((state) =>
          produce(state, (draft) => {
            const indx = state.headerBoxes.findIndex((c) => uri.includes(c.uri));

            if (indx >= 0) {
              draft.headerBoxes[indx] = {
                ...state.headerBoxes[indx],
                visible: !state.headerBoxes[indx].visible,
              };
            }
          }),
        ),
    }),
    {
      name: 'user-route-store',
    },
  ),
);

export default useRouteStore;

/**
 *
 * @param routes
 */
function mapRoutesWithHeaderBox(routes: RouteItemProps[]) {
  const headerBoxes = routes.filter((c) => c.meta?.headerBoxTogglerEnable);

  if (!isEmpty(headerBoxes))
    return map(headerBoxes, (h) => ({
      module: h.name,
      uri: h.uri,
      visible: true,
    })) as HeaderBoxTogglePerModule[];

  return [];
}
