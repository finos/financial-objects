[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<img src="https://github.com/finos/branding/blob/master/project-logos/deprecated-program-logos/financial-objects/Horizontal/2019_FO_Horizontal_CLR.jpg" width="200">

# FINOS Financial Objects Special Interest Group

The Financial Objects Special Interest Group (SIG) provides a neutral forum for individuals across the financial services industry to collectively identify the need for new, open, financial objects standards as well as modifications to existing ones. The goal of the Financial Objects Special Interest Group is to promote adoption of financial object definitions and models that support common industry workflows and use cases.
 
The Financial Objects SIG is led by FINOS members Goldman Sachs and ISDA, and hosted by FINOS, The Fintech Open Source Foundation. It was approved by the FINOS Governing Board in April 2021. 

All Financial Objects SIG collaboration activities, including meeting minutes, are hosted on this [Financial Objects GitHub repository](https://github.com/finos/finos-fo), and in this [GitLab project](https://gitlab.legend.finos.org/legend-pilot/cdm). Activities prior to July 2020 can be found in the [Financial Objects project archive](https://fo.finos.org). 

For more information about [FINOS Special Interest Groups](https://github.com/finos/community/tree/master/governance/special-interest-groups#special-interest-groups) materials and communication, please review the [FINOS Governance](https://github.com/finos/community/blob/master/governance/Collaborative-Principles.md).

For background about Financial Objects within FINOS, see the [background](https://github.com/finos/financial-objects#background) section at the bottom of this file.

### Roadmap and charter

See the roadmap and charter of the Financial Objects Special Interest Group [here](https://github.com/finos/financial-objects/files/6556470/FINOS.Financial.Objects.SIG.Charter.pdf).

# Get Involved

## Financial Objects SIG meetings
Participants of the Financial Objects Special Interest Group meet on a regular basis, find the next meeting on the FINOS Community Calendar and email [help@finos.org](mailto:help@finos.org) if you encounter any issues.

Browse [past meeting minutes and upcoming meeting agendas](https://github.com/finos/financial-objects/issues?q=label%3Ameeting).

## Mailing list

All SIG related communications are conducted through the fo@finos.org mailing list. Email fo@finos.org with questions or suggestions for collaboration use cases. Join the mailing list and stay up to date by sending a note to fo+subscribe@finos.org.

## Join an ongoing modeling effort

### Commodities Payout Workstream

#### Overview
The Commodities Payout Workstream was [proposed](https://github.com/finos/community/issues/102) and is led by Goldman Sachs.

- **Business problem**: The ISDA CDM recently introduced its first instance of Commodities representation & looked to capture Payout terms of a vanilla swap. There are many other iterations of Commodities contracts that would benefit from a industry standard being created and the driver of this group is to continue to build the CDM and look to capture payouts associated with Commodity Options in the first instance.

- **Proposed solution**: Looking to tackle the Commodity Option payout first, the proposed solution will look to build on the existing generic option component with any additional terms that are relevant to commodities but not necessarily captured.

#### Contribute 
There are several ways to contribute to the **Commodities Payout workstream**:

- **Join the next meeting**: find the next meeting on the [FINOS Community Calendar](https://calendar.google.com/calendar/u/0/embed?src=finos.org_fac8mo1rfc6ehscg0d80fi8jig@group.calendar.google.com&ctz=America/New_York)
- **Join the mailing list**: Communications for the Commodities Payout workstream are conducted through the commodities-payout@finos.org mailing list. Please email commodities-payout+subscribe@finos.org to join the mailing list.
- **Raise an issue**: if you have any questions or suggestions, please raise an issue at https://github.com/finos/finos-fo/issues/new/choose
- **Contribute to building the Commodities Payout model**: reach out to commodities-payout@finos.org expressing your interest in contributing.

#### Legend Studio
Please note that modeling is being done in the FINOS hosted instance of [Legend Studio](https://github.com/finos/legend-studio), and a copy of the ISDA CDM in the FINOS hosted instance of Legend Studio can be accessed at https://legend.finos.org/studio/viewer/UAT-34. Please note that you will need to have an account on the FINOS hosted instance of Legend Studio in order to access it. You can request an account at [finos.org/legend](https://www.finos.org/legend). 

## Product Control Common Template Workstream

#### Overview
The Product Control Common Template Workstream was [proposed](https://github.com/finos/community/issues/97) and is led by Goldman Sachs.

- **Business Problem**: there are multiple vendors currently providing consensus based pricing services and each vendor have their own template requirements. The different submission and consensus templates have increased the onboarding cost for participants to switch between / subscribe for multiple vendors. 

- **Proposed Solution**: to overcome this inconsistency, we are aiming to create an industry standard common template for submitting to and getting data back from vendors. This would help to streamline the submission process by applying a consistent approved format for this submission. This removes the dependence on template naming conventions and the cost when these are changed.

- **Approach**:
    - Construct a common template data model using Legend Studio.
    - This common template data model will become a candidate for inclusion to the CDM and will include all the attributes that each vendor is required to run their valuation process and return the consensus data to the banks.
    - Banks can connect their daily pricing data to the industry approved model for submission and vendor can leverage the same model to provide the consensus data. Thereby, both the banks and vendor will communicate in the same common model language.

#### Contribute
There are several ways to **contribute to the Product Control Common Template**:

- **Join the next meeting**: participants of the Product Control Common Template Workstream meet every Monday at 10am ET / 3pm GMT. Find the next meeting on the [FINOS Community calendar](https://calendar.google.com/calendar/u/0/embed?src=finos.org_fac8mo1rfc6ehscg0d80fi8jig@group.calendar.google.com&ctz=America/New_York) and browse past meeting minutes in [GitHub](https://github.com/finos/finos-fo/issues?q=label%3Ameeting) 
- **Join the mailing list**: Communications for the Product Control Common Template workstream are conducted through the product-control-common-template@finos.org mailing list. Please email product-control-common-template+subscribe@finos.org to join the mailing list.
- **Raise an issue**: if you have any questions or suggestions, please raise an issue at https://github.com/finos/finos-fo/issues/new/choose
- **Contribute to building the Product Control Common Template**: reach out to product-control-common-template@finos.org expressing your interest in contributing.

#### Legend Studio
Please note that modeling is being done in the FINOS hosted instance of [Legend Studio](https://github.com/finos/legend-studio), and a copy of the ISDA CDM in the FINOS hosted instance of Legend Studio can be accessed at https://legend.finos.org/studio/viewer/UAT-34. Please note that you will need to have an account on the FINOS hosted instance of Legend Studio in order to access it. You can request an account at [finos.org/legend](https://www.finos.org/legend). 

# Background 

The Financial Objects project was led by Johan Sandersson (Factset) and Hammad Akbar (Citi) until July 2020, when they expressed their intention to step down as project leads. See this GitHub issue _[Choose new project leads for FO](https://github.com/finos/finos-fo/issues/36)_ for context.

In November 2019, at FINOS’ flagship conference, the Open Source Strategy Forum, FINOS Platinum member Goldman Sachs announced its intention to open source its internally developed [Legend](https://legend.finos.org) logical modeling language and visual data modeling platform, which is used to build, design, and execute data models.

Between April and September 2020, Goldman Sachs led several data modelling efforts as part of the [FINOS-Legend Studio Pilot](https://www.finos.org/hubfs/FINOS/assets/FINOS%20Legend%20Case%20Study%202021.pdf). The Pilot brought together developers and subject matter experts from financial institutions, technology firms and industry associations globally to develop extensions to the [ISDA Common Domain Model (CDM)](https://www.isda.org/2019/10/14/isda-common-domain-model/). Following the success of the [FINOS-Legend Studio Pilot](https://www.finos.org/hubfs/FINOS/assets/FINOS%20Legend%20Case%20Study%202021.pdf), with the proposed extensions being accepted and released by the ISDA Architecture and Review Committee, Goldman Sachs & ISDA stepped forward to re-purpose and lead the Financial Objects Special Interest Group within FINOS, to further promote common, standard data models, and eventually create new ones. 

Between July 2020 and February 2021, the FINOS Community engaged with a [Request for Comment on the Future of the Financial Objects project](https://github.com/finos/finos-fo/issues/38), and in February 2021, Ffion Acland from Goldman Sachs [stepped forward](https://groups.google.com/a/finos.org/g/community/c/7U3uS0GJ0QQ) to lead the Financial Objects project. Following a ten day period during which this proposal received support and no objections from the FINOS Community, Ffion Acland became the project lead on February 19th 2021. 

In January 2021, Goldman Sachs proposed and launched two work streams under the Financial Objects project: Commodities Payout and Product Control Common Template. Within a couple of months it became clear that while there are overarching, common elements to these work streams (modeling financial objects, using Legend & the FINOS hosted Legend Studio instance, and leveraging the ISDA CDM) every workstream has specific requirements that warrant separate governance structures. 

In line with the needs of the existing projects, in April 2021, the FINOS Governing Board [approved](https://github.com/finos/community/tree/master/governance/special-interest-groups#special-interest-groups) uplifting the Financial Objects project into a Special Interest Group, so that the existing work streams could become separate projects with their own governance models. The goal of the Financial Objects SIG is to provide a neutral forum for individuals across the financial services industry to collectively identify the need for new, open, financial objects standards as well as modifications to existing ones. The Financial Objects SIG also aims to promote adoption of financial object definitions and models that support common industry workflows and use cases.

# Contributing

Commits and pull requests to FINOS repositories will only be accepted from those contributors with an active, executed [Individual Contributor License Agreement (ICLA)](https://www.finos.org/hubfs/FINOS/governance/FINOS%20ICLA.pdf) with FINOS OR who are covered under an existing and active [Corporate Contribution License Agreement (CCLA)](https://www.finos.org/hubfs/FINOS/governance/FINOS%20CCLA.pdf) executed with FINOS. Commits from individuals not covered under an ICLA or CCLA will be flagged and blocked by the FINOS Clabot tool. Please note that some CCLAs require individuals/employees to be explicitly named on the CCLA.

*Need an ICLA? Unsure if you are covered under an existing CCLA? Email [help@finos.org](mailto:help@finos.org)*

If you're interested in contributing to Financial Objects data models on the FINOS hosted instance of [Legend Studio](https://github.com/finos/legend-studio), please submit your interest at [finos.org/legend](https://www.finos.org/legend) and you will be granted "read-only" access to **view** models.

**Editing and creating** models in the FINOS hosted instance of Legend Studio is considered an open source contribution, and contributions to FINOS open source projects must be covered by a [Contributor License Agreement (CLA)](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements#ContributionComplianceRequirements-ContributorLicenseAgreement). If you would like to get access to edit and create models (i.e. "write" access) on the FINOS hosted instance of Legend Studio, your employer will need to sign a [Contributor License Agreement (CLA)](https://www.finos.org/hubfs/FINOS/governance/FINOS%20CCLA.pdf) with the Foundation. Please see the [Contribution Compliance Requirements](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements) and email help@finos.org with questions. 

# Governance

The FINOS Financial Objects SIG is governed by the [FINOS Special Interest Group governance](https://github.com/finos/community/tree/master/governance#special-interest-groups).

# License

Copyright 2019 FINOS The Fintech Open Source Foundation

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
