import React from 'react'
import styled from 'styled-components'

function ModeSwitch({setMode}: {setMode: React.Dispatch<React.SetStateAction<any>>}) {

  const modes: string[] = [
    'data',
    'edit',
  ]

  const ModeOptionWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
  `

  const ModeOption = styled.span`
    cursor: pointer;
  `

  return (
    <ModeOptionWrapper>
      {modes.map((mode, i) => (
        <ModeOption key={i} onClick={() => setMode(mode)}>{mode}</ModeOption>
      ))}
    </ModeOptionWrapper>
  )
}

export default ModeSwitch
