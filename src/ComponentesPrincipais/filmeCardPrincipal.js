import styled from "styled-components"

export default function Card() {
    return (
        <CardFilme>
            <img src="https://1.bp.blogspot.com/-tt2O7kP0WS0/Xh562IVHanI/AAAAAAAAPCg/OGWXeeSarSQCb6WsdSqJa4KRI412qXyPQCLcBGAsYHQ/s1600/aaa2.jpg" alt="CORINGAO" />
        </CardFilme>
    )
}

const CardFilme = styled.div`
    width: 145px;
    height: 209px;
    margin: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    && img {
        width: 129px;
        height: 193px;
    }
`
