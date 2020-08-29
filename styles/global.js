import css from "styled-jsx/css";

export default css.global`
  body {
    background-color: red;
  }

  @media screen and (max-width: 690px) {
    .programs-list .program-card {
      max-width: 300px !important;
      margin: auto !important;
      margin-bottom: 20px !important;
    }

    .filter {
      max-width: 500px !important;
      margin: auto;
      margin-bottom: 30px;
    }
  }
`;
