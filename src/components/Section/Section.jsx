import React from "react";
import { Title } from "./Section.styles";

export default function Section({ title, children }) {
    return (
        <section>
            <Title>{title}</Title>
            {children}
        </section>
    )
}