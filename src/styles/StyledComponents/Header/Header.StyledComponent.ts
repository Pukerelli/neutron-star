import styled from "styled-components"
import config from "../../../common/config/config.json"

export const HeaderWrapper = styled.header`
  grid-area: header;
  display: grid;
  width: 100vw;
  min-height: 46px;
  background-color: ${config.wrapperColor};
  align-items: center;
  padding: 0.3rem;
  font-size: 2rem;
  position: relative;
  box-shadow: ${config.shadow};
  
`
export const HeaderItemContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 380px;
  
`

export const HeaderItem = styled.div`
  height: inherit;
  text-align: center;
  color: ${config.mainColor};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  a{
    color: ${config.mainColor};
  }

  &:hover {
    color: #fff;
    text-shadow: 1px 0 0 1px white;
    border-bottom: 2px solid white;
  }
  &:last-child{
    position: absolute;
    right: 2%;
  }
`
