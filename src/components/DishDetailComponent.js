import React from 'react'; 
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';
     function RenderDish({dish}){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>);
        }
        else{
            return(
                <div></div>
            );
        }
    }
    function RenderComments({com}){
        return(
            <React.Fragment>
                    <br/>
                    <h6><p> {com.comment}  </p></h6>
                    <h6><p> - {com.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(com.date)))} 
                    </p></h6>
            </React.Fragment>
        );
    }
    const DishDetail=(props)=>{
        let comment,head;
        if(props.dish!=null){
            head=<h4>Comments</h4>;
            comment=props.dish.comments.map((com)=>{
            return(
                <div key={com.id}>
                    <RenderComments com={com}/>
                </div>
            );
            })
        }
        else{
            comment=<div></div>;
            head=<div></div>
        }
        return(
            <div className="container">
            <div className="row">
                <RenderDish dish={props.dish}/>

                <div className="col-md-5 col-12 m-1">
                    {head}
                    {comment}
                </div>
            </div>
            </div>
        );
    }
export default DishDetail;