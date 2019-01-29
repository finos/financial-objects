/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function GetInvolved(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](/)`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions and stay up to date; [sign up to our mailing-list](mailto:fo-financial-objects+subscribe@finos.org) and [check the web archives](https://groups.google.com/a/finos.org/forum/#!forum/fo-financial-objects)',
      title: 'Join the community',
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Get Involved</h1>
          </header>
          <p>If you would like to participate in this working group, please review our participation requirements below, then feel free to join our next meeting.  We also encourage you to join the mailing list, by sending a blank email to fo-financial-objects+subscribe@finos.org.  Once you are subscribed, please send a brief email introducing yourself and your interest in the group's work to the mailing-list - this will help save time on the calls themselves.</p>
          <GridBlock contents={supportLinks} layout="twoColumn" />
          <h2>Participation Requirements</h2>
          <p>We request active participation through the contribution of your own use cases to allow collaboration and consensus towards financial object standards.
            We aim to take contributions of established financial objects in active or planned workflows utilized within the financial services eco-system with the intention to converge towards a common structure of a financial object.
            Active participants will be able to vote on the core structure of a financial object type to ensure ability to version, test and validate these financial objects in practice against their business use case and associated workflow. That workflow can be internal to internal, internal to external or across multiple internal and external party workflows.</p>
          <h2>Chairs</h2>
          <ul>
            <li>William Quan, Co-Chair (JPM)</li>
            <li>Hammad Akbar, Co-Chair (Citi)</li>
          </ul>
          <h2>Participants</h2>
          <ul>
            <li>Ayaz Haji (GS)</li>
            <li>Oli Bage (MS)</li>
            <li>Nilesh Bhattad (JPM)</li>
            <li>Peter Smulovic (MS)</li>
            <li>Johan Sandersson (FactSet)</li>
            <li>Hershal Shah IHS (Markit)</li>
            <li>Frank Tarsillo IHS (Markit)</li>
            <li>Bruce Skingle (Symphony)</li>
            <li>Mario Orphanou (Symphony)</li>
            <li>Lawrence Miller	(Symphony)</li>
            <li>Mike Harmon (Symphony)</li>
            <li>Aaron Williamson (FINOS)</li>
            <li>Rob Underwood (FINOS)</li>
            <li>Maurizio Pillitu (FINOS)</li>
            <li>Gabriele Columbro (FINOS)</li>
            <li>Nick Kolba (OpenFin)</li>
            <li>Espen Overbye (OpenFin)</li>
            <li>Jerry Savoretti	(Portware - FactSet)</li>
            <li>David Landisman	(Portware - FactSet)</li>
            <li>Justin Peterson	(TradeWeb)</li>
            <li>Svyatoslav (Slava) Kryukov (DB)</li>
            <li>Tim Kolecke	(Citadel)</li>
            <li>Mirjana Pantic (UBS)</li>
            <li>Aadi Thayyar (AllianceBernstein)</li>
            <li>John Lin (AllianceBernstein)</li>
            <li>Kiran Jawale (AllianceBernstein)</li>
            <li>Katia Banina (Refinitiv)</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

module.exports = GetInvolved;
