import SearchResult from "../../components/SearchResult";
import { SearchResultWrapper } from "./styles";

export default function SearchVideos({resultData}: any) {
    return (
        <SearchResultWrapper>
            <SearchResult 
                videoId='123131'
                imageUrl='/YouTube-Logo.png'
                videoTitle='Video'
                channelTitle='titulo'
                videoDescription='teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição '
            />
        </SearchResultWrapper>                
    )
}