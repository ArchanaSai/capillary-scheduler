import React from 'react'
import CardList from './CardList'

const TitleAndDescriptionWithCard = ({title,data,articleList,id,onRouteChange}) => {

    return(
        <div id={id} className="measure-width center f5 f4-ns lh-copy ph3 pv5">
           <header className="tc ph4">
                <h1 className="f3 f2-m f1-l fw2 white-90 mv3">
                    {title}
                </h1>
            </header>
            <p className="f5 f4-m f3-l fw2 white-50 mt0 lh-copy">
                {data}
            </p>
            <CardList articleList={articleList} onRouteChange={onRouteChange}/>
        </div>
    );
}

export default TitleAndDescriptionWithCard