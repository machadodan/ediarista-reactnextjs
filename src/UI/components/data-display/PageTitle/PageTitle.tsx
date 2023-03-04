import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.styled";

export interface PageTitleProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}
const PageTitle: React.FunctionComponent<PageTitleProps> = ({ title, subtitle}) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
