import styled from "styled-components";

export const Modal0 = ({modalState, setModalState}) => {
    return (
        <div>
            <Modal state={modalState}>
                <Contents>
                    <span>
                        닫기와 확인 버튼 2개가 있고, 닫기버튼을 누르면 닫힙니다
                    </span>
                    <BtnContainer>
                        <button onClick={() => setModalState(!modalState)}>닫기</button>
                        <button size={'Small'} color={"mint"}>확인</button>
                    </BtnContainer>
                </Contents>
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

const Contents = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
    justify-content:space-between;
`
const BtnContainer = styled.div`
    display:flex;
    justify-content:right;
`