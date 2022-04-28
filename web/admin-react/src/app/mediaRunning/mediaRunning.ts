import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { PostDataType } from "data/types";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export interface MediaRunningState {
  postData?: PostDataType;
  state?: "loading" | "playing" | "paused" | "ended" | null;
  player: {
    durationSeconds: number;
    playedSeconds: number;
    played: number;
    loaded: number;
    volume: number;
    playbackRate: 1 | 2 | 1.5;
    muted: boolean;
  };
  newestAudioPlayerUrl?: string;
}

let initPlayer: MediaRunningState["player"] = {
  durationSeconds: 0,
  playedSeconds: 0,
  played: 0,
  loaded: 0,
  volume: 0.5,
  playbackRate: 1,
  muted: false,
};

const initialState: MediaRunningState = {
  player: initPlayer,
};

type KeysOfPlayerData = {
  [K in keyof MediaRunningState["player"]]?: MediaRunningState["player"][K]; // so that it retains the types
};

type ChangeCurrentMedia = Pick<MediaRunningState, "postData" | "state">;

export const mediaRunningSlice = createSlice({
  name: "mediaRunning",
  initialState,
  reducers: {
    changeCurrentMediaRunning: (
      state,
      action: PayloadAction<ChangeCurrentMedia>
    ) => {
      return {
        ...state,
        ...action.payload,
        player: {
          ...state.player,
          playedSeconds: 0,
          played: 0,
          loaded: 0,
          playbackRate: 1,
          durationSeconds: 0,
        },
      };
    },
    changeStateMediaRunning: (
      state,
      action: PayloadAction<MediaRunningState["state"]>
    ) => {
      return {
        ...state,
        state: action.payload,
      };
    },
    removeMediaRunning: (state) => {
      return {
        player: initPlayer,
      };
    },

    changeNewestAudioPlayerUrl: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        newestAudioPlayerUrl: action.payload,
      };
    },
    //
    changeDataPlayerMediaRunning: (
      state,
      action: PayloadAction<KeysOfPlayerData>
    ) => {
      return {
        ...state,
        player: {
          ...(state.player || {}),
          ...action.payload,
        },
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeCurrentMediaRunning,
  changeStateMediaRunning,
  changeDataPlayerMediaRunning,
  removeMediaRunning,
  changeNewestAudioPlayerUrl,
} = mediaRunningSlice.actions;

export const selectCurrentAudioUrl = (state: RootState) =>
  state.mediaRunning.postData?.audioUrl;

export const selectCurrentMediaState = (state: RootState) =>
  state.mediaRunning.state;

export const selectCurrentMediaPostData = (state: RootState) =>
  state.mediaRunning.postData;

export const selectCurrentMediaPlayerData = (state: RootState) =>
  state.mediaRunning.player;

export const selectNewestAudioPlayerUrl = (state: RootState) =>
  state.mediaRunning.newestAudioPlayerUrl;

const persistConfig = {
  key: "mediaRunning",
  storage: storage,
  blacklist: ["newestAudioPlayerUrl"],
};

export default persistReducer(persistConfig, mediaRunningSlice.reducer);

// export default mediaRunningSlice.reducer;
