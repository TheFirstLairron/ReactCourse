import React from 'react';
import { VideoListItem } from './video_list_item';

export const VideoList = (props) => {
    return <ul className="col-md-4 list-group">
        {
            props.videos.map(video => {
                return <VideoListItem
                    key={video.etag}
                    video={video}
                    onVideoSelect={props.onVideoSelect}
                />
            })
        }
    </ul>
}

