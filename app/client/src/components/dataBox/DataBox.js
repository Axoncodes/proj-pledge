import React from "react"

export default function DataBox({title, value}) {
    return(
        <section className="boxes" style={{gridTemplateColumns: "unset", gridAutoFlow: "column" }}>
          <section style={{padding: "20px 15px"}} className="quickBox boxshadow short">
            <section className="inner">
              <object
                aria-label="img"
                data={require(`../../assets/images/pocket.svg`)}
              />
              <div style={{display: "grid", rowGap: "7px" }}>
                <p className="title" style={{margin: 0, fontSize: "16px", color: "#202046" }}>{title}</p>
                <p className="text" style={{margin: 0, fontSize: "14px", color: "#9CA2AA" }}>{value}</p>
              </div>
            </section>
          </section>
        </section>
    )
}