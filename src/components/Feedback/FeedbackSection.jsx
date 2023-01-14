import React from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

import { Container } from './FeedbackSection.styles';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onClick = event =>
        this.setState(prevState => ({
            [event.target.name]: prevState[event.target.name] + 1
        }));

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        return parseInt((this.state.good / this.countTotalFeedback()) * 100);
    }

    render() {
        return (
            <Container>

                <Section title="Please leave feedback">

                    {<FeedbackOptions options={this.state} onLeaveFeedback={this.onClick} />}

                </Section>

                {this.countTotalFeedback() ?
                    (<Section title="Statistics">
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    </Section>) : (
                        <Notification message="There ia no feedback" />
                    )}
            </Container>

        )
    };
}
export default Feedback;