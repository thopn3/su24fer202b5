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

function Right({data=[], title}){
    return (
        <div>
            <h2 style={{textAlign:"center", lineHeight:"50px", backgroundColor:"yellow", color:"red"}}>
                {title}
            </h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Credit</th>
                </tr>
                {
                    data?.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.title}</td>
                            <td>{c.credit}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

// Dong goi 2 component Left, Right trong cung namespace
Content.Column1 = Left;
Content.Column2 = Right;

export default Content;