import React from 'react';

import { PodcastFromUserList } from '../models/Podcast';

type PodcastListItemProps = {
  podcast: PodcastFromUserList;
  handlePodcastClicked: (podcast: PodcastFromUserList) => void;
};

const PodcastListItem: React.FC<PodcastListItemProps> = ({
  podcast,
  handlePodcastClicked,
}) => {
  const { id, name } = podcast;

  return (
    <li>
      <label htmlFor={`${name}${id}`}>
        <input
          type="checkbox"
          name={`${name}${id}`}
          id={`${name}${id}`}
          checked={podcast.listened}
          onChange={() => handlePodcastClicked(podcast)}
        />
        <span>
          {id} || {name}
        </span>
      </label>
    </li>
  );
};

export default PodcastListItem;
