/* eslint-disable import/named */
import {Component} from 'react'
import {AiOutlineUnderline} from 'react-icons/ai'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'

import {
  MainContainer,
  TextEditorCon,
  InContainer,
  TextEdCon,
  TextEditorHeading,
  Image,
  TextChangingCon,
  FontsCon,
  Button,
  TextAreaInput,
  ButtonList,
  ItalicButton,
  UnderlineButton,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    iconBold: false,
    iconItalic: false,
    iconUnderline: false,
  }

  onChangeBold = () => {
    this.setState(prevState => ({
      iconBold: !prevState.iconBold,
    }))
  }

  onChangeItalic = () => {
    this.setState(prevState => ({
      iconItalic: !prevState.iconItalic,
    }))
  }

  onChangeUnderline = () => {
    this.setState(prevState => ({
      iconUnderline: !prevState.iconUnderline,
    }))
  }

  render() {
    const {iconBold, iconItalic, iconUnderline} = this.state

    const textareaStyle = {
      fontWeight: iconBold ? 'bold' : 'normal',
      fontStyle: iconItalic ? 'italic' : 'normal',
      textDecoration: iconUnderline ? 'underline' : 'normal',
    }

    return (
      <MainContainer>
        <TextEditorCon>
          <InContainer>
            <TextEdCon>
              <TextEditorHeading> Text Editor </TextEditorHeading>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </TextEdCon>
            <TextChangingCon>
              <FontsCon>
                <ButtonList>
                  <Button
                    type="button"
                    data-testid="bold"
                    onClick={this.onChangeBold}
                    active={iconBold}
                  >
                    <VscBold size="20" />
                  </Button>
                </ButtonList>
                <ButtonList>
                  <ItalicButton
                    type="button"
                    data-testid="italic"
                    onClick={this.onChangeItalic}
                    active={iconItalic}
                  >
                    <GoItalic size="20" />
                  </ItalicButton>
                </ButtonList>
                <ButtonList>
                  <UnderlineButton
                    type="button"
                    data-testid="underline"
                    onClick={this.onChangeUnderline}
                    active={iconUnderline}
                  >
                    <AiOutlineUnderline size="20" />
                  </UnderlineButton>
                </ButtonList>
              </FontsCon>
              <TextAreaInput rows="10" style={textareaStyle} />
            </TextChangingCon>
          </InContainer>
        </TextEditorCon>
      </MainContainer>
    )
  }
}

export default TextEditor
