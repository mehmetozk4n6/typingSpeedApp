import styled from "styled-components";

export const ControlPanel = styled.div`
    display:flex;
    flex-direction:row;
    padding:0.5em 3em;
    justify-content: center;
    background-color:#A7C8E7;
    align-items:center;
    input {
        height:2em;
        width : 50%;
        margin:0 1em;
    }

    button {
        background-color: #3276B1;
        color: #fff;
        border:none;
        padding:0.5em;
        
    }
    button:hover {
        background-color: #053f70;
        cursor: pointer;
    }

`