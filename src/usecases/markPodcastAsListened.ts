import { PodcastFromUserList } from '../models/Podcast';

export const markPodcastAsListened = (
  podcasts: PodcastFromUserList[],
  podcastToMarkAsListened: PodcastFromUserList,
): PodcastFromUserList[] =>
  podcasts.map((podcast: PodcastFromUserList) => {
    if (podcast.id === podcastToMarkAsListened.id) {
      return { ...podcast, listened: !podcast.listened };
    } else {
      return { ...podcast };
    }
  });

export const markPodcastsAsListened = (
  podcasts: PodcastFromUserList[],
  firstPodcastToMark: PodcastFromUserList,
  lastPodcastToMark: PodcastFromUserList,
): PodcastFromUserList[] =>
  podcasts.map((podcast: PodcastFromUserList) => {
    if (podcast.id >= firstPodcastToMark.id && podcast.id <= lastPodcastToMark.id) {
      return { ...podcast, listened: !podcast.listened };
    } else {
      return { ...podcast };
    }
  });
