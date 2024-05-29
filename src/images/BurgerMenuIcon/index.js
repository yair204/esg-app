import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg"

export function BurgerMenuIcon(props) {
  return (
    <Svg width="18px" height="12px" viewBox="0 0 18 12" {...props}>
      <Defs>
        <Path d="M0 12h18v-2H0v2zm0-5h18V5H0v2zm0-7v2h18V0H0z" id="b" />
      </Defs>
      <G
        transform="translate(-19 -66)"
        filter="url(#a)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <G transform="translate(19 66)">
          <Mask id="c" fill="#fff">
            <Use xlinkHref="#b" />
          </Mask>
          <G mask="url(#c)" fill="#002B36">
            <Path transform="translate(-3 -6)" d="M0 0H24V24H0z" />
          </G>
        </G>
      </G>
    </Svg>
  )
}