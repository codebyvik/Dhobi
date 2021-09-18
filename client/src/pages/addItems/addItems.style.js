import styled from "styled-components";

export const AddItemsTable = styled.div`
  border: 1px solid gray;
  padding: 1rem;
  .item-header {
    display: flex;
    border-bottom: 1px solid grey;
    * {
      width: 25%;
      margin-right: 1rem;
      border-right: 1px solid grey;
    }
  }
  .items {
    display: flex;
    margin: 1rem 0;
    * {
      width: 25%;
      margin-right: 1rem;
    }
    .remove {
      width: 10%;
    }
    .ant-select-selector {
      width: 100% !important;
      margin: 0 !important;
      .ant-select-selection-overflow-item {
        width: 50% !important;
        margin: 0 !important;
        .ant-select-selection-item {
          width: 100% !important;
          margin: 0 !important;
          .ant-select-selection-item-content {
            width: 100% !important;
            margin: 0 !important;
          }
        }
      }
    }
  }
`;
