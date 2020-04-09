import React from "react"
import "../../styles/legocss/reset.min.css"
import "../../styles/legocss/base.min.css"

const LegoCSSContainer = ({ children }) => {
  return <div className="container">{children}</div>
}

export default LegoCSSContainer
