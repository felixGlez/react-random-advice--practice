import styled from 'styled-components';

const StyledMain = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #202733;
`;

const StyledCard = styled.div`
	width: 33.75rem;
	padding: 3rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #313a48;
	box-shadow: 30px 50px 80px 0 rgba(0, 0, 0, 0.1);
	color: white;
	position: relative;
`;

const StyledButtonContainer = styled.div`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	background-color: #53ffaa;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 85%;
	transition: 0.3s;

	&:hover {
		box-shadow: 0px 0px 40px 0 #53ffaa;
	}
`;

const StyledButton = styled.button`
	background: url(./images/icon-dice.svg);
	background-size: cover;
	background-position: center;
	border: none;
	padding: 1rem;
	cursor: pointer;
`;

export { StyledMain, StyledCard, StyledButton, StyledButtonContainer };
