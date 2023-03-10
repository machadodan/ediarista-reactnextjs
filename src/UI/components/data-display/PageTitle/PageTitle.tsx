import {  
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.styled";

export interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
  //children: React.ReactNode;
}//React.FunctionComponent

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle}) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
