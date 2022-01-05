import './App.css';

import React, { useEffect, useState } from 'react';

import { podcasts as podcastsData } from '../resources/data/podcasts';
import podcastCover from '../resources/images/podcast-cover.png';
import PodcastList from './components/PodcastList';
import { Podcast, PodcastFromUserList } from './models/Podcast';
import {
  markPodcastAsListened,
  markPodcastsAsListened,
} from './usecases/markPodcastAsListened';

const App: React.FC = () => {
  const [shiftHeld, setShiftHeld] = useState<boolean>(false);

  const downHandler = ({ key }: KeyboardEvent) => {
    if (key === 'Shift') setShiftHeld(true);
  };

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === 'Shift') setShiftHeld(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  const allPodcasts = JSON.parse(JSON.stringify(podcastsData));

  const listenedPodcasts: PodcastFromUserList[] = allPodcasts.map((podcast: Podcast) => {
    return { ...podcast, listened: false };
  });

  const [podcasts, setPodcasts] = useState(listenedPodcasts);

  const [podcastHeld, setPodcastHeld] = useState<PodcastFromUserList | null>(null);

  const handlePodcastClicked = (clickedPodcast: PodcastFromUserList) => {
    if (shiftHeld) {
      setPodcastHeld(clickedPodcast);
    } else {
      if (podcastHeld) {
        setPodcasts(markPodcastsAsListened(podcasts, podcastHeld, clickedPodcast));
        setPodcastHeld(null);
      } else {
        setPodcasts(markPodcastAsListened(podcasts, clickedPodcast));
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="cover">
        <img src={podcastCover} alt="Compressed.fm" />
      </div>
      <div className="content">
        <h1>Listen to all the Compressed.fm Episodes</h1>

        <PodcastList podcasts={podcasts} handlePodcastClicked={handlePodcastClicked} />
      </div>
    </div>
  );
};

export default App;
