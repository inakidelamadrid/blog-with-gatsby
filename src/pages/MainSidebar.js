import React from "react"

const MainSidebar = props => {
  return (
    <aside>
      <div className="about">
        <h4>About me</h4>
        <p>
          Hello, I'm Ignacio.
        </p>
        <p>
          I'm an application layer (mostly Django/Flask based) and front-end developer.
        </p>
      </div>

      <div className="tags">
        <h4>Tags</h4>
        <ul>
          <li>
            <a href="tag.html" className="label label-danger">
              CSS3
            </a>
          </li>
          <li>
            <a href="tag.html" className="label label-primary">
              HTML5
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default MainSidebar
