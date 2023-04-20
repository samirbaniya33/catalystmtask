import React from 'react'

const FilterContainer = ({materiallist, colorlist, filtermateriallist, filtercolorlist}) => {
    return (
        <div className="filtercontainer">
            <h4>Filter</h4>
            <div className="materials">
                <h5>Materials</h5>
                {/* <p>All</p>
                <p>Cotton</p>
                <p>Cotton</p>
                <p>Cotton</p>
                <p>Cotton</p> */}
                {
                    materiallist.map((curElem)=>{
                        return(
                            <p onClick={()=>filtermateriallist(curElem)}>{curElem}</p>
                        )
                    })
                }
            </div>
            <div className="color">
                <h5>Color</h5>
                {
                    colorlist.map((curElem)=>{
                        return (
                            <p onClick={()=>{filtercolorlist(curElem)}}>{curElem}</p>
                        )
                    })
                }
                {/* <p>All</p>
                <p>Cotton</p>
                <p>Cotton</p>
                <p>Cotton</p>
                <p>Cotton</p> */}

            </div>
        </div>
    )
}

export default FilterContainer