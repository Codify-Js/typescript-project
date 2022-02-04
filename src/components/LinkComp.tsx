import React from 'react';

interface Props {
  name: string
  url: string
  isVisible?: boolean
}
const LinkComp = (props: Props) => {
  const {name, url, isVisible} = props;
  return (
    isVisible ? (
     <a
        className="App-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    ) : null
  )
}

export default LinkComp;