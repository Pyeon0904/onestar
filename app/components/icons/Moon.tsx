'use client';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

interface Props {
  className?: string;
  size?: SizeProp; // string보다는 size Prop에 정해진 값만 허용되도록
}

export default function Moon({className, size}: Props) {

  return (
    <>
      <div>
        <FontAwesomeIcon icon={faMoon} className={className} size={size}/>
      </div>
    </>
  );
}