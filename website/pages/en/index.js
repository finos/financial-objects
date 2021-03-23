/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/docusaurus.svg`} /> */}
        <div className="inner">
          <img src="img/fo-icon-2019.png"></img>
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('fo-intro')}>Get Started</Button>
            <Button href="https://github.com/finos-fo/finos-fo.github.io">GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const BackGroundInfo = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Background</h2>
        <MarkdownBlock>
        The Financial Objects project was led by Johan Sandersson (Factset) and Hammad Akbar (Citi) until July 2020, when they expressed their intention to step down as project leads. See this GitHub issue _[Choose new project leads for FO](https://github.com/finos/finos-fo/issues/36)_ for context.
        </MarkdownBlock>
        <MarkdownBlock>
        Between July 2020 and February 2021, the FINOS Community engaged with a [Request for Comment on the Future of the Financial Objects project](https://github.com/finos/finos-fo/issues/38), and in February 2021, Ffion Acland from Goldman Sachs [stepped forward](https://groups.google.com/a/finos.org/g/community/c/7U3uS0GJ0QQ) to lead the Financial Objects project. Following a ten day period during which this proposal received support and no objections from the FINOS Community, Ffion Acland became the project lead on February 19th 2021. 
        </MarkdownBlock>
        <MarkdownBlock>
        The FINOS Financial Objects project currently has two work streams: Commodities Payout and Product Control Common Template.
        </MarkdownBlock>
      </div>
    );

    const Features = () => (
      <Block background="light" layout="twoColumn">
        {[
          {
            content: 'The Commodities Payout Workstream was [proposed](https://github.com/finos/community/issues/102) and is led by Goldman Sachs.',
            image: `https://raw.githubusercontent.com/finos/finos-landscape/master/hosted_logos/fo-commodities-payout.svg`,
            link: 'https://github.com/finos/finos-fo/blob/master/README.md#commodities-payout-workstream',
            // imageAlign: 'top',
            title: 'Commodities Payout',
          },
          {
            content: 'The Product Control Common Template Workstream was [proposed](https://github.com/finos/community/issues/97) and is led by Goldman Sachs.',
            image: `https://raw.githubusercontent.com/finos/finos-landscape/master/hosted_logos/fo-product-control-common-template.svg`,
            link: 'https://github.com/finos/finos-fo/blob/master/README.md#product-control-common-template-workstream',
            // imageAlign: 'top',
            title: 'Product Control Common Template',
          }
        ]}
      </Block>
    );

    const Description = props => (
      <div
        className="productShowcaseSection paddingTop paddingBottom"
        style={{textAlign: 'center'}}>
        <div className="wrapper">
            <div className="gridBlock"
            style={{textAlign: 'center'}}>
              <div className="blockElement twoByGridBlock">
                <h2>About Financial Objects</h2>
                <MarkdownBlock background="dark">
                FINOS Financial Objects is a community-led initiative that defines and maintains object structures for a wide range for financial interactions - everything from basic context linking of applications using different datasets to complex transactional workflows.
                </MarkdownBlock>
                <MarkdownBlock>
                The Financial Objects Program, launched in July 2018, was formed to drive adoption of new and existing Financial Object Standards across the Financial Services Industry, through a FINOS Program that brings together creators of Financial Objects with users of Financial Objects. Standardization of Financial Objects is valuable to the Financial Services industry because it will lower integration and transaction costs, simplify processing across organizational boundaries, enable the mutualization of commodity software for handling these objects, and improve the discoverability of data and overall interpretability and readiness for data analysis tools.
                </MarkdownBlock>        
              </div>
              <div className="blockElement imageAlineSide imageAlineRight twoByGridBlock">
                  <div className="blockElement">
                    <div></div>
                  </div>
                  <div className="blockImage">
                    <img src="img/fo-icon-2019-color.png"></img>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );

    const GetInvolved = () => (
      <div
        className="productShowcaseSection paddingBottom lightBackground"
        style={{textAlign: 'center'}}>
        <h2>Get Involved</h2>
        <MarkdownBlock>
        If you're interested in contributing to Financial Objects data models on the FINOS hosted instance of [Legend Studio](https://github.com/finos/legend-studio), please submit your interest at [finos.org/legend](https://www.finos.org/legend) and you will be granted "read-only" access to **view** models.
        </MarkdownBlock>
        <MarkdownBlock>
        **Editing and creating** models in the FINOS hosted instance of Legend Studio is considered an open source contribution, and contributions to FINOS open source projects must be covered by a [Contributor License Agreement (CLA)](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements#ContributionComplianceRequirements-ContributorLicenseAgreement). If you would like to get access to edit and create models (i.e. "write" access) on the FINOS hosted instance of Legend Studio, your employer will need to sign a [Contributor License Agreement (CLA)](https://www.finos.org/hubfs/FINOS/governance/FINOS%20CCLA.pdf) with the Foundation. Please see the [Contribution Compliance Requirements](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements) and email help@finos.org with questions. 
        </MarkdownBlock>
        <MarkdownBlock>
        For more info, checkout the [project README](https://github.com/finos/finos-fo/blob/master/README.md).
        </MarkdownBlock>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Description />
          <Features />
          <BackGroundInfo />
          <GetInvolved />
        </div>
      </div>
    );
  }
}

module.exports = Index;
