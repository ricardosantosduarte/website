import { differenceInYears } from 'date-fns';
import { Spacer, Text } from '~/components';

const Footer: React.FC = () => {
    return (
        <Text size={'subTitle'}>
            {`© 2023 - ${new Date().getFullYear()} // Ricardo Santos Duarte`}
        </Text>
    );
};

export { Footer };
