import React, { createContext, createElement, useEffect, useState } from "react"
import find from "lodash/find"
import isFunction from "lodash/isFunction"
import map from "lodash/map"
export const MediaQueryContext = createContext("source")

const breakpoints = [
  ["mobile", "(max-width: 767px)"],
  ["tablet", "(min-width: 768px) and (max-width: 1199px)"],
  ["desktop", "(min-width: 1200px) and (max-width: 1399px)"],
  ["wide", "(min-width: 1400px)"],
]

export const MediaListener = ({ children }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("source")

  useEffect(() => {
    if (window.matchMedia) {
      const listeners = map(breakpoints, ([name, rule]) => [
        name,
        window.matchMedia(rule),
      ])

      // find the first breakpoint that's active
      const startPoint = find(listeners, ([, rule]) => rule.matches)
      const [startPointName] = startPoint
      setCurrentBreakpoint(startPointName)

      // set listeners for changes in the media
      listeners.forEach(([name, rule]) =>
        rule.addListener(({ matches }) => {
          if (matches) {
            setCurrentBreakpoint(name)
          }
        })
      )
    }
  }, [])

  return (
    <MediaQueryContext.Provider value={currentBreakpoint}>
      {children}
    </MediaQueryContext.Provider>
  )
}

// Media component consumes CurrentBreakpoint, and renders
export default function Media({ source, mobile, tablet, desktop, wide }) {
  return createElement(MediaQueryContext.Consumer, null, currentBreakpoint => {
    return {
      desktop: checkpoints([desktop, tablet, mobile, source], desktop),
      mobile: checkpoints([mobile, source], mobile),
      source: checkpoints([source, mobile], source),
      tablet: checkpoints([tablet, mobile, source], tablet),
      wide: checkpoints([wide, desktop, tablet, mobile, source], wide),
      default: checkpoints([source, mobile]),
    }[currentBreakpoint]
  })
}

function checkpoints(breakpoints, switchOff) {
  if (switchOff === false || switchOff === null) {
    return false
  }

  // check all of our breakpoint props in order, returning the first that has a value
  const getComponent = find(breakpoints, isFunction)
  // if we find a matching breakpoint, run it to generate the Element to render
  return getComponent && getComponent()
}
