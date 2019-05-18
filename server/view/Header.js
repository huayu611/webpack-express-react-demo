
import React,{PureComponent} from 'react';

class Header extends PureComponent{
    static defaultProps  = {
        title:"Home"
    }
    render(){
        return (   
            <React.Fragment>
            <title>{this.props.title}</title>
            </React.Fragment>
            )
    }
}

export default Header;