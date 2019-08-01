import React from 'react'
import styled from 'styled-components'

const InputBox = styled.div`
  position: relative;
  max-width: 400px;
  font-size: 0.92em;
  border-radius: 14px;
  padding: 1.4em 1.4em 1em 1.4em;
  flex-direction: column;
  display: flex;
`
const InputHeading = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
`
const DisplayValue = styled.input`
  left: 1.2em;
  color: #2a272a;
  width: 2.9em;
  height: 1.1em;
  background-color: #c4c4c4;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.3rem;
  margin: auto;
  top: 0.6em;
  position: absolute;
  text-align: center;
  font-size: 1.4rem;
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

const handleSelect = props => {
  const box = document.getElementById(props.id + 'Box')
  const info = document.getElementById(props.id + 'Info')
  const text = document.getElementById(props.id + 'Text')

  if (props.isSelected === false) {
    props.setSelected(true)
    box.classList.add('SelectedBox')
    info.classList.add('InfoShown')
    text.classList.add('TextShown')
  } else {
    props.setSelected(false)
    box.classList.remove('SelectedBox')
    info.classList.remove('InfoShown')
    text.classList.remove('TextShown')
  }
}

export default props => {
  if (props.inputType === 'checkbox') {
    return (
      <InputBox id={props.id + 'Box'} className={props.className}>
        <InputHeading>
          <input
            id={props.id}
            type={props.inputType}
            value={props.value}
            min={props.minInput}
            max={props.maxInput}
            step={props.step}
            className="toggle"
            onChange={event => handleChange(event, props)}
            checked={props.value ? 'checked' : ''}
          />
          <div onClick={() => handleSelect(props)}>
            <h3 className="InputLabel">{props.name}</h3>
            <div className="Info" id={props.id + 'Info'} />
          </div>
        </InputHeading>
        <br />
        <span className="InputText" id={props.id + 'Text'}>
          {props.text}
        </span>
      </InputBox>
    )
  } else {
    return (
      <InputBox id={props.id + 'Box'} className={props.className}>
        <InputHeading
          style={{
            flexDirection: 'column'
          }}
        >
          <DisplayValue
            type="number"
            onChange={event => handleChange(event, props)}
            style={{
              display: 'flex',
              userSelect: 'text'
            }}
            value={props.value}
          />
          <div onClick={() => handleSelect(props)}>
            <h3 className="InputLabel" style={{ marginLeft: '4.3em' }}>
              {props.name} <span className="SubText">{props.subText}</span>
            </h3>
          </div>
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
          <div
            onClick={() => handleSelect(props)}
            id={props.id + 'Info'}
            className="Info"
          />
        </InputHeading>
        <br />
        <span className="InputText" id={props.id + 'Text'}>
          {props.text}
        </span>
      </InputBox>
    )
  }
}
