import React from 'react'

const Card = ({title,data,routeName,image,onRouteChange}) => {
    return(
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 grow shadow-5 " onClick={()=>{onRouteChange(routeName)}}>
            <div className="tc">
                <img src={image} className="br-100 h3 w3 dib" alt=""/>
                <h1 className="f4 dark-gray">{title}</h1>
                <hr className="mw3 bb bw1 b--black-10"/>
            </div>
            <p className="lh-copy measure center f6 black-70">
                {data}
            </p>
        </article>
    );
}

export default Card