import React, { createContext, useEffect, useState } from "react"
import { find, map } from "lodash"
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
          if(matches){
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
