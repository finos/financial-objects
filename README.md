[![Build Status](https://travis-ci.org/finos-fo/finos-fo.svg?branch=master)](https://travis-ci.com/finos-fo/finos-fo)
[![FINOS - Incubating](https://cdn.rawgit.com/finos/contrib-toolbox/master/images/badge-incubating.svg)](https://finosfoundation.atlassian.net/wiki/display/FINOS/Incubating)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# FINOS Financial Objects project

Welcome to the Financial Objects project, led by Goldman Sachs and hosted by FINOS, The Fintech Open Source Foundation. 

All Financial Objects collaboration activities, including meeting minutes, are hosted on this Financial Objects GitHub repo. Activities prior to July 2020 can be found in the [Financial Objects project archive](https://fo.finos.org)). For more information about FINOS project materials and communication, please review the [FINOS Governance](https://github.com/finos/community/blob/master/governance/Collaborative-Principles.md).

### Background 

The Financial Objects project was launched in  and was led by Johan Sandersson (Factset) and Hammad Akbar (Citi) until July 2020, when they expressed their intention to step down as project leads. See this GitHub issue _[Choose new project leads for FO](https://github.com/finos/finos-fo/issues/36)_ for context.

Between July 2020 and February 2021, the FINOS Community engaged with the RFC on the Future of the Financial Objects project. See this GitHub issue _[RFC: The Future of Financial Objects](https://github.com/finos/finos-fo/issues/38)_ for more context.

In February 2021, Goldman Sachs stepped forward to lead the project, and following support from the FINOS Community, Ffion Acland became the project lead on February 19th 2021 The project currently has two work streams: Securities Reference Data and Currency Reference Data.

## Commodities Payout Workstream

The Commodities Payout Workstream was [proposed](https://github.com/finos/community/issues/102) and is led by Goldman Sachs.

### Business Problem
The ISDA CDM recently introduced its first instance of Commodities representation & looked to capture Payout terms of a vanilla swap. There are many other iterations of Commodities contracts that would benefit from a industry standard being created and the driver of this group is to continue to build the CDM and look to capture payouts associated with Commodity Options in the first instance.

### Proposed Solution
Looking to tackle the Commodity Option payout first, the proposed solution will look to build on the existing generic option component with any additional terms that are relevant to commodities but not necessarily captured.

### Contribute to the Commodities Payout workstream

There are several ways to contribute to the Commodities Payout workstream:

- **Join the next meeting**: participants of the Commodities Payout workstream meet every Thursday at 11am ET / 4pm GMT. Find the next meeting on the [FINOS project meetings calendar](https://calendar.google.com/calendar/u/0/embed?src=finos.org_fac8mo1rfc6ehscg0d80fi8jig@group.calendar.google.com&ctz=America/New_York) and browse past meeting minutes in [GitHub](https://github.com/finos/finos-fo/issues?q=label%3Ameeting) 
- **Join the mailing list**: Communications for the Commodities Payout workstream are conducted through the commodities-payout@finos.org mailing list. Please email commodities-payout+subscribe@finos.org to join the mailing list.
- **Raise an issue**: if you have any questions or suggestions, please raise an issue at https://github.com/finos/finos-fo/issues/new/choose
- **Contribute to building the Commodities Payout model**: reach out to commodities-payout@finos.org expressing your interest in contributing.

#### Legend Studio
Please note that modeling is being done in the FINOS hosted instance of [Legend Studio](https://github.com/finos/legend-studio), and a copy of the ISDA CDM in the FINOS hosted instance of Legend Studio can be accessed at https://legend.finos.org/studio/viewer/UAT-34. Please note that you will need to have an account on the FINOS hosted instance of Legend Studio in order to access it. You can request an account at [finos.org/legend](https://www.finos.org/legend). 



## Product Control Common Template Workstream

The Product Control Common Template Workstream was [proposed](https://github.com/finos/community/issues/97) and is led by Goldman Sachs.

### Business Problem
There are multiple vendors currently providing consensus based pricing services and each vendor have their own template requirements. The different submission and consensus templates have increased the onboarding cost for participants to switch between / subscribe for multiple vendors. To overcome this inconsistency, we are considering to create an industry standard common template for submitting to and getting data back from vendors. This would help to streamline the Submission process by applying a consistent approved format for this submission. We can continue to send and receive the file in the same format and it is the vendor that needs to conform to the industry standard when agreed upon by all the banks. This way banks do not have to change their infrastructure whenever new vendors come in or source many different files for all the vendors. It would also allow vendors to change formatting and column naming conventions of submission files without requiring work from the industry as the templates would still need to conform to the industry standard data model.

### Proposed Solution
- Construct a common template data model using Legend Studio (an approved open sourced data modelling tool that allow users to create data model in a graphical user interface).
- This common template data model will include all the attributes that each vendor is required to run their valuation process and return the consensus data to the banks.
- Banks can connect their daily pricing data to the industry approved model for submission and vendor can leverage the same model to provide the consensus data. Thereby, both the banks and vendor will communicate in the same common model language.

### Contribute to the Product Control Common Template Workstream

There are several ways to contribute to the Product Control Common Template Workstream:

- **Join the next meeting**: participants of the Product Control Common Template Workstream meet every Monday at 10am ET / 3pm GMT. Find the next meeting on the [FINOS project meetings calendar](https://calendar.google.com/calendar/u/0/embed?src=finos.org_fac8mo1rfc6ehscg0d80fi8jig@group.calendar.google.com&ctz=America/New_York) and browse past meeting minutes in [GitHub](https://github.com/finos/finos-fo/issues?q=label%3Ameeting) 
- **Join the mailing list**: Communications for the Product Control Common Template workstream are conducted through the product-control-common-template@finos.org mailing list. Please email product-control-common-template+subscribe@finos.org to join the mailing list.
- **Raise an issue**: if you have any questions or suggestions, please raise an issue at https://github.com/finos/finos-fo/issues/new/choose
- **Contribute  to building the common template**: reach out to product-control-common-template@finos.org expressing your interest in contributing.

#### Legend Studio
Please note that modeling is being done in the FINOS hosted instance of [Legend Studio](https://github.com/finos/legend-studio), and a copy of the ISDA CDM in the FINOS hosted instance of Legend Studio can be accessed at https://legend.finos.org/studio/viewer/UAT-34. Please note that you will need to have an account on the FINOS hosted instance of Legend Studio in order to access it. You can request an account at [finos.org/legend](https://www.finos.org/legend). 

## Contributing

1. Fork it (<https://github.com/finos-fo/finos-fo/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Read our [contribution guidelines](.github/CONTRIBUTING.md) and [Community Code of Conduct](https://www.finos.org/code-of-conduct)
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request

_NOTE:_ Commits and pull requests to FINOS repositories will only be accepted from those contributors with an active, executed Individual Contributor License Agreement (ICLA) with FINOS OR who are covered under an existing and active Corporate Contribution License Agreement (CCLA) executed with FINOS. Commits from individuals not covered under an ICLA or CCLA will be flagged and blocked by the FINOS Clabot tool. Please note that some CCLAs require individuals/employees to be explicitly named on the CCLA.

*Need an ICLA? Unsure if you are covered under an existing CCLA? Email [help@finos.org](mailto:help@finos.org)*

## License

Copyright 2019 FINOS The Fintech Open Source Foundation

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

## License

Copyright 2019 FINOS the Finteh Open Source Foundation

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
