import React from "react";
import { StatisticBox } from './Statistic.styled';

export default function Statistics(
    { good, neutral, bad, total, positivePercentage }
) {
    return (
        <StatisticBox>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positive feedback: {positivePercentage}%</span>
        </StatisticBox>
    )

}