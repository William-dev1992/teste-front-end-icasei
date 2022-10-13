import { NormalizeSearchResult } from "../interfaces";

export default function normalizeSearchResult(item: any): NormalizeSearchResult {
    return ({
        videoId: item.id.videoId ?? '0',
        imageUrl: item.snippet.thumbnails.default.url,
        videoTitle: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        videoDescription: item.snippet.description,
        likeCount: item?.statistics?.likeCount ?? '0',
        deslikeCount: item?.statistics?.deslikeCount ?? '0',
        viewCount: item?.statistics?.viewCount ?? '0'
    })
}