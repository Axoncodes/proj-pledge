import React from "react"

export default function DataBox({title, value, stylestyle, classes, icon}) {
    return(
        <section className="boxes" style={stylestyle}>
          <section style={{padding: "20px 15px"}} className={classes}>
            <section className="inner">
              {icon?
              <object
                aria-label="img"
                data={require(`../../assets/images/${icon}`)}
              />:''}
              <div style={{display: "grid", rowGap: "7px" }}>
                <p className="title" style={{margin: 0, fontSize: "16px", color: "#202046" }}>{title}</p>
                <p className="text" style={{margin: 0, fontSize: "14px", color: "#9CA2AA" }}>{value}</p>
              </div>
            </section>
          </section>
        </section>
    )
}