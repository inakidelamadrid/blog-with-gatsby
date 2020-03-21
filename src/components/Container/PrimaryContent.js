import React from "react"

const PrimaryContent = ({ children }) => {
  return (
    <div style={{ margin: "0 auto" }} className="col-sm-12">
      <div className="content">{children}</div>
    </div>
  )
}

export default PrimaryContent
