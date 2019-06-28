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

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
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

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Financial Objects Hierachy</h2>
        <MarkdownBlock>Below is an example diagram showing how financial objects can be used and referenced.</MarkdownBlock>
        <img alt="Financial Objects Hierarchy" src="img/fo_diagram_transparent.png"/>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'Talk about trying this out',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'left',
            title: 'Try it Out',
          },
        ]}
      </Block>
    );



    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: 'Talk about learning how to use this',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'right',
            title: 'Learn How',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block background="light" layout="fourColumn">
        {[
          {
            content: 'Ability to define and pass through a structured object between buy-side, sell-side and financial eco-system partners. [Read More](docs/objects/trade)',
            image: `${baseUrl}img/check-box.svg`,
            imageAlign: 'top',
            title: 'Trade Object',
          },
          {
            content: 'Enabled and triggered from a blotter or similar application to place an order. [Read More](docs/objects/order)',
            image: `${baseUrl}img/check-box.svg`,
            imageAlign: 'top',
            title: 'Order Object',
          },
          {
            content: 'An extension of the trade object by identifying the additional attributes over and above the trade object. [Read More](docs/objects/rfq)',
            image: `${baseUrl}img/check-box.svg`,
            imageAlign: 'top',
            title: 'RFQ Object',
          },
          {
            content: 'An object with standardized names would allow for the use of several IDs to define the instrument. [Read More](docs/objects/instrument)',
            image: `${baseUrl}img/check-box.svg`,
            imageAlign: 'top',
            title: 'Instrument Object'
          }
        ]}
      </Block>
    );

    const Description = props => (
      <div
        className="productShowcaseSection paddingTop lightBackground paddingBottom"
        style={{textAlign: 'center'}}>
        <div class="wrapper">
            <div class="gridBlock"
            style={{textAlign: 'center'}}>
              <div class="blockElement twoByGridBlock">
    
            <h2>About Financial Objects</h2>
            <MarkdownBlock background="dark">
            FINOS Financial Objects is a community-led initiative that defines and maintains object structures for a wide range for financial interactions - everything from basic context linking of applications using different datasets to complex transactional workflows.
            </MarkdownBlock>
            <MarkdownBlock>
            The Financial Objects Program, launched in July 2018, was formed to drive adoption of new and existing Financial Object Standards across the Financial Services Industry, through a FINOS Program that brings together creators of Financial Objects with users of Financial Objects. Standardization of Financial Objects is valuable to the Financial Services industry because it will lower integration and transaction costs, simplify processing across organizational boundaries, enable the mutualization of commodity software for handling these objects, and improve the discoverability of data and overall interpretability and readiness for data analysis tools.
            </MarkdownBlock>
            <MarkdownBlock>
        
            </MarkdownBlock>
            <MarkdownBlock>
        
            </MarkdownBlock>
        
              </div>
              <div class="blockElement imageAlineSide imageAlineRight twoByGridBlock">
                  <div class="blockElement">
                    <div></div>
                  </div>
                  <div class="blockImage">
                    <img src="img/fo-icon-2019-color.png"></img>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );


    
    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is participating to Financial Objects?</h2>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          {/* <LearnHow />
          <TryOut /> */}
          <Description />
          {/*<Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
