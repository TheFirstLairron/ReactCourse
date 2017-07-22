import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import { SearchBar } from './components/search_bar';
import { VideoList } from './components/video_list';
import { VideoDetail } from './components/video_detail.jsx';

const API_KEY = "AIzaSyC-OReW2ep_x2uEHFgqrDSt-miamWNOw_E";

// YTSearch({key: API_KEY, term: 'direwolf20'}, (data) => console.log(data));
class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.generateYoutubeSearch("direwolf20");
    }

    render() {
        const videoSearch = _.debounce((term) => { this.generateYoutubeSearch(term) }, 300);

        return <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos}
            />
        </div>
    }

    generateYoutubeSearch(term)
    {
        YTSearch({key: API_KEY, term}, (videos) =>{
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }
}

ReactDom.render(<App />, document.getElementById("container"));