import React, {
  FC,
  LegacyRef,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  changeDataPlayerMediaRunning,
  changeStateMediaRunning,
  selectCurrentAudioUrl,
  selectCurrentMediaPlayerData,
  selectCurrentMediaState,
  selectNewestAudioPlayerUrl,
} from "app/mediaRunning/mediaRunning";
import PlayerContent from "./PlayerContent";
import _ from "lodash";
import usePrevious from "react-use/lib/usePrevious";
import ReactHtml5Player, { FilePlayerProps } from "react-player/file";
import ReactYoutubePlayer, { YouTubePlayerProps } from "react-player/youtube";

export interface MediaRunningContainerProps {
  className?: string;
}

const MediaRunningContainer: FC<MediaRunningContainerProps> = ({
  className = "",
}) => {
  const playerRef:
    | LegacyRef<ReactHtml5Player | ReactYoutubePlayer>
    | undefined = useRef(null);

  const currentAudioUrl = useAppSelector(selectCurrentAudioUrl);
  const mediaRunningState = useAppSelector(selectCurrentMediaState);
  const currentMediaPlayerData = useAppSelector(selectCurrentMediaPlayerData);
  const newestAudioPlayerUrl = useAppSelector(selectNewestAudioPlayerUrl);
  const prevAudioUrl = usePrevious(currentAudioUrl);
  const dispatch = useAppDispatch();

  const {
    durationSeconds,
    muted,
    playbackRate,
    played,
    playedSeconds,
    volume,
  } = currentMediaPlayerData;

  // STATE
  const [seeking, setSeeking] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFirtTimeSeekTo, setIsFirtTimeSeekTo] = useState(false);

  const IS_IOS =
    // @ts-ignore
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  // SELECT YOUR MEDIA SOURCE : HTML5(MP3, MP4) OR YOUTUBE OR BOTH
  let MEDIA_SOURCE_FROM: "youtube" | "html5" | "youtube-html5" = "html5";

  //
  useEffect(() => {
    // XỬ LÝ PHẦN NÀY DO LỖI PLAYER KHÔNG CHẠY ĐƯỢC ONPAUSE KHI LẦN ĐẦU CHẠY PLAYER VỚI DỮ LIỆU CŨ LƯU TRÊN REDUX
    // VÌ VẬY MÌNH PHẢI TỰ HANDLE PAUSE
    if (!newestAudioPlayerUrl && !!currentAudioUrl && !isFirtTimeSeekTo) {
      if (mediaRunningState === "playing" || mediaRunningState === "paused") {
        dispatch(changeStateMediaRunning("loading"));
      }
    }
  }, [
    newestAudioPlayerUrl,
    currentAudioUrl,
    mediaRunningState,
    isFirtTimeSeekTo,
  ]);

  useEffect(() => {
    if (!prevAudioUrl || currentAudioUrl === prevAudioUrl) {
      return;
    }
    setIsError(false);
  }, [currentAudioUrl, prevAudioUrl]);
  //

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeDataPlayerMediaRunning({
        played: parseFloat(e.currentTarget.value),
      })
    );
  };

  const handleSeekMouseUp = (
    e:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.TouchEvent<HTMLInputElement>
  ) => {
    setSeeking(false);
    if (playerRef.current) {
      playerRef.current.seekTo(parseFloat(e.currentTarget.value));
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const onClickForwarkds15Sec = () => {
    playerRef.current?.seekTo(playedSeconds + 15, "seconds");
  };

  const onClickBackwards10Sec = () => {
    playerRef.current?.seekTo(playedSeconds - 10 || 0, "seconds");
  };

  const getAudioUrl = (): {
    html5: string;
    youtube: string;
    mediaSelected: "youtube" | "html5" | "none";
  } => {
    // BOTH YOUTUBE AND HTML5 SUPPORT
    if (MEDIA_SOURCE_FROM === "youtube-html5") {
      if (!currentAudioUrl) {
        return {
          html5: "none",
          youtube: "https://www.youtube.com/watch?v=9xxxxxxxxxxx",
          mediaSelected: "none",
        };
      }
      if (currentAudioUrl.includes("https://www.youtube.com/")) {
        return {
          html5: "none",
          youtube: currentAudioUrl,
          mediaSelected: "youtube",
        };
      }
      return {
        html5: currentAudioUrl,
        youtube: "https://www.youtube.com/watch?v=9xxxxxxxxxxx",
        mediaSelected: "html5",
      };
    }

    // ONLY HTML5 SUPPORT
    if (MEDIA_SOURCE_FROM === "html5") {
      return {
        html5: currentAudioUrl || "none",
        youtube: "",
        mediaSelected: "html5",
      };
    }

    // ONLY YOUTUBE SUPPORT
    return {
      html5: "",
      youtube:
        currentAudioUrl || "https://www.youtube.com/watch?v=9xxxxxxxxxxx",
      mediaSelected: "youtube",
    };
  };

  const checkIsPlaying = (): boolean => {
    if (!currentAudioUrl) {
      return false;
    }

    return mediaRunningState === "loading" || mediaRunningState === "playing";
  };

  //
  const onPause = () => {
    if (!currentAudioUrl || mediaRunningState === "paused") {
      return;
    }
    dispatch(changeStateMediaRunning("paused"));
  };
  const onEnded = () => {
    dispatch(changeStateMediaRunning("ended"));
    dispatch(
      changeDataPlayerMediaRunning({
        loaded: 0.9999,
        playedSeconds: durationSeconds,
        played: 0.9999,
      })
    );
  };
  const onReady = (e: FilePlayerProps | YouTubePlayerProps) => {
    if (!currentAudioUrl) {
      return;
    }

    !isFirtTimeSeekTo && setIsFirtTimeSeekTo(true);

    // THUC HIEN KHI PLAYER CHAY NGAY SAU KHI PAGE RELOADED - CẦN SEEKING player ĐẾN ĐOẠN LOADED TRƯỚC ĐÓ
    if (!newestAudioPlayerUrl && !isFirtTimeSeekTo) {
      playerRef.current?.seekTo(played);
      dispatch(changeStateMediaRunning("paused"));
    } else if (mediaRunningState === "loading") {
      dispatch(changeStateMediaRunning("playing"));
    }

    // setDuration o day se co ket qua chinh xac hon tai onDuration
    dispatch(
      changeDataPlayerMediaRunning({
        durationSeconds: e.getDuration(),
      })
    );
  };
  const onPlay = () => {
    mediaRunningState !== "playing" &&
      dispatch(changeStateMediaRunning("playing"));
  };
  const onStart = () => {
    dispatch(changeStateMediaRunning("playing"));
  };
  const onDuration = (e: number) => {
    dispatch(
      changeDataPlayerMediaRunning({
        durationSeconds: e,
      })
    );
  };
  const onError = (error: any) => {
    if (!!error.code && error.code !== 20) {
      console.log(789, "MyPlayer-error:", {
        error,
      });
      setIsError(true);
    }
  };
  const onProgress = (e: {
    played: number;
    playedSeconds: number;
    loaded: number;
  }) => {
    if (mediaRunningState === "ended" || !currentAudioUrl) {
      return;
    }
    dispatch(
      changeDataPlayerMediaRunning({
        loaded: e.loaded,
        playedSeconds: e.playedSeconds,
      })
    );
    !seeking &&
      dispatch(
        changeDataPlayerMediaRunning({
          played: e.played,
        })
      );
  };
  //
  const myMemoYoutubePlayer = useMemo(() => {
    if (MEDIA_SOURCE_FROM === "html5") {
      return null;
    }

    const IS_ACTIVE_PLAYER = getAudioUrl().mediaSelected === "youtube";
    return (
      <ReactYoutubePlayer
        url={getAudioUrl().youtube}
        controls
        style={{
          opacity: 0,
          zIndex: -1111,
          visibility: "hidden",
        }}
        //SAME
        ref={
          IS_ACTIVE_PLAYER
            ? (playerRef as LegacyRef<ReactYoutubePlayer>)
            : undefined
        }
        onPause={IS_ACTIVE_PLAYER ? onPause : undefined}
        playbackRate={IS_ACTIVE_PLAYER ? playbackRate : undefined}
        playing={IS_ACTIVE_PLAYER ? checkIsPlaying() : undefined}
        volume={volume}
        muted={muted}
        playsinline
        onEnded={IS_ACTIVE_PLAYER ? onEnded : undefined}
        onReady={IS_ACTIVE_PLAYER ? onReady : undefined}
        onStart={IS_ACTIVE_PLAYER ? onStart : undefined}
        onPlay={IS_ACTIVE_PLAYER ? onPlay : undefined}
        onDuration={IS_ACTIVE_PLAYER ? onDuration : undefined}
        onError={IS_ACTIVE_PLAYER ? onError : undefined}
        onProgress={IS_ACTIVE_PLAYER ? onProgress : undefined}
      />
    );
  }, [
    currentAudioUrl,
    mediaRunningState,
    seeking,
    playbackRate,
    volume,
    muted,
    newestAudioPlayerUrl,
    isFirtTimeSeekTo,
  ]);

  const myMemoHtml5Player = useMemo(() => {
    if (MEDIA_SOURCE_FROM === "youtube") {
      return null;
    }

    const IS_ACTIVE_PLAYER = getAudioUrl().mediaSelected === "html5";
    return (
      <ReactHtml5Player
        url={getAudioUrl().html5}
        controls
        style={{
          opacity: 0,
          zIndex: -1111,
          visibility: "hidden",
        }}
        // SAME
        ref={
          IS_ACTIVE_PLAYER
            ? (playerRef as LegacyRef<ReactHtml5Player>)
            : undefined
        }
        onPause={IS_ACTIVE_PLAYER ? onPause : undefined}
        playbackRate={IS_ACTIVE_PLAYER ? playbackRate : undefined}
        playing={IS_ACTIVE_PLAYER ? checkIsPlaying() : undefined}
        volume={volume}
        muted={muted}
        playsinline
        onEnded={IS_ACTIVE_PLAYER ? onEnded : undefined}
        onReady={IS_ACTIVE_PLAYER ? onReady : undefined}
        onStart={IS_ACTIVE_PLAYER ? onStart : undefined}
        onPlay={IS_ACTIVE_PLAYER ? onPlay : undefined}
        onDuration={IS_ACTIVE_PLAYER ? onDuration : undefined}
        onError={IS_ACTIVE_PLAYER ? onError : undefined}
        onProgress={IS_ACTIVE_PLAYER ? onProgress : undefined}
      />
    );
  }, [
    currentAudioUrl,
    mediaRunningState,
    seeking,
    playbackRate,
    volume,
    muted,
    newestAudioPlayerUrl,
    isFirtTimeSeekTo,
  ]);

  //
  const myMemoPlayerControls = useMemo(() => {
    return (
      <PlayerContent
        isError={isError}
        handleSetMuted={(isMuted) =>
          dispatch(changeDataPlayerMediaRunning({ muted: isMuted }))
        }
        handleSeekMouseUp={handleSeekMouseUp}
        handleSeekMouseDown={handleSeekMouseDown}
        handleSeekChange={handleSeekChange}
        handleVolumeChange={(e) =>
          dispatch(changeDataPlayerMediaRunning({ volume: e }))
        }
        handleSetPlaybackRate={(e) =>
          dispatch(changeDataPlayerMediaRunning({ playbackRate: e }))
        }
        handleClickBackwards10Sec={_.debounce(onClickBackwards10Sec, 200)}
        handleClickForwards15Sec={_.debounce(onClickForwarkds15Sec, 200)}
      />
    );
  }, [isError]);

  return (
    <div
      className={`nc-MediaRunningContainer fixed bottom-0 inset-x-0 flex z-30 ${className}`}
      data-nc-id="MediaRunningContainer"
    >
      {/* ---- PLAYER CONTROL ---- */}
      {myMemoPlayerControls}

      {/* ---- PLAYER ---- */}
      <div className="fixed top-0 left-0 w-1 h-1 -z-50 opacity-0 overflow-hidden">
        {myMemoYoutubePlayer}
        {myMemoHtml5Player}
      </div>
    </div>
  );
};

export default MediaRunningContainer;
