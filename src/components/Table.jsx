import styled from "styled-components";

export const Table = styled.table`
margin: auto;

 
 width: 90%;
 margin-top: 5%;
 border-top-left-radius: 1rem;
 border-top-right-radius: 1rem;
 font-size: 5em;
 border-bottom: 0.5rem solid green;

 & > thead {
   background-color: green;
   color : white;
 }
 & > thead > th {
   border-bottom: 0.5rem solid black;
 }
 & > thead > tr :nth-child(1) {

   border-top-left-radius: 1rem;
 }
 & > thead > tr :nth-child(4) {

   border-top-right-radius: 1rem;
 }

`