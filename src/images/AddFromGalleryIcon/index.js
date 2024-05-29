import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg"

export function AddFromGalleryIcon({style, fill='#002b36'}) {
  return (
    <Svg width="22px" height="22px" viewBox="0 0 18 18" {...style}>
      <Defs>
        <Path
          d="M14 9.833v5.834H2.333V4h4.184c.041-.592.183-1.15.4-1.667H2.333C1.417 2.333.667 3.083.667 4v11.667c0 .916.75 1.666 1.666 1.666H14c.917 0 1.667-.75 1.667-1.666V11.5L14 9.833zM12.75 14H3.583l2.292-2.942 1.633 1.967 2.292-2.95L12.75 14zm2.333-7.592a3.717 3.717 0 00.584-1.991 3.745 3.745 0 00-3.75-3.75 3.745 3.745 0 00-3.75 3.75 3.743 3.743 0 003.741 3.75c.734 0 1.417-.217 1.992-.584l2.6 2.6L17.683 9l-2.6-2.592zm-3.166.092a2.084 2.084 0 11.001-4.168 2.084 2.084 0 01-.001 4.168z"
          id="b"
        />
      </Defs>
      <G
        transform="translate(-17 -649) translate(0 571) translate(16 64)"
        filter="url(#a)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <G transform="translate(1 14)">
          <Mask id="c" fill="#fff">
            <Use xlinkHref="#b" />
          </Mask>
          <G mask="url(#c)" fill={fill}>
            <Path transform="translate(-1 -1)" d="M0 0H20V20H0z" />
          </G>
        </G>
      </G>
    </Svg>
  )
}