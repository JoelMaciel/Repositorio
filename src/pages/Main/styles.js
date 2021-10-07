import styled, {keyframes, css} from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 80px auto;

    h1{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 20px;
    }
    svg{
        margin-right: 10px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    margin-top: 30px;

    input{
        flex : 1;
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }

`;

//Criando animação do botão
const animate = keyframes`
    from{
        transform : rotate(0deg);
    }
    to {
        transform : rotate(360deg);
    }
`;



export const SubmitButton = styled.button.attrs(props =>({
    type: 'submit',
    disabled : props.loading,
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0D2336;
    border: 0;
    border-radius: 4px;
    margin-left: 5px;
    padding: 0 15px ;
    
    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }
    
    ${props => props.loading &&
    css`
        svg{
            animation: ${animate} 2s liner infinite;
        }
    `
    }
`;

export const List = styled.ul`
list-style: none;

li{
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
   & + li  {
       border-top:  1px solid #eee;
   } 
   a{
       color :#0D2636;
       text-decoration:none;
   }
}

`;
export const DeleteButton = styled.button.attrs({
    type:'button'
})`

background: transparent;
color:#0D2623;
border: 0;
padding: 8px 7px;
outline: 0;

`;
