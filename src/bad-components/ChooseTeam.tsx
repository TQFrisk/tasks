import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    return (
        <div>
            <h3>Choose Team</h3>
            <Container>
                <Row>
                    <Col>
                        {PEOPLE.map((person: string) => (
                            <div key={person} style={{ marginBottom: "4px" }}>
                                Add{" "}
                                <Button
                                    size="sm"
                                    onClick={() => {
                                        setTeam([...team, person]);
                                    }}
                                >
                                    {person}
                                </Button>
                            </div>
                        ))}
                    </Col>
                    <Col>
                        <strong>Team:</strong>
                        <ul>
                            {team.map((person: string) => (
                                <li key={person}>{person}</li>
                            ))}
                        </ul>
                        <Button
                            onClick={() => {
                                setTeam([]);
                            }}
                        >
                            Clear Team
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
