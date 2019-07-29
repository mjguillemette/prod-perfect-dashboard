import React from 'react'
import styled from 'styled-components'

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
  display: flex;
`
const DisplayValue = styled.div`
  right: 1.2em;
  top: 0.6em;
  position: absolute;
  font-size: 1.8em;
  font-weight: 400;
  display: flex;
`

const handleChange = (event, props) => {
  if (props.inputType === 'checkbox') {
    if (event.target.value === 'false') {
      props.setValue(true)
    } else {
      props.setValue(false)
    }
  } else {
    props.setValue(event.target.value)
  }
}

export default props => {
  return (
    <InputBox className={props.className}>
      <InputHeading
        style={{
          flexDirection: props.inputType === 'checkbox' ? 'row' : 'column'
        }}
      >
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
          onChange={event => handleChange(event, props)}
          onTouchMove={event => handleChange(event, props)}
          onTouchEnd={event => handleChange(event, props)}
          checked={props.value ? 'checked' : ''}
        />
      </InputHeading>
      <br />
      {props.text}
    </InputBox>
  )
}
