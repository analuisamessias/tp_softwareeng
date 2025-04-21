import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: inline;
		grid-template-columns: 1fr 1fr;
		color: #ffffff;

		${media.lessThan('medium')`
      display: flex;
    `}
	`}
`;

export const TopBar = styled.div`
	${({ theme }) => css`
		height: 50px;
		background: #0f2849;
		margin-bottom: auto;
	`}
`;

export const BottomBar = styled.div`
	${({ theme }) => css`
		height: 50px;
		background: #0f2849;
		margin-top: auto;
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: 1fr 1fr;
		color: #ffffff;
		flex: 1;

		${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
    `}
	`}
`;

export const LeftSection = styled.div`
	${({ theme }) => css`
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		padding: 4rem;

		${media.lessThan('medium')`
      display: none;
    `}
	`}
`;

export const RightSection = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: ${theme.space.xxl};
		color: #e2e2e2;

		div {
			display: flex;
			flex-direction: column;
		}
	`}
`;
