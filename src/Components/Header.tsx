import styled from "styled-components";
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Col = styled.div``;
const Logo = styled.svg`
  margin-right: 50px;
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const Item = styled.li``;
function Header() {
  return (
    <Nav>
      <Col>
        <Logo />
        <Items>
          <Item>Home</Item>
          <Item>Tv Shows</Item>
        </Items>
      </Col>
      <Col>
        <button>Search</button>
      </Col>
    </Nav>
  );
}
export default Header;
