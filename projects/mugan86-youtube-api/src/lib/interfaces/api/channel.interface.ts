export interface Channel {
    kind: string;
    etag: string;
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
    relatedPlaylists: RelatedPlaylists;
}

export interface RelatedPlaylists {
    uploads: string;
    watchHistory: string;
    watchLater: string;
}

export interface Snippet {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: Thumbnails;
    localized: Localized;
    country: string;
}

export interface Localized {
    title: string;
    description: string;
}

export interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
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
