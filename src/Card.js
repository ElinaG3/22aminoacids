import React from 'react';
import { formatChemicalFormula } from './Helpers';


const Card = ({name,image,symbol,formula,group} )=> {
    const formattedFormula = formatChemicalFormula(formula);
    const backgroundColor = getBackgroundColor(group);

    function getBackgroundColor(group) {
        const groups = group.split(','); // Split the group string by comma

        for (let i = 0; i < groups.length; i++) {
            const currentGroup = groups[i].trim(); // Remove any leading or trailing whitespace
            switch (currentGroup) {
            case 'aliphatic':
                return 'firebrick';
            case 'aromatic':
                return 'darkolivegreen';
            case 'amidic':
                return 'orange';
            case 'hydroxylic':
                return 'mediumvioletred';
            case '- charged':
                return 'steelblue';
            case '+ charged':
                return 'deepskyblue';
            case 'Sulfur containing':
                return 'yellow';
                case 'Selenium containing':
                    return 'peru';

                default:

            }
        }

        return 'white'; // Default color if no matching group is found
    }

    return (

        <div className='  dib br3
         ma3 pa1 grow bw2 shadow-5'
             style={{ backgroundColor }}>

            <img src={`${process.env.PUBLIC_URL}${image}`}
                 alt='acid'   />


            <h2>{name}</h2>
            <p>{symbol}</p>
            <p dangerouslySetInnerHTML={{ __html: formattedFormula }} />
            <p>{group} </p>

        </div>

    );
};
export default Card;