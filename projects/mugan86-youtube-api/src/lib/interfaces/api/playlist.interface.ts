export interface Playlist {
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
    itemCount: number;
}

export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    localized: Localized;
}

export interface Localized {
    title: string;
    description: string;
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
