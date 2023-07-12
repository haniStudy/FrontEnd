import styled from "styled-components";

export const Modal1 = ({ modalState, setModalState }) => {
    return (
        <div>
            <OutLayer state={modalState} onClick={() => setModalState(false)} ></OutLayer>
            <Modal state={modalState}>
                    <BtnContainer>
                        <Btn onClick={() => setModalState(!modalState)}>x</Btn>
                    </BtnContainer>
                    <span>
                        닫기버튼 1개가 있고, 외부영역이나 닫기버튼을 누르면 닫힙니다
                    </span>
            </Modal>
        </div>
    )
}

const Modal = styled.div`
    display:${props => props.state ? 'block' : 'none'};
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: 12px;
    box-sizing: border-box;

    padding: 24px;
    background-color: rgb(200, 200, 200);

    width: 500px;
    height: 300px;
    z-index:${props => props.state ? 1 : -1};
`

const BtnContainer = styled.div`
    display:flex;
    justify-content:right;
`

const Btn = styled.button`
    border-radius: 100%;
    cursor: pointer;
    border: 1px solid rgb(221, 221, 221);
    width: 40px;
    height: 40px;

    &:hover {
        border: 1px solid black;
    }
`
const OutLayer = styled.div`
    position:absolute;
    /* border: 1px solid red; */
    height: 100%;
    width: 100%;
    z-index:${props => props.state ? 1 : -1};
`