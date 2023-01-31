import { useState } from 'react';
import { ToggleInput, ToggleLabel, ToggleSpan } from './toggle.styles';

interface Props {
    isPreviouslySelected: boolean;
    onClick: (isSelected: boolean) => void;
}

const Toggle: React.FC<Props> = ({ isPreviouslySelected = false, onClick }) => {
    const [isSelected, setIsSelected] = useState(isPreviouslySelected);

    const handleClick = () => {
        setIsSelected(!isSelected);
        onClick(!isSelected);
    };

    return (
        <ToggleLabel className="toggle">
            <ToggleInput
                type="checkbox"
                checked={isSelected}
                onChange={handleClick}
            />
            <ToggleSpan></ToggleSpan>
        </ToggleLabel>
    );
};

export { Toggle };
