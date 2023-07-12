
import { useState,useRef, useEffect } from "react";
import styled from "styled-components";

export const Select = ({items}) => {
    let selectRef = useRef();

    const[ state, setState ] = useState(false);
    const[ selectItem, setSelectItem ] = useState('-선택-');

    const handleClickOutside = (e) => {
        if (selectRef && !selectRef.current.contains(e.target)) {
            setState(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    },[])

    const LiClick =(item)=>{
        setSelectItem(item)
        setState(!state)
    }

    return (
        <SelectSection ref={selectRef}>
            <Selected onClick={()=>setState(!state)}>
                <div class="Selected"> {selectItem}</div>
                <ArrowBtn>
                    ▼
                </ArrowBtn>
            </Selected>
            <Ul state={state}>
                {
                    items.map((item)=>{
                        return <Li onClick={()=>LiClick(item)} class="option">{item}</Li>
                    })
                }
            </Ul>
        </SelectSection>
    )
}

const SelectSection = styled.div`
    display:inline-block;
    width: 120px;
    border: 1px solid black;
    border-radius: 10px;
`

const Ul = styled.ul`
    display:${props=>props.state ? 'block' : 'none'};
    list-style:none;
    padding-left:0;

    width: 120px;
    border: 1px solid black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius:10px;

    position: absolute;
    background: white;
    border-top: none;
    margin: 1px 0 0 -1px;
    cursor: pointer;
`
const Li = styled.li`
    white-space: nowrap; /* 줄바꿈 안함 */
    overflow: hidden;
    text-overflow: ellipsis; /* 말줄임 적용 */
    &:hover{ background: rgba(168, 156, 235, 0.35)}
`

const Selected = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 8px 5px;
    
`
const ArrowBtn = styled.button`
    width: 24px;
    padding:0;
    background-color:white;
    border:none;
    &:hover{ background: rgba(168, 156, 235, 0.35)}
`