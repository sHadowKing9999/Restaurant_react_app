import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
const App=(props)=>{
    return(
        <div className="container">
            <Card>
                <CardImg width="100%" src='assets/images/uthappizza.png' alt="hello"/>
                <CardImgOverlay>
                    <CardTitle>Hello</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}
export default App;