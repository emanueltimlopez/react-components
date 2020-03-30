import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #fff;
    flex-direction: column;
    line-height: 1.5;
    {prop.mini ? (
      font-size: 3em;
      padding-top: 0;
      margin-right: 2rem;
    ): ''}
`