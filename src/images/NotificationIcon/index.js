import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg"

export function NotificationIcon({props, style, fill = '#002B36'}) {
  return (
    <Svg width="16px" height="20px" viewBox="0 0 16 20" {...style}>
      <Defs>
        <Path
          d="M8 20c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.64 3.36 2 5.92 2 9v5l-2 2v1h16v-1l-2-2zm-2 1H4V9c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
          id="b"
        />
      </Defs>
      <G
        transform="translate(-324 -62)"
        filter="url(#a)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <G transform="translate(324 62)">
          <Mask id="c" fill="#fff">
            <Use xlinkHref="#b" />
          </Mask>
          <G mask="url(#c)" fill={fill}>
            <Path transform="translate(-4 -2)" d="M0 0H24V24H0z" />
          </G>
        </G>
      </G>
    </Svg>
  )
}