import { ReactNode, useRef, useState } from 'react'
import executeAxiosCall from '../../utils/executeAxiosCall'
import normalizeSearchResult from '../../utils/normalizeSearchResult';
import Header from '../Header'
import { MainWrapper, SearcherWrapper, SearchInput, SearchButton } from './styles'

export default function Layout({children}: {children: ReactNode}) {
    return (
        <MainWrapper>
            <Header />

            <SearcherWrapper alignment='center'>
                {children}
            </SearcherWrapper>
        </MainWrapper>
    )
}