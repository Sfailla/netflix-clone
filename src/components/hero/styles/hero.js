import styled from 'styled-components/macro';

export const Container = styled.div`
	padding: 70px 45px;
	border-bottom: 8px solid #222;
	color: #fff;
	z-index: 5;

	@media (max-width: 550px) {
		padding: 50px 5%;
	}
`;

export const Card = styled.div`
	width: 100%;
	padding: 75px 0;
	max-width: 950px;
	margin: 0 auto;
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 64px;
	line-height: 1.1;
	max-width: 800px;
	margin: .67em auto;

	@media (max-width: 750px) {
		font-size: 28px;
	}
`;

export const SubTitle = styled.h2`
	max-width: 800px;
	font-size: 26px;
	line-height: 1.3;
	font-weight: 400;
	margin: 16px auto;

	@media (max-width: 750px) {
		font-size: 18px;
	}
`;

export const Text = styled.h3`
	padding-bottom: 20px;
	font-size: 19.2px;
	margin: 0 auto;
	font-weight: 400;
`;
