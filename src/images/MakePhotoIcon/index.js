import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg"

export function MakePhotoIcon({style, fill='#002b36'}) {
  return (
    <Svg width="20px" height="19px" viewBox="0 0 20 19" {...style}>
      <Defs>
        <Path
          d="M2.5 3.333v-2.5h1.667v2.5h2.5V5h-2.5v2.5H2.5V5H0V3.333h2.5zm2.5 5v-2.5h2.5v-2.5h5.833L14.858 5H17.5c.917 0 1.667.75 1.667 1.667v10c0 .916-.75 1.666-1.667 1.666H4.167c-.917 0-1.667-.75-1.667-1.666V8.333H5zm5.833 7.5c2.3 0 4.167-1.866 4.167-4.166 0-2.3-1.867-4.167-4.167-4.167a4.168 4.168 0 00-4.166 4.167c0 2.3 1.866 4.166 4.166 4.166zm-2.5-4.166c0 1.383 1.117 2.5 2.5 2.5 1.384 0 2.5-1.117 2.5-2.5 0-1.384-1.116-2.5-2.5-2.5a2.497 2.497 0 00-2.5 2.5z"
          id="b"
        />
      </Defs>
      <G
        transform="translate(-16 -696) translate(0 571) translate(16 112)"
        filter="url(#a)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <G transform="translate(0 13)">
          <Mask id="c" fill="#fff">
            <Use xlinkHref="#b" />
          </Mask>
          <G mask="url(#c)" fill={fill}>
            <Path d="M0 0H20V20H0z" />
          </G>
        </G>
      </G>
    </Svg>
  )
}