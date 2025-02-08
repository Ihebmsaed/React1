import { useEffect, useState } from "react";

export default function ColorBox(props) {
    const [color, setColor] = useState(props.initialColor || "#FFFFFF");

    useEffect(() => {
        console.log('I m rendering 1 - ColorBox');
        return () => {
            console.log("I m unmounting - ColorBox");
        };
    }, []);

    useEffect(() => {
        console.log('I m rendering 2 - ColorBox');
        console.log(color);
    }, [color]);

    useEffect(() => {
        console.log('I m rendering 3 - ColorBox');
    });

    const changeColor = () => {
        const randomColor = props.colorOptions[Math.floor(Math.random() * props.colorOptions.length)];
        setColor(randomColor);
    };

    return (
        <>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color,
                    border: '1px solid black',
                }}
            ></div>
            <button onClick={changeColor}>Changer de couleur</button>
        </>
    );
}