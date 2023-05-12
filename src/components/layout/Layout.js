import { Header } from '../header/Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main>{children}</main>
    </>
  );
};
