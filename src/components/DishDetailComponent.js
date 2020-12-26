import React from 'react'; 
import {Card,CardImg,CardBody,CardTitle,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
    function RenderDish({dish}){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    function RenderComments({com}){
        if(com!=null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h5>Comments</h5>
                    <ul className="list-unstyled">
                        {
                            com.map((com)=>{
                                return(
                                    <li key={com.id}>
                                        <br/>
                                        <h6>{com.comment}</h6>
                                        <p>- {com.author} , {new Intl.DateTimeFormat('en-US',{date:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(com.date)))}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            );
        else
            return <div></div>;
    }
    const DishDetail=(props)=>{
        if(props.dish!=null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish}/>
                        <RenderComments com={props.comments}/>
                    </div>
                </div>
            );
        }
        else{
            return <div></div>;
        }
           
    }
export default DishDetail;