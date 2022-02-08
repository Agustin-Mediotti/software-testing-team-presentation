import React from "react";
import {Button, Card, ListGroup, OverlayTrigger, Popover, Row} from "react-bootstrap";
import Diana from "../img/Diana.jpg"
import Agustin from "../img/yo.jpg"
import Jose from "../img/Jose.jpg"
import Adrian from "../img/AdrianOviedo.jpg"
import Jheimy from "../img/jheimy.jpg"
import Mariela from "../img/mariela.jpg"

class ProfileCard extends React.Component {
    render() {
        return (
            <Row xs={1} md={2} className="g-1" style={{alignItems:'center', justifyContent:'space-between', marginTop:'25vh'}}>
                <Card style={{ width: '18rem', height:'30rem'}}>
                    <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Diana} />
                    <Card.Body>
                        <Card.Title>Diana Rojas Ustariz</Card.Title>
                        <Card.Subtitle>Profesión: Ing. Electrónica</Card.Subtitle>
                        <div style={{marginTop:10}}>
                            <Card.Text>
                                ¡Hola! Mi nombre es Diana Rojas, tengo 26 años, soy de Oruro-Bolivia y actualmente vivo en la ciudad de Cochabamba.
                            </Card.Text>
                            <Card.Footer>
                                <ListGroup horizontal style={{justifyContent:'space-between'}}>
                                    <OverlayTrigger trigger="click" placement="right" overlay={diana}>
                                        <Button variant="secondary">Expectativas</Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger trigger="click" placement="right" overlay={dianaHobbies}>
                                        <Button variant="secondary">Hobbies</Button>
                                    </OverlayTrigger>
                                </ListGroup>
                            </Card.Footer>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height:'30rem' }}>
                    <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Agustin} />
                    <Card.Body>
                        <Card.Title>Agustin Mediotti</Card.Title>
                        <Card.Subtitle>Profesión: Lic. en Informática</Card.Subtitle>
                        <div style={{marginTop:10}}>
                            <Card.Text>
                                ¡Hola! Mi nombre es Diana Rojas, tengo 26 años, soy de Oruro-Bolivia y actualmente vivo en la ciudad de Cochabamba.
                            </Card.Text>
                            <Card.Footer>
                                <ListGroup horizontal style={{justifyContent:'space-between'}}>
                                    <OverlayTrigger trigger="click" placement="right" overlay={agus}>
                                        <Button variant="secondary">Expectativas</Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger trigger="click" placement="right" overlay={agusHobbies}>
                                        <Button variant="secondary">Hobbies</Button>
                                    </OverlayTrigger>
                                </ListGroup>
                            </Card.Footer>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height:'30rem' }}>
                    <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Adrian} />
                    <Card.Body>
                        <Card.Title>Adrian Oviedo</Card.Title>
                        <Card.Subtitle>Profesión: Ing. Telecomunicaciones</Card.Subtitle>
                        <div style={{marginTop:10}}>
                            <Card.Text>
                                ¡Hola! Me llamo Adrian Oviedo, tengo 26 años, soy de Cochabamba-Bolivia y actualmente vivo ahí.
                            </Card.Text>
                            <Card.Footer>
                                <ListGroup horizontal style={{justifyContent:'space-between'}}>
                                    <OverlayTrigger trigger="click" placement="right" overlay={adrian}>
                                        <Button variant="secondary">Expectativas</Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger trigger="click" placement="right" overlay={adrianHobbies}>
                                        <Button variant="secondary">Hobbies</Button>
                                    </OverlayTrigger>
                                </ListGroup>
                            </Card.Footer>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height:'30rem' }}>
                    <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Mariela} />
                    <Card.Body>
                        <Card.Title>Mariela Rioja Veliz</Card.Title>
                        <Card.Subtitle>Profesión: Ing. Indurstrial</Card.Subtitle>
                        <div style={{marginTop:10}}>
                            <Card.Text>
                                Mi nombre es Mariela Rioja Veliz, soy de Cochabamba-Bolivia.
                            </Card.Text>
                            <Card.Footer>
                                <ListGroup horizontal style={{justifyContent:'space-between'}}>
                                    <OverlayTrigger trigger="click" placement="right" overlay={mariela}>
                                        <Button variant="secondary">Expectativas</Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger trigger="click" placement="right" overlay={marielaHobbies}>
                                        <Button variant="secondary">Hobbies</Button>
                                    </OverlayTrigger>
                                </ListGroup>
                            </Card.Footer>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height:'30rem' }}>
                    <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Jose} />
                    <Card.Body>
                        <Card.Title>José Espinosa</Card.Title>
                        <Card.Subtitle>Profesión: Recluter IT</Card.Subtitle>
                        <div style={{marginTop:10}}>
                            <Card.Text>
                                Mi nombre es José María Espinosa, tengo 35 años, oriundo de la provincia de Tucumán en Argentina y sigo viviendo en la misma.
                            </Card.Text>
                            <Card.Footer>
                                <ListGroup horizontal style={{justifyContent:'space-between'}}>
                                    <OverlayTrigger trigger="click" placement="right" overlay={jose}>
                                        <Button variant="secondary">Expectativas</Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger trigger="click" placement="right" overlay={joseHobbies}>
                                        <Button variant="secondary">Hobbies</Button>
                                    </OverlayTrigger>
                                </ListGroup>
                            </Card.Footer>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height:'30rem' }}>
                    <Card.Img style={{maxWidth:'100%', height:'255px', overflow:"hidden"}} variant="top" src={Jheimy} />
                    <Card.Body>
                        <Card.Title>Jheimy Mirando Candia</Card.Title>
                        <Card.Subtitle>Profesión: Ing. de Sistemas</Card.Subtitle>
                        <div style={{marginTop:10}}>
                            <Card.Text>
                                ¡Hola! Mi nombre es Jheimy Miranda, tengo 23 años, soy de la ciudad de Cochabamba y actualmente vivo en la misma.
                            </Card.Text>
                            <Card.Footer>
                                <ListGroup horizontal style={{justifyContent:'space-between'}}>
                                    <OverlayTrigger trigger="click" placement="right" overlay={jheimy}>
                                        <Button variant="secondary">Expectativas</Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger trigger="click" placement="right" overlay={jheimyHobbies}>
                                        <Button variant="secondary">Hobbies</Button>
                                    </OverlayTrigger>
                                </ListGroup>
                            </Card.Footer>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
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

const dianaHobbies = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Mis Hobbies son</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Tocar el piano</ListGroup.Item>
                <ListGroup.Item>Cultivar plantas de ajís y flores</ListGroup.Item>
                <ListGroup.Item>Construir cosas.</ListGroup.Item>
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
                <ListGroup.Item>Aprender procesos de calidad.</ListGroup.Item>
                <ListGroup.Item>Desarrollar mis capacidades para dirigir un equipo.</ListGroup.Item>
                <ListGroup.Item>Aprender a trabajar con personas de diferentes culturas.</ListGroup.Item>
                <ListGroup.Item>Llegar a ser una ingeniera de calidad con la capacidad de enfrentar cualquier reto que se haga presente.</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const agusHobbies = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Mis Hobbies son</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>jugar al Ajedrez</ListGroup.Item>
                <ListGroup.Item>Colaborar en proyectos OpenSource</ListGroup.Item>
                <ListGroup.Item>Tocar la batería</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const jose = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Expectativas en Jala</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Poder adquirir las herramientas necesarias para poder desempeñarme de la mejor manera posible en el ámbito dentro de Jalasoft.</ListGroup.Item>
                <ListGroup.Item>Pulir mi soft skillset para ser cada vez mejor compañero de trabajo y contribuyente a los diversos proyectos en donde llegue a participar.</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const joseHobbies = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Mis Hobbies son</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Entrenar (Gimnasio)</ListGroup.Item>
                <ListGroup.Item>Cantar</ListGroup.Item>
                <ListGroup.Item>Comer (ir a conocer lugares donde hagan café de especialidad)</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const jheimy = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Expectativas en Jala</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Adquirir el mayor conocimiento posible y desarrollar las habilidades necesarias para desenvolverme mejor en esta área de control de calidad.</ListGroup.Item>
                <ListGroup.Item>Aprender a trabajar en grupo y con diferentes personas.</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const jheimyHobbies = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Mis Hobbies son</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Escuchar música</ListGroup.Item>
                <ListGroup.Item>Jugar Basketball</ListGroup.Item>
                <ListGroup.Item>Tocar la guitarra</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const adrian = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Expectativas en Jala</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Consolidar y obtener una base sólida de conocimientos sobre calidad y desarrollo de software.</ListGroup.Item>
                <ListGroup.Item>Aprender a usar nuevas ya sean programas o lenguajes de programación.</ListGroup.Item>
                <ListGroup.Item>Conocer personas nuevas.</ListGroup.Item>
                <ListGroup.Item>Aprender a trabajar con personas de diferentes culturas.</ListGroup.Item>
                <ListGroup.Item>Trabajar en Jala una vez terminada la capacitación y ganar años de experiencia.</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

const adrianHobbies = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Mis Hobbies son</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>Hacer ejercicio (calistenia, gimnasio, trotar).</ListGroup.Item>
                <ListGroup.Item>Escuchar música (en especial rock).</ListGroup.Item>
                <ListGroup.Item>Hacer algo con amigos.</ListGroup.Item>
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

const marielaHobbies = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Mis Hobbies son</Popover.Header>
        <Popover.Body>
            <ListGroup>
                <ListGroup.Item>jugar al Ajedrez</ListGroup.Item>
            </ListGroup>
        </Popover.Body>
    </Popover>
);

export default ProfileCard;