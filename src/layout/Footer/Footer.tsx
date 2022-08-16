import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrap>
            <div>@Copyright ToothLife,All Rights Reserved.</div>
        </FooterWrap>
    );
};

const FooterWrap = styled.footer`
    height: 50px;
    background-color: #eeeeee;
    position: relative;
    margin: 0 auto;
    & > div {
        position: absolute;
        top: 34%;
        width: 100%;
        font-family: "Happiness-Sans-Title";
        text-align: center;
    }
`;
export default Footer;
