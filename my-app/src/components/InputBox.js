import React from 'react'
import styled from 'styled-components'

const InputBox = props => {
  const InputBox = styled.div`
    font-size: 1rem;
    max-width: 320px;
    min-width: 30%;
    border-radius: 14px;
    padding: 1.4em;
    margin: 1em;
    flex-direction: column;
    display: flex;
  `
  const InputHeading = styled.div`
    flex-direction: ${props.inputType === 'checkbox' ? 'row' : 'column'}
    display: flex;
  `

  return (
    <InputBox className={props.className}>
      <InputHeading>
        <h2>{props.name}</h2>
        <input type={props.inputType} max="30" />
      </InputHeading>
      <br />
      {props.text}
    </InputBox>
  )
}

export default InputBox
