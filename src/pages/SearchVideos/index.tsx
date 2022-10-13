import { useState } from "react";
import Layout from "../../components/Layout";
import { SearchInput, SearchButton } from "../../components/Layout/styles";
import SearchResult from "../../components/SearchResult";
import { NormalizeSearchResult } from "../../interfaces";
import executeAxiosCall from "../../utils/executeAxiosCall";
import normalizeSearchResult from "../../utils/normalizeSearchResult";
import { SearchResultWrapper } from "./styles";

export default function SearchVideos() {
    const [searchInput, setSearchInput] = useState<string>('');
    const [resultData, setResultData] = useState([]);

    async function Search(searchInputValue: string) {
        if (searchInputValue === 'null') {
            return;
        }

        const { data } = await executeAxiosCall(searchInputValue, 'Search')

        setResultData(
            data.items.map((item: any) => {
                return normalizeSearchResult(item)
            })
        )
    }

    return (
        <SearchResultWrapper>
            <div style={{ display: 'flex' }}>
                <SearchInput
                    id='searchInput'
                    value={searchInput}
                    onChange={event => setSearchInput(event.target.value)}
                    placeholder='Pesquise'
                />
                <SearchButton type='button' onClick={() => Search(searchInput)}>Buscar</SearchButton>
            </div>

            {
                resultData.length
                    ? resultData.map((item: NormalizeSearchResult) => {
                        return (
                            <SearchResult
                                key={item.videoId}
                                videoId={item.videoId}
                                imageUrl={item.imageUrl}
                                videoTitle={item.videoTitle}
                                channelTitle={item.channelTitle}
                                videoDescription={item.videoDescription}
                            />
                        )
                    })
                    : <div />
            }
        </SearchResultWrapper>
    )
}