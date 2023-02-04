function Navbar(){


    return (
    <>
        {/* parent*/}
        <div className="flexContainer">
            {/* child of flexContainer */}
            <div className="innernav">
                HI
            </div>
        {/* sibling of innernav */}
            <div>
                hi2
            </div>

        </div>

    </>
    )
}


export default Navbar;