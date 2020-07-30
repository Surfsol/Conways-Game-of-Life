import React from 'react'


const About = ()=> {


    return(
        <>
        <div>Conway's Game of Life</div>
        <p>In the Game of Life, these rules examine each cell of the grid. For each cell, it counts that cell's eight neighbors (up, down, left, right, and diagonals), and then act on that result.

        If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
        If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.
        From those two rules, many types of "creatures" can be created that move around the "landscape".</p>
        <h2>Add Colors</h2>
        <h2>Adjust Speed</h2>
        <h2>Adjust Size</h2>
        </>
    )
}
export default About