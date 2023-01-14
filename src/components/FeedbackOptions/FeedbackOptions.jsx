import { ButtonsBox, Button } from './FeedbackOptions.styled'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ButtonsBox>
            {Object.keys(options).map(key => (
                <Button key={key} onClick={onLeaveFeedback} name={key}>
                    {key}
                </Button>
            ))}
        </ButtonsBox>
    )
}
