
import React from 'react';
import './FourColdGrid.css';

const FourColdGrid = (props) => {
    const renderElements =  () => {
        const gridElements = props.children.map( (element,i) => {
            <div key={i} className="rmdb-grid-element">
                { element }
            </div>
        })
    }
	return(
        <div className="rmdb-grid">
            { props.header && !props.loading? <h1>{props.header}</h1> : null}
            <div className="rmdb-grid-content ">
                { renderElements() }
            </div>
        </div>
    )
}

export default FourColdGrid;