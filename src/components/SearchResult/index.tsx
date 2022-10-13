import { useRouter } from "next/router";
import DefaultButton from "../Button";
import { ResultWrapper, ContentImage, ContentInfo } from "./styles";

export default function SearchResult({videoId, imageUrl, videoTitle, channelTitle, videoDescription}: any) {
    const router = useRouter()

    function goToDetails() {
        router.push('/ResultDetails', { query: { videoId } })
    }

    return (
        <ResultWrapper>
            <ContentImage src={imageUrl}/>

            <ContentInfo style={{fontWeight: 'bold'}}>{videoTitle}</ContentInfo>
            <ContentInfo>{channelTitle}</ContentInfo>
            <ContentInfo>{videoDescription}</ContentInfo>

            <DefaultButton buttonType="button" text="Detalhes do vídeo" onClick={goToDetails} />
        </ResultWrapper>
    )
}