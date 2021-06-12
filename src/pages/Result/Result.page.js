import React, {useState}  from "react";
import "./Result.page.css";
import { Redirect, Link } from "react-router-dom";
import {Context} from "../../context/ContextProvider";
import ResultComponent from "../../components/Result/Result.component"
import {Container, Row, Col} from "react-bootstrap";
import {ButtonResult} from "../../styled/Button";
import CenteredModal from "./Modal";

function Result() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Container className="result-container">
            <Row>
                <Col xs={12} md={6} className="mt-4">
                
                    <Context.Consumer>
                            {(context) => {
                                const { bmi } = context;
                                if(bmi < 18.50){
                                    return ( <React.Fragment>
                                   <ResultComponent 
                                    bmi={bmi}
                                    userWeight="Underweight" 
                                    color = "underweight-color result-p"
                                    />
                                    <CenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        title="Staying Healthy is a Life-Long Proposition!"
                                        message="When we think about dieting, most of us think about setting a weight-loss goal that will determine how long we watch what we’re eating.  A better way to think about it might be to ask yourself the question: How long do I want to try to avoid developing chronic disease? Put in those terms, it’s easy to see that getting control of BMI and eating foods that contribute to continuing good health (or that don’t directly contribute to the development of dangerous disease conditions) is not a short-term goal.  For many of us, doing what it takes to get our BMI into a healthy range and to keep it there means learning to live our lives in a new way. Scientists have found that one of the keys to success is to think about these goals every day."
                                    />
                                        </React.Fragment>
                                    )

                                }else if(bmi > 18.50 && bmi < 24.99){
                                    return (<React.Fragment>
                                    <ResultComponent 
                                            bmi={bmi}
                                            userWeight="Normal weight" 
                                            color = "text-success result-p"   
                                    />
                                    <CenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        title="Make use of protein!"
                                        message="Protein has a number of distinct benefits because it provides fewer calories per gram than carbohydrate or fat and keeps you feeling full for long periods of time. If you need to be strict on calorie content, opt for lean meat such as chicken breast and cuts of red meat with the fat trimmed off. Eggs are a strong and versatile choice and beans are lentils are a great choice, particularly for people following vegetarian or vegan diets."
                                    />
                                    </React.Fragment>)
                                }else if(bmi >25.00 && bmi < 29.99){
                                    return (<React.Fragment>
                                    <ResultComponent 
                                        bmi={bmi}
                                        userWeight="Overweight" 
                                        color = "overweight-color result-p"   
                                    />
                                    <CenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        title="Exercise Does More Than Burn Calories!"
                                        message="Increasing the amount of exercise you do each day means you burn more calories to help you lose weight.  And, research has shown very clearly that 30 minutes of moderately strenuous daily exercise is also one of the most important requirements for disease prevention – even for people who are already at an ideal weight.  The exercise you choose doesn’t need to be elaborate, or to take place in a gym.  Walking, biking, swimming, or gardening can do the trick, and getting a friend or family member to exercise with you can turn this into a valued part of your daily routine"
                                    />
                                        </React.Fragment>
                                    )
                                }else if(bmi > 30.00){
                                    return (<React.Fragment>
                                    <ResultComponent 
                                            bmi={bmi}
                                            userWeight="Obese"
                                            color = "text-danger result-p"    
                                    />
                                    <CenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        title="Don’t Waste Your Time, Energy, and Money on “Quick Fix” Solutions!"
                                        message="For some people, there may be faster ways to lose weight than following the diet suggestions listed here.  But the important thing to remember is that weight loss is not the only goal.  The more important goal is to keep your risk of developing chronic disease and dying younger as low as possible.  Fad diets, diet pills, protein powders, liposuction, and even intestinal or gastric bypass surgery might provide a leaner profile, but they don’t provide the nutrients needed to keep you as healthy as you could be."
                                    />
                                    </React.Fragment>)
                                } else{
                                    return <Redirect to="/"/>

                                }
                            
                            }}
                            
                    </Context.Consumer>
                    <Link to="/">
                        <ButtonResult>Recalculate</ButtonResult>
                    </Link>
                    <br/>
                    <ButtonResult onClick={() => setModalShow(true)}>See Recommendation </ButtonResult>

                </Col>
                <Col xs={12} md={5} className="mt-4">
                    <div>
                        <img className="bmi-image" src="https://www.bajajallianzlife.com/content/dam/balic/index/BMI-Calculator.png" alt="bmi"/>
                    </div>
                </Col>
            </Row>
           
        </Container>
 
    );
}

export default Result;

