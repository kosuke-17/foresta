import "./App.css";
import { Footer } from "./components/_layout/Footer";
import { Header } from "./components/_layout/Header";
import { Router } from "./Router";
import styled from "styled-components";

function App() {
  return (
    <_App>
      <Header />
      <_Main>
        <Router />
      </_Main>
      <Footer />
    </_App>
  );
}

export default App;

const _App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const _Main = styled.main`
  flex: 1 1 0%;
`;
