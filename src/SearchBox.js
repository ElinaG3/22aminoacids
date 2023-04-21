
import React from "react";

const SearchBox  =({searchfield,searchChange}) => {
    return (
        <div className='pa2'>
        <input
            className='f6 grow no-underline br-pill ba pa3 bw2 b--orange ph3 pv2 mb2 dib bg-white'
            type ='search'
            placeholder='search name or group'
            onChange={searchChange}

        />
        </div>
    );
}

export default SearchBox;