import { ButtonsBox, Button } from './FeedbackOptions.styled'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ButtonsBox>
            {options.map(option => (
                <Button key={option} onClick={onLeaveFeedback} name={option} type="button">
                    {option}
                </Button>
            ))}
        </ButtonsBox>
    )
}
