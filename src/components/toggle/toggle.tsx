import { useState } from 'react';
import { ToggleInput, ToggleLabel, ToggleSpan } from './toggle.styles';
import { Text } from '../text';
import { sendCustomEvent } from '~/utils/ga';

interface Props {
    eventName?: string;
    label: string;
    isPreviouslySelected: boolean;
    onClick: (isSelected: boolean) => void;
}

const Toggle: React.FC<Props> = ({
    eventName,
    label,
    isPreviouslySelected = false,
    onClick,
}) => {
    const [isSelected, setIsSelected] = useState(isPreviouslySelected);

    const handleClick = () => {
        setIsSelected(!isSelected);

        if (eventName) {
            sendCustomEvent(eventName, {
                category: 'toggle',
                label: label,
                value: !isSelected,
            });
        }

        onClick(!isSelected);
    };

    return (
        <ToggleLabel
            className="toggle"
            htmlFor="toggle-checkbox"
        >
            <Text
                as="span"
                size={'subTitle'}
                lineHeight={'custom'}
            >
                {label}
            </Text>
            <ToggleInput
                type="checkbox"
                id="toggle-checkbox"
                checked={isSelected}
                onChange={handleClick}
            />
            <ToggleSpan></ToggleSpan>
        </ToggleLabel>
    );
};

export { Toggle };
