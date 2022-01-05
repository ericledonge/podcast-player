import { markPodcastAsListened, markPodcastsAsListened } from './markPodcastAsListened';

describe('markPodcastAsListened', () => {
  it('should markPodcastAsListened', () => {
    const initialPodcasts = [
      { id: 1, name: 'podcast1', listened: false },
      { id: 2, name: 'podcast2', listened: false },
      { id: 3, name: 'podcast3', listened: false },
    ];

    const podcastToMarkAsListened = { id: 2, name: 'podcast2', listened: false };

    const expectedPodcasts = [
      { id: 1, name: 'podcast1', listened: false },
      { id: 2, name: 'podcast2', listened: true },
      { id: 3, name: 'podcast3', listened: false },
    ];

    const podcastUpdated = markPodcastAsListened(
      initialPodcasts,
      podcastToMarkAsListened,
    );

    expect(podcastUpdated).toEqual(expectedPodcasts);
  });
});

describe('markPodcastsAsListened', () => {
  it('should markPodcastsAsListened', () => {
    const initialPodcasts = [
      { id: 1, name: 'podcast1', listened: false },
      { id: 2, name: 'podcast2', listened: false },
      { id: 3, name: 'podcast3', listened: false },
      { id: 4, name: 'podcast4', listened: false },
      { id: 5, name: 'podcast5', listened: false },
    ];

    const firstPodcastToMark = { id: 2, name: 'podcast2', listened: false };
    const lastPodcastToMark = { id: 4, name: 'podcast4', listened: false };

    const expectedPodcasts = [
      { id: 1, name: 'podcast1', listened: false },
      { id: 2, name: 'podcast2', listened: true },
      { id: 3, name: 'podcast3', listened: true },
      { id: 4, name: 'podcast4', listened: true },
      { id: 5, name: 'podcast5', listened: false },
    ];

    const podcastUpdated = markPodcastsAsListened(
      initialPodcasts,
      firstPodcastToMark,
      lastPodcastToMark,
    );

    expect(podcastUpdated).toEqual(expectedPodcasts);
  });
});
