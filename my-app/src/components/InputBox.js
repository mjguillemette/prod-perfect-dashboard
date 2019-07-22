import React from 'react'
import styled from 'styled-components'

const InputBox = props => {
  const InputBox = styled.div`
    position: relative;
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
  const DisplayValue = styled.div`
    right: 1.2em;
    top: .6em;
    position: absolute;
    font-size: 1.8em
    font-weight: 400;
    display: flex;
  `

  const handleChange = e => {
    props.setValue(e.target.value)
  }

  return (
    <InputBox className={props.className}>
      <InputHeading>
        <DisplayValue>{props.value}</DisplayValue>
        <h2>{props.name}</h2>
        <input
          id={props.id}
          type={props.inputType}
          value={props.value}
          min={props.minInput}
          max={props.maxInput}
          step={props.step}
          className={props.inputType === 'checkbox' ? 'toggle' : ''}
          onChange={e => handleChange(e)}
          onMouseUp={e => handleChange(e)}
          onTouchMove={e => handleChange(e)}
          onTouchEnd={e => handleChange(e)}
          checked={props.value ? 'checked' : ''}
        />
      </InputHeading>
      <br />
      {props.text}
    </InputBox>
  )
}

export default InputBox
