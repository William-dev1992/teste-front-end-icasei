import Link from "next/link";
import { useRouter } from "next/router";
import DefaultButton from "../Button";
import { ResultWrapper, ContentImage, ContentInfo } from "./styles";

export default function SearchResult({videoId, imageUrl, videoTitle, channelTitle, videoDescription}: any) {
    const router = useRouter()


    return (
        <ResultWrapper>
            <ContentImage src={imageUrl}/>

            <ContentInfo style={{fontWeight: 'bold'}}>{videoTitle}</ContentInfo>
            <ContentInfo>{channelTitle}</ContentInfo>
            <ContentInfo>{videoDescription}</ContentInfo>

            <Link href={`/ResultDetails?videoId=${videoId}`}>
                <button type="button"/>
            </Link>
        </ResultWrapper>
    )
}