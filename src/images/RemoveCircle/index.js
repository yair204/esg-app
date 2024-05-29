import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg"

export function RemoveCircle({ color = "red", ...props }) {
  return (
    <Svg width="18px" height="18px" viewBox="0 0 18 18" {...props}>
      <Defs>
        <Path
          d="M9 .667A8.336 8.336 0 00.667 9c0 4.6 3.733 8.333 8.333 8.333S17.333 13.6 17.333 9 13.6.667 9 .667zm4.167 9.166H4.833V8.167h8.334v1.666z"
          id="b"
        />
      </Defs>
      <G
        transform="translate(-17 -688) translate(0 466) translate(16 208)"
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
          <G mask="url(#c)" fill={color}>
            <Path transform="translate(-1 -1)" d="M0 0H20V20H0z" />
          </G>
        </G>
      </G>
    </Svg>
  )
}