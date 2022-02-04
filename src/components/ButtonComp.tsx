import React from 'react';

interface Props {
  name: string
  onClick: (name: string) => void
}
const ButtonComp = (props: Props) => {
  const {name, onClick} = props;
  return (
    <button onClick={() => onClick(name)}>{name}</button> 
  )
}

export default ButtonComp;