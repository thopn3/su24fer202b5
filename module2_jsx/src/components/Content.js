import React from "react";
class Content extends React.Component{
    render(){
        return (
            <section>
                {this.props.children}
            </section>
        )
    }
}

class Left extends React.Component{
    render(){
        return (
            <div>
                Left content
            </div>
        )
    }
}

class Right extends React.Component{
    render(){
        return (
            <div>
                Right content
            </div>
        )
    }
}

// Dong goi 2 component Left, Right trong cung namespace
Content.Column1 = Left;
Content.Column2 = Right;

export default Content;