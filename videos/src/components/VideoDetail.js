import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className='ui segment'>
        <div className='ui active dimmer'>
          <div className='ui indeterminate text loader'>
            Fetching video Data
          </div>
        </div>
        <p></p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title='Video PLayer' />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'> {video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <p>{video.snippet.publishedAt}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
