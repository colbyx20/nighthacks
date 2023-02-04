import '../App.css'
function Navbar(){


    return (
    <>
        <div className="flexContainer">
            <div className="innernav">
                <a href="/">Home</a>
            </div>

            <div className="Tips">
                <a href="Tips">Tips</a>
            </div>

            <div className="Counselors">
                <a href=" Counselors"> Counselors</a>
            </div>

            <div className="faqs">
                <a href="FAQS">FAQs</a>
            </div>

            <div className="aboutus">
                <a href = "AboutUs" >About Us</a>
            </div>

        </div>

    </>
    )
}


export default Navbar;