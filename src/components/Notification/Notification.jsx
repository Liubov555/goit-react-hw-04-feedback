import React from "react";
import { Text } from "./Notification.styles";

export default function Notification({ message }) {
    return message && <Text>{message}</Text>;
}