import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
 
    render(){
        return (
            <nav>
                <span className="title">Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        )
    }
}


export default Navbar;
