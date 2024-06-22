import styled from 'styled-components';
import { COLORS } from '../../shared/const/auth';
interface Props {
    primary?: true;
    width?: string;
    height?: string;
    margin?: string;
}

export const Button = styled.button<Props>`
    background: ${props => (props.primary ? COLORS.PRIMARY : COLORS.SECONDARY)};
    border: 1px solid
        ${props => (props.primary ? COLORS.SECONDARY : COLORS.PRIMARY)};
    color: ${props => (props.primary ? COLORS.SECONDARY : COLORS.PRIMARY)};
    width: ${props => (props.width ? props.width : '81px')};
    height: ${props => (props.height ? props.height : '38px')};
    margin: ${props => props.margin && props.margin};
    border-radius: 8px;
    transition: all 0.3s;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background: ${props =>
            props.primary ? COLORS.SECONDARY : COLORS.PRIMARY};
        border: 1px solid
            ${props => (props.primary ? COLORS.PRIMARY : COLORS.SECONDARY)};
        color: ${props => (props.primary ? COLORS.PRIMARY : COLORS.SECONDARY)};
    }
`;
