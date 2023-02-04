
function Header(){


    return(
        <div className="myHeader">
            <div className='headerimage'>
                <div className="hackimage" style={{paddingLeft:"40px"}}>
                    <img style={{width:"80px", height:"80px"}} src={"hack-a-sours.jpg"}/>
                </div>
            </div>
            
            <div className='groupname' 
                style={{border:"2px solid black", borderStyle: "dashed"}}>
                <div style={{padding: "15px", fontSize: "25px"}}>
                    Money-Sours
                </div>
            </div>
            
            <div className='signupform' style={{paddingRight:"05%", fontSize: "25px"}}>Signup</div>
        </div>
    )
}

export default Header;