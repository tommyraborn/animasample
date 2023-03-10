import React from "react";
import styled from "styled-components";


function FilmThumbTablet(props) {
  const { src, className } = props;

  return <FilmThumb className={`film-thumb-11 ${className || ""}`} src={src} alt="film-thumb" />;
}

const FilmThumb = styled.img`
  width: 143px;
  height: 208px;
  margin-top: -0.25px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &.film-thumb-11.film-thumb-12 {
    margin-left: 11px;
  }

  &.film-thumb-11.film-thumb-13 {
    margin-left: 11px;
  }

  &.film-thumb-11.film-thumb-14 {
    margin-left: 12px;
  }

  &.film-thumb-11.film-thumb-15 {
    margin-left: 11px;
  }

  &.film-thumb-11.film-thumb-16 {
    margin-left: 11px;
  }

  &.film-thumb-11.film-thumb-17 {
    margin-left: 12px;
  }

  &.film-thumb-11.film-thumb-18 {
    margin-top: unset;
  }

  &.film-thumb-11.film-thumb-19 {
    margin-left: 11px;
    margin-top: unset;
  }

  &.film-thumb-11.film-thumb-20 {
    margin-left: 11px;
    margin-top: unset;
  }

  &.film-thumb-11.film-thumb-21 {
    margin-left: 12px;
    margin-top: unset;
  }

  &.film-thumb-11.film-thumb-22 {
    margin-left: 11px;
  }

  &.film-thumb-11.film-thumb-23 {
    margin-left: 11px;
  }

  &.film-thumb-11.film-thumb-24 {
    margin-left: 12px;
  }

  &.film-thumb-11.film-thumb-25 {
    margin-left: 11px;
  }

  &.film-thumb-11.film-thumb-26 {
    margin-left: 11px;
  }

  &.film-thumb-11.film-thumb-27 {
    margin-left: 12px;
  }

  &.film-thumb-11.film-thumb-28 {
    margin-top: unset;
  }

  &.film-thumb-11.film-thumb-29 {
    margin-left: 11px;
    margin-top: unset;
  }

  &.film-thumb-11.film-thumb-30 {
    margin-left: 11px;
    margin-top: unset;
  }

  &.film-thumb-11.film-thumb-31 {
    margin-left: 12px;
    margin-top: unset;
  }

  &:hover {
    transform: scale(1.04);
  }
`;

export default FilmThumbTablet;
