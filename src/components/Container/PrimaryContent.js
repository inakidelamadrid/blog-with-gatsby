import React from "react"

const PrimaryContent = ({ children, isSidebarOpen }) => {
  const colKlass = isSidebarOpen ? "col-sm-9" : "col-sm-12"

  return (
    <div style={{ margin: "0 auto" }} className={colKlass}>
      <div className="content">{children}</div>
    </div>
  )
}

export default PrimaryContent
