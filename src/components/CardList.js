import React from 'react'
import Card from './Card'

const CardList = ({articleList,onRouteChange}) => {
    return(
        <div className="flex">
            {
                articleList.map((article,id) => {
                    return(
                            <Card 
                                key={articleList[id].id}
                                id={articleList[id].id} 
                                title={articleList[id].title} 
                                data={articleList[id].data}
                                image={articleList[id].imageURL}
                                routeName={articleList[id].routeName}
                                onRouteChange={onRouteChange}>
                            </Card>
                        
                    );
                })
            }
        </div>
    );
}

export default CardList