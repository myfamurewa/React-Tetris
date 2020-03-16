import React from 'react'
import { StyledStartButton } from './styles/StyledStartButton'
export default function StartButton({ callback }) {
    return (
        <StyledStartButton onclick={callback}>
            Start Game
        </StyledStartButton>
    )
}
