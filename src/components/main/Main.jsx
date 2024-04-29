import { useEffect, useState } from 'react';
import {
	StyledButton,
	StyledButtonContainer,
	StyledCard,
	StyledMain
} from './styles';

const Main = () => {
	const [adviceCounter, setAdviceCounter] = useState(0);
	const [advice, setAdvice] = useState([]);

	useEffect(() => {
		fetchAdvice(setAdvice);
	}, [adviceCounter]);

	return (
		<StyledMain>
			<StyledCard>
				<span>ADVICE #{advice.id}</span>
				<p>{advice.advice}</p>
				<img src='./images/pattern-divider-desktop.svg' />
				<StyledButtonContainer>
					<StyledButton onClick={() => setAdviceCounter(adviceCounter + 1)} />
				</StyledButtonContainer>
			</StyledCard>
		</StyledMain>
	);
};

const fetchAdvice = async setAdvice => {
	const response = await fetch(`https://api.adviceslip.com/advice`);
	const data = await response.json();
	setAdvice(data.slip);
};

export default Main;
