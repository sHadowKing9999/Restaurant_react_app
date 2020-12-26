import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Form,FormGroup,Label,Col,Input,Button,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';
class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:'',
            touched:{
                firstname:false,
                lastname:false,
                telnum:false,
                email:false
            }
        };
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        })
    }
    validate(firstname,lastname,telnum,email){
        const errors={
            firstname:'',
            lastname:'',
            telnum:'',
            email:''
        }
        if(this.state.touched.firstname&&firstname.length<3)
        errors.firstname="First Name cannot be smaller than 3 characters";
        else if(this.state.touched.firstname&&firstname.length>10)
        errors.firstname="First Name cannot be greater than 10 characters";

        if(this.state.touched.lastname&&lastname.length<3)
        errors.lastname="Last Name cannot be smaller than 3 characters";
        else if(this.state.touched.lastname&&lastname.length>10)
        errors.lastname="Last Name cannot be greater than 10 characters";
        const reg=/^\d+$/;
        if(this.state.touched.telnum&&!reg.test(telnum))
        errors.telnum="Tel. No. should contain only digits";
        if(this.state.touched.email&&email.split('').filter(x=>x==='@').length!==1)
        errors.email="Email should contain 1 @";

        return errors;
    }
    handleInput(event){
        const target=event.target;
        const value=target.name==="checkbox"?target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]:value
        });
    }
    handleSubmit(event){
        console.log("Current state is : "+JSON.stringify(this.state));
        alert("Current state is : "+JSON.stringify(this.state));
        event.preventDefault();
    }
    render()
    {   const errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
        return(
            <div className="container">
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contact Us</h3>
                            <hr/>                
                        </div>
                    </div>
                    
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" href="skype.com" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label md={2} htmlFor="firstname">First Name</Label>
                                <Col md={10}>
                                    <Input valid={errors.firstname===''} invalid={errors.firstname!==''}
                                        onBlur={this.handleBlur('firstname')}
                                     onChange={this.handleInput} type="text" id="firstname" name="firstname" 
                                     value={this.state.firstname} placeholder="First Name"/>
                                     <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="lastname">Last Name</Label>
                                <Col md={10}>
                                    <Input valid={errors.lastname===''} invalid={errors.lastname!==''}
                                        onBlur={this.handleBlur('lastname')}
                                     onChange={this.handleInput} type="text" id="lastname" name="lastname" 
                                     value={this.state.lastname} placeholder="Last Name"/>
                                     <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="telnum">Tel. No.</Label>
                                <Col md={10}>
                                    <Input valid={errors.telnum===''} invalid={errors.telnum!==''}
                                        onBlur={this.handleBlur('telnum')}
                                    onChange={this.handleInput} type="text" id="telnum" name="telnum" 
                                    value={this.state.telnum} placeholder="Tel. No."/>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="email">Email</Label>
                                <Col md={10}>
                                    <Input valid={errors.email===''} invalid={errors.email!==''}
                                        onBlur={this.handleBlur('email')}
                                     onChange={this.handleInput} type="text" id="email" name="email" 
                                     value={this.state.email} placeholder="Email"/>
                                     <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input onChange={this.handleInput} type="checkbox" id="agree" name="agree" checked={this.state.agree}/>
                                            {' '}<strong>May we Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                    <Input onChange={this.handleInput} type="select" name="contactType" value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="message">Your Feedback</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInput} type="textarea" name="message" id="message" 
                                        rows="12" 
                                        value={this.state.message} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary">Send FeedBack!</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;