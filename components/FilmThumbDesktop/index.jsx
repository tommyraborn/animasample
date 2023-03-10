import React from "react";
import styled from "styled-components";


function FilmThumbDesktop(props) {
  const { src } = props;

  return <FilmThumb src={src} alt="film-thumb" />;
}

const FilmThumb = styled.img`
  width: 190px;
  height: 280px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }
`;

export default FilmThumbDesktop;
