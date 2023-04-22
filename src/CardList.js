import React from 'react';
import Card from "./Card";

const CardList =({aminoAcids})=> {

    return (
        <div>
            {
            aminoAcids.map((user,i)=> {

            return (
                <Card key={i}
            id={aminoAcids[i].id}
            image={aminoAcids[i].image}
            name={aminoAcids[i].name}
            symbol={aminoAcids[i].symbol}
                      formula={aminoAcids[i].formula}
            group={aminoAcids[i].group}/>
    );
})}
        </div>

    );
}
export default CardList;
