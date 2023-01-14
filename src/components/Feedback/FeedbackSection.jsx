import React, { useState, useEffect } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

import { Container } from './FeedbackSection.styles';

export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [totalFeedback, setTotalFeedback] = useState(0);
    const [positivePercentage, setPositivePercentage] = useState(0);

    const leaveFeedback = evt => {
        const updateValue = evt.target.name;

        switch (updateValue) {
            case options[0]:
                setGood(prevValue => prevValue + 1);
                break;
            case options[1]:
                setNeutral(prevValue => prevValue + 1);
                break;
            case options[2]:
                setBad(prevValue => prevValue + 1);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setTotalFeedback(good + neutral + bad);
        setPositivePercentage(parseInt((good / totalFeedback) * 100));
    }, [good, neutral, bad, totalFeedback])

    const options = Object.keys({ good, neutral, bad });

    return (
        <Container>
            <Section title="Please leave feedback">

                {<FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />}

            </Section>

            {totalFeedback ?
                (<Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalFeedback}
                        positivePercentage={positivePercentage}
                    />
                </Section>) : (
                    <Notification message="There is no feedback" />
                )}
        </Container>

    )

}
