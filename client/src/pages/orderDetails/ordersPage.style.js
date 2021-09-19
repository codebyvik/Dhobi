import styled from "styled-components";

export const OrdersWrapper = styled.div`
  margin-top: 1rem !important;
  .order-card {
    border-bottom: 1px solid gray;
    padding: 1rem;
  }
  .order-header {
    display: flex;
    margin-bottom: 1rem;
    .order-name-status {
      margin-left: 1rem;
      max-width: 100%;
      overflow: hidden;
    }
  }

  .order-info {
    display: none;
  }
  .more-link {
    display: flex;
    justify-content: flex-end;
  }

  p {
    margin: 0.5rem;
  }

  .order-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    border: 1px solid gray;
    padding: 1rem;
    overflow: hidden;
    p {
      width: 100%;
      margin: 0;
      margin-block-start: 0;
    }
  }
  .summary {
    span {
      display: flex;
      justify-content: space-between;
    }
  }
  .orderDetails-product-card {
    margin-top: 1rem;
    border: 1px solid gray;
    padding: 1rem;
  }

  .pagination {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;
