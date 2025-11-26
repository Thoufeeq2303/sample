//statefull(store,display)
//lifecycle(initializatiin, mouting, updation, unmounting)
//state - mutable, setstate

import React from "react";

// class ClassPage extends React.Component{
//     render(){
//         return(
//             <>
//             <h1>Class component</h1>
//             </>
//         )
//     }
// }
// export default ClassPage



//state
class ClassPage extends React.Component{
    constructor(){
        super()
        this.count = {
            name:"thoufeeq",
            age:20
        }

        this.setCount = {
            name:"md.thoufeeq"
        }
    }
    render(){
        return(
            <>
            <h1>Class component</h1>
            <h2>{this.setCount.name} and {this.count.age}</h2>

            </>
        )
    }
}
export default ClassPage