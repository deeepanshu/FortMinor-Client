import React from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

class Sidebar extends React.Component {


    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a
                        href="javascript:void(0)"
                        className="closebtn"
                        onClick={() => {
                            let l = document.getElementById("mySidenav");
                            l.style.width = "0px";
                        }}
                    >
                        &times;
                    </a>
                    <SideBarRows links={this.props.links}/>
                </div>
                <span
                    style={{
                        fontSize: "30px",
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        let l = document.getElementById("mySidenav");
                        l.style.width = "250px";
                    }}
                >
          &#9776; Menu
        </span>
            </div>
        );
    }
}

const SideBarRows = props => {
    return props.links.map((row, counter) => (
        <Link to={row.link} key={counter} onClick={()=>{
            let l = document.getElementById("mySidenav");
            l.style.width = "0px";
        }}>
            {row.heading}
        </Link>
    ));
};

export default withRouter(Sidebar);
