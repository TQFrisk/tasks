import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload. Tom Frisk
            </p>
            <div>
                <h1>This is header text</h1>
                <p>this is just a paragraph of text</p>
                <ol>
                    <li>First thing</li>
                    <li>Second thing</li>
                    <li>Third Thing</li>
                </ol>
                <img
                    src="https://lh6.ggpht.com/VJ_U4M9YY0H0C4EVM-PvKUAsmVcGwGoiIMlxb5PTABfGkZBNUppCgu6CPwg5PzPEZ1hi=w1264"
                    alt="Jeeves and Wooster"
                />
            </div>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "250px",
                                    height: "500px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "500px",
                                    height: "250px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
