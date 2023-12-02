import React from "react";
import Header from "./components/header/Header";
import Wrapper from "./components/ui/Wrapper";
import MyRoutes from "./routes/MyRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Toaster />
        <MyRoutes />
      </Wrapper>
    </>
  );
};

export default App;
