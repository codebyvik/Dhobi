import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";

const small = css`
  margin-left: 2;
`;

const big = css`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const getLoaderStyle = ({ type }) => {
  return type === "small" ? small : big;
};

const LoaderWrapper = styled.span`
  ${getLoaderStyle}
`;

export default function Loader({ size, type }) {
  const Spinner = <LoadingOutlined style={{ fontSize: size, color: "white" }} spin />;
  return (
    <LoaderWrapper type={type}>
      <Spin indicator={Spinner} />
    </LoaderWrapper>
  );
}
