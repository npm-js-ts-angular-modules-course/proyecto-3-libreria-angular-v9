export interface PlaylistItems {
    kind: string;
    etag: string;
    nextPageToken: string;
    pageInfo: PageInfo;
    items: Item[];
}

export interface Item {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    contentDetails: ContentDetails;
}

export interface ContentDetails {
    videoId: string;
    videoPublishedAt: string;
}

export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: ResourceId;
}

export interface ResourceId {
    kind: string;
    videoId: string;
}

export interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
    standard?: Default;
    maxres?: Default;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}
