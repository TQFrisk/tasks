import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ColoredBox(): React.JSX.Element {
    const colors = ["red", "blue", "green"];
    const [colorIndex, setColorIndex] = useState<number>(0);

    return (
        <div>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: colors[colorIndex],
                }}
            />
            <Button
                onClick={() => {
                    setColorIndex((colorIndex + 1) % colors.length);
                }}
            >
                Change Color
            </Button>
        </div>
    );
}
