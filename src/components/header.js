import React from "react";
import { Navbar, NavbarBrand} from "reactstrap";

function header(props){
    return(
        <div className="App">
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">TIC-TAC-TOE</NavbarBrand>
            </div>
            </Navbar>
        </div>
    )
}
export default header;