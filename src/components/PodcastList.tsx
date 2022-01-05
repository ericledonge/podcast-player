import React from 'react';

import { PodcastFromUserList } from '../models/Podcast';
import PodcastListItem from './PodcastListItem';

type PodcastListProps = {
  podcasts: PodcastFromUserList[];
  handlePodcastClicked: (podcast: PodcastFromUserList) => void;
};

const PodcastList: React.FC<PodcastListProps> = ({ podcasts, handlePodcastClicked }) => {
  return (
    <ul className="episodes">
      {podcasts.map((podcast: PodcastFromUserList) => (
        <PodcastListItem
          key={podcast.id}
          podcast={podcast}
          handlePodcastClicked={(podcast: PodcastFromUserList) =>
            handlePodcastClicked(podcast)
          }
        />
      ))}
    </ul>
  );
};

export default PodcastList;
