import styled from "styled-components";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { theme } from "../../utils/theme";

const { Header } = Layout;

const TitleContainer = styled.div`
  ${({ theme }) => `
        background-color:${theme["header-color"]};
        width:50%;
        display:flex;
        align-items:center;
        @media (max-width:890px){
            visibility:hidden;
            width:0;
        }
    `}
`;
const Title = styled.div`
  ${({ theme }) => `
        text-algin:left;
        display:flex;
        line-height:50px;
        div {
            with:100%;
            padding-left:${theme["padding-small"]}
        }

        h2 {
            display:inline;
            color:inherit;
        }

        img {
            width:64px;
        }
        p {
            line-height:0;
        }
    `}
`;

const StyledHeader = styled(Header)`
  ${({ theme }) => `
    background-color: ${theme["header-color"]};
    border-bottom-color: ${theme["header-border"]};
    border-right-bottom:1px;
    border-bottom-style: solid;
    text-align:center;
    display:flex;
    li {
        font-size:${theme["font-size-md"]}
    }
    `}
`;

const StyledMenu = styled(Menu)`
  border-bottom-width: 60px;
  width: 50%;
  @media (max-width: 890px) {
    width: 100px;
  }
`;

export const MainNavbar = () => (
  <StyledHeader>
    <TitleContainer>
      <Title>
        <img src="/logo.svg" alt="Next Chop Logo" />
        <div>
          <h2>The Next Chop</h2>
          <p>Recipe Discovery App by Next,GraphQL and friends</p>
        </div>
      </Title>
    </TitleContainer>
    <StyledMenu theme="light" mode="horizontal" style={{ lineHeight: "64px" }}>
      <Menu.Item key="/">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
    </StyledMenu>
  </StyledHeader>
);
