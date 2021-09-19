import { createGlobalStyle } from "styled-components";

export const Colors = {
  primary: "#00ADB5",
  lightGrey: "#F1F3F6",
  gray: "#393E46",
  bgdark: "#222831",
  bglight: "#ffffff",
  alert: "#F7FD04",
  danger: "#CE1212",
  success: "#4AA96C",
};

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



body{
/* font-family: 'Poppins', sans-serif; */
font-family:  sans-serif;
-webkit-font-smoothing: antialiased;
width: 100%;
overflow-x: hidden;
}

.container{
    width: 90%;
    margin: 0 auto;
    height: 100%;
  padding-bottom: 1rem;
}

ul{
  list-style-type: none;
}

.btn-primary{
  color: ${Colors.bglight};
  background-color: ${Colors.primary};
}

.primary{
  color: ${Colors.primary};
}


`;
