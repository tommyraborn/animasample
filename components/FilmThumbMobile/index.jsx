import React from "react";
import styled from "styled-components";


function FilmThumbMobile(props) {
  const { src, className } = props;

  return <FilmThumb className={`film-thumb ${className || ""}`} src={src} alt="film-thumb" />;
}

const FilmThumb = styled.img`
  width: 100px;
  height: 150px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &.film-thumb.film-thumb-2 {
    margin-left: 0.44px;
  }

  &.film-thumb.film-thumb-3 {
    margin-left: 0.44px;
  }

  &.film-thumb.film-thumb-4 {
    margin-left: 0.06px;
  }

  &.film-thumb.film-thumb-5 {
    margin-left: 0.06px;
  }

  &.film-thumb.film-thumb-6 {
    margin-left: 0.44px;
  }

  &.film-thumb.film-thumb-7 {
    margin-left: 0.44px;
  }

  &.film-thumb.film-thumb-8 {
    margin-left: 0.06px;
  }

  &.film-thumb.film-thumb-9 {
    margin-left: 0.06px;
  }

  &:hover {
    transform: scale(1.04);
  }
`;

export default FilmThumbMobile;
