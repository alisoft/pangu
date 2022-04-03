import type { App } from "vue";
import {
  HeartOutlined,
  HistoryOutlined,
  FormOutlined,
  TableOutlined,
  AppstoreAddOutlined,
  UnorderedListOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  HomeOutlined,
  LinkOutlined,
} from "@ant-design/icons-vue";

export const useIcons = (app: App): App => {
  return app
    .component(HeartOutlined.displayName, HeartOutlined)
    .component(HistoryOutlined.displayName, HistoryOutlined)
    .component(FormOutlined.displayName, FormOutlined)
    .component(TableOutlined.displayName, TableOutlined)
    .component(AppstoreAddOutlined.displayName, AppstoreAddOutlined)
    .component(UnorderedListOutlined.displayName, UnorderedListOutlined)
    .component(WarningOutlined.displayName, WarningOutlined)
    .component(CheckCircleOutlined.displayName, CheckCircleOutlined)
    .component(HomeOutlined.displayName, HomeOutlined)
    .component(LinkOutlined.displayName, LinkOutlined);
};
