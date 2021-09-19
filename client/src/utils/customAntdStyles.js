import { Input } from "antd";
import { Button } from "antd";
import { Colors } from "./GlobalStyles";
import styled from "styled-components";
const { TextArea } = Input;

export const CustomButton = styled(Button)`
  border-color: ${Colors.primary};
  background-color: ${Colors.primary};
  color: ${Colors.bglight};
  &:hover {
    border-color: ${Colors.primary};
    color: ${Colors.primary};
  }
`;

export const CustomTextArea = styled(TextArea)`
  &:hover {
    border-color: ${Colors.primary};
  }
  &:focus {
    border-color: ${Colors.primary};
  }
`;

export const CustomInput = styled(Input)`
  &:hover {
    border-color: ${Colors.primary};
  }
  &:focus {
    border-color: ${Colors.primary};
  }
`;
