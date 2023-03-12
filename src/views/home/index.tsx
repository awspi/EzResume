import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '@/assets/logo.png'
import { ROUTER_ENTRY, ROUTER_KEY } from '../../contants/router'
export const Home = () => {
  const navigate = useNavigate()
  const onRouterToLink = (router: TSRouter.Item) => {
    if (router.text === '简历') {
      console.log('跳转到简历页面')
      navigate('/resume')
    } else {
      console.log('进入到 github ')
    }
  }
  return (
    <Root>
      <Container>
        <img src={Logo} alt="" style={{ width: '112px', height: '112px' }} />
        <div style={{ fontSize: '24px', lineHeight: '36px' }}>EzResume</div>
        <div
          style={{ fontSize: '16px', lineHeight: '24px', marginTop: '24px' }}
        >
          一个在线免费模板简历制作平台, 让你的简历更加出众 ~
        </div>
        <Action>
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div
                key={router.key}
                style={{ width: '25%', cursor: 'pointer' }}
                onClick={() => onRouterToLink(router)}
              >
                {router.text}
              </div>
            )
          })}
        </Action>
      </Container>
      <Bottom>
        <div style={{ paddingBottom: '16px', paddingTop: '16px' }}>
          <Copyright>
            Copyright © 2023-{new Date().getFullYear()} All Rights Reserved.
            Copyright By Pithy
          </Copyright>
        </div>
      </Bottom>
    </Root>
  )
}

export default Home

const Root = styled.div`
  color: #fff;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background-color: #27292c;
`
const Container = styled.div`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 100vw;
  text-align: center;
  background-color: #27292c;
`

const Action = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`
const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`
const Copyright = styled.div`
  margin: 0 55px;
  opacity: 0.6;
  font-size: 14px;
  text-align: center;
  line-height: 24px;
`
