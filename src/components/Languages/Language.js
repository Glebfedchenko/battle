import React from "react";

const Language = ({ lang, selected, onSelect }) => 
<div className='col-sm-2 col-xs-2 col-md-2'>
    <a className={lang === selected ? 'red' : 'black'} onClick={onSelect.bind(null,lang)}>{lang}</a>
</div>;

export default Language;
