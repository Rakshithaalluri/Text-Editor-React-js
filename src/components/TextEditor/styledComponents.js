import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextEditorCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: #1b1c22;
  border-radius: 8px;
  width: 80%;
`
export const InContainer = styled.div`
  width: 90%;
  height: 90%;
  border: 1px white solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextEdCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextEditorHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
`
export const Image = styled.img`
  height: 350px;
  width: 80%;
  margin-top: 40px;
`

export const TextChangingCon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  height: 95%;
  width: 50%;
  border: 1px #334155 solid;
  border-radius: 5px;
`

export const FontsCon = styled.ul`
  display: flex;
  padding: 10px;
  border-bottom: 1px #334155 solid;
`
export const ButtonList = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
  border: none;
  outline: none;
  background-color: transparent;
`
export const ItalicButton = styled(Button)`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
`

export const UnderlineButton = styled(Button)`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
`

export const TextAreaInput = styled.textarea`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 20px;
`

/* export const StyledVscBold = styled(VscBold)`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`

export const StyledGoItalic = styled(GoItalic)`
  font-family: ${props => props.italic && 'italic'};
`

export const StyledAiOutlineUnderline = styled(AiOutlineUnderline)`
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
`
*/
