import styled from '@emotion/styled';

export const HeaderLayout = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: #ffffff;
  border-bottom: 1px solid #c8c8c8;
  //padding: 0 1rem;
`;

export const Inner = styled.div`
  height: 120px;
  width: 1100px;
  margin: 0 auto;
  position: relative;
`;

export const Logo = styled.a`
  height: 75px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  cursor: pointer;
`;
export const TopHeaderLayout = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  display: flex;
`;

export const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuWrapper = styled.li`
  position: relative;
  //text-align: center;
  display: flex;
  &:before {
    content: '';
    width: 1px;
    height: 12px;
    background-color: #e5e5e5;
    position: absolute;
    top: 0;
    bottom: 0;
    //margin: 0 1rem;
    margin: auto;
  }
  &:first-of-type:before {
    display: none;
  }
`;

export const MenuItem = styled.a`
  padding: 2px 20px;
  display: block;
  font-size: 13px;
  color: #656565;
  &:hover {
    color: #000000;
    cursor: pointer;
  }
`;

export const TitleLogo = styled.img`
  height: 3rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

export const BottomHeaderLayout = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  right: 0;
`;

export const NavContainer = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  padding: 1rem 0.75rem;
  font-size: 18px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    color: #656565;
    cursor: pointer;
  }
`;

export const SearchLayout = styled.div`
  display: flex;
  position: absolute;
  top: 3.25rem;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
`;

export const SearchContainer = styled.div`
  border: 2px solid #4c89ff;
  text-align: center;
  display: flex;
  width: 25rem;
  height: 2.5rem;
  border-radius: 10px;
`;

export const SearchInput = styled.input`
  border: none;
  display: flex;
  width: 100%;
  font-size: 1.2rem;
  outline: none;
  margin-left: 0.5rem;
`;

export const SearchIcon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const NavIcons = styled.img`
  width: 1.2rem;
  cursor: pointer;
`;
