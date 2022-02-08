import React from "react";
import {Button, ListGroup, OverlayTrigger, Popover, Carousel, Card} from "react-bootstrap";
import Diana from "../img/Diana.jpg"
import Agustin from "../img/yo.jpg"
import Jose from "../img/Jose.jpg"
import Adrian from "../img/AdrianOviedo.jpg"
import Jheimy from "../img/jheimy.jpg"
import Mariela from "../img/mariela.jpg"

class CarouselList extends React.Component {
    render() {
        return(
            <div style={{alignItems:'center', justifyContent:'center'}}>
                <Carousel>
                    <Carousel.Item style={{alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Diana} />
                            <Card.Body>
                                <Card.Title>Diana Rojas</Card.Title>
                                <Card.Text>
                                    ¡Hola! Mi nombre es Diana Rojas, tengo 26 años, soy de Oruro-Bolivia y actualmente vivo en la ciudad de Cochabamba.
                                </Card.Text>

                                <Card.Text>
                                    Hobbies: Tocar el piano, cultivar plantas de ajís y flores y construir cosas
                                </Card.Text>
                                <OverlayTrigger trigger="click" placement="right" overlay={diana}>
                                    <Button variant="secondary">Expectativas</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Agustin} />
                            <Card.Body>
                                <Card.Title>Agustin Mediotti</Card.Title>
                                <Card.Text>
                                    ¡Hola! Mi nombre es Diana Rojas, tengo 26 años, soy de Oruro-Bolivia y actualmente vivo en la ciudad de Cochabamba.
                                </Card.Text>
                                <OverlayTrigger trigger="click" placement="right" overlay={agus}>
                                    <Button variant="secondary">Expectativas</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Jose} />
                            <Card.Body>
                                <Card.Title>Jose Espinosa</Card.Title>
                                <Card.Text>
                                    ¡Hola! Mi nombre es Diana Rojas, tengo 26 años, soy de Oruro-Bolivia y actualmente vivo en la ciudad de Cochabamba.
                                </Card.Text>
                                <OverlayTrigger trigger="click" placement="right" overlay={jose}>
                                    <Button variant="secondary">Expectativas</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Jheimy} />
                            <Card.Body>
                                <Card.Title>Jheimy Miranda Candia</Card.Title>
                                <Card.Text>
                                    ¡Hola! Mi nombre es Diana Rojas, tengo 26 años, soy de Oruro-Bolivia y actualmente vivo en la ciudad de Cochabamba.
                                </Card.Text>
                                <OverlayTrigger trigger="click" placement="right" overlay={jheimy}>
                                    <Button variant="secondary">Expectativas</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Adrian} />
                            <Card.Body>
                                <Card.Title>Adrian Oviedo</Card.Title>
                                <Card.Text>
                                    ¡Hola! Mi nombre es Diana Rojas, tengo 26 años, soy de Oruro-Bolivia y actualmente vivo en la ciudad de Cochabamba.
                                </Card.Text>
                                <OverlayTrigger trigger="click" placement="right" overlay={adrian}>
                                    <Button variant="secondary">Expectativas</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Diana} />
                            <Card.Body>
                                <Card.Title>Mariela Rioja Veliz</Card.Title>
                                <Card.Text>
                                    ¡Hola! Mi nombre es Diana Rojas, tengo 26 años, soy de Oruro-Bolivia y actualmente vivo en la ciudad de Cochabamba.
                                </Card.Text>
                                <OverlayTrigger trigger="click" placement="right" overlay={mariela}>
                                    <Button variant="secondary">Expectativas</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </div>

        )
    }
}


const diana = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Expectativas en Jala</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Poder profundizar y mejorar mis conocimientos acerca de la ingeniería de calidad de software.</ListGroup.Item>
                <ListGroup.Item>Aprender nuevas tecnologías en los procesos de calidad.</ListGroup.Item>
                <ListGroup.Item>Mejorar mi forma de trabajo en equipo.</ListGroup.Item>
                <ListGroup.Item>Aprender a trabajar con personas de diferentes culturas.</ListGroup.Item>
                <ListGroup.Item>Llegar a ser una ingeniera de calidad con la capacidad de enfrentar cualquier reto que se haga presente.</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const agus = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Expectativas en Jala</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Mejorar mis capacidades como programador.</ListGroup.Item>
                <ListGroup.Item>Aprender nuevas tecnologías en los procesos de calidad.</ListGroup.Item>
                <ListGroup.Item>Mejorar mi forma de trabajo en equipo.</ListGroup.Item>
                <ListGroup.Item>Aprender a trabajar con personas de diferentes culturas.</ListGroup.Item>
                <ListGroup.Item>Llegar a ser una ingeniera de calidad con la capacidad de enfrentar cualquier reto que se haga presente.</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const jose = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Expectativas en Jala</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Poder profundizar y mejorar mis conocimientos acerca de la ingeniería de calidad de software.</ListGroup.Item>
                <ListGroup.Item>Aprender nuevas tecnologías en los procesos de calidad.</ListGroup.Item>
                <ListGroup.Item>Mejorar mi forma de trabajo en equipo.</ListGroup.Item>
                <ListGroup.Item>Aprender a trabajar con personas de diferentes culturas.</ListGroup.Item>
                <ListGroup.Item>Llegar a ser una ingeniera de calidad con la capacidad de enfrentar cualquier reto que se haga presente.</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const jheimy = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Expectativas en Jala</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Poder profundizar y mejorar mis conocimientos acerca de la ingeniería de calidad de software.</ListGroup.Item>
                <ListGroup.Item>Aprender nuevas tecnologías en los procesos de calidad.</ListGroup.Item>
                <ListGroup.Item>Mejorar mi forma de trabajo en equipo.</ListGroup.Item>
                <ListGroup.Item>Aprender a trabajar con personas de diferentes culturas.</ListGroup.Item>
                <ListGroup.Item>Llegar a ser una ingeniera de calidad con la capacidad de enfrentar cualquier reto que se haga presente.</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);


const adrian = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Expectativas en Jala</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Poder profundizar y mejorar mis conocimientos acerca de la ingeniería de calidad de software.</ListGroup.Item>
                <ListGroup.Item>Aprender nuevas tecnologías en los procesos de calidad.</ListGroup.Item>
                <ListGroup.Item>Mejorar mi forma de trabajo en equipo.</ListGroup.Item>
                <ListGroup.Item>Aprender a trabajar con personas de diferentes culturas.</ListGroup.Item>
                <ListGroup.Item>Llegar a ser una ingeniera de calidad con la capacidad de enfrentar cualquier reto que se haga presente.</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const mariela = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Expectativas en Jala</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Poder profundizar y mejorar mis conocimientos acerca de la ingeniería de calidad de software.</ListGroup.Item>
                <ListGroup.Item>Aprender nuevas tecnologías en los procesos de calidad.</ListGroup.Item>
                <ListGroup.Item>Mejorar mi forma de trabajo en equipo.</ListGroup.Item>
                <ListGroup.Item>Aprender a trabajar con personas de diferentes culturas.</ListGroup.Item>
                <ListGroup.Item>Llegar a ser una ingeniera de calidad con la capacidad de enfrentar cualquier reto que se haga presente.</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);


export default CarouselList;