import { PlayButton } from '@/shared/components/Icons/PlayButton';
import { useVideoPlayer } from '../../hooks/useVideoPlayer';

type Props = {
  videoUrl: string;
  poster?: string;
};

export const VideoPlayer = ({ videoUrl, poster }: Props) => {
  const { videoRef, isPlaying, handlePlay, handlePause, handleEnded } =
    useVideoPlayer();

  return (
    <>
      <video
        ref={videoRef}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        className="h-full w-full object-cover"
        muted
        controls
        controlsList="nodownload"
        poster={poster}
      >
        <source src={videoUrl} />
      </video>

      {!isPlaying && (
        <button
          className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
          onClick={handlePlay}
        >
          <PlayButton />
        </button>
      )}
    </>
  );
};
