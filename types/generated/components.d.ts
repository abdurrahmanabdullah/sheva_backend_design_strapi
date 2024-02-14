import type { Schema, Attribute } from '@strapi/strapi';

export interface ConsultancyServiceConsultancyService extends Schema.Component {
  collectionName: 'components_consultancy_service_consultancy_services';
  info: {
    displayName: 'Consultancy Service';
    description: '';
  };
  attributes: {
    uid: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ContentContent extends Schema.Component {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'micro Credit';
    description: '';
  };
  attributes: {
    uid: Attribute.String;
    element1: Attribute.Component<'element.element-with-title'>;
    element2: Attribute.Component<'element.elements', true>;
    element3: Attribute.Component<'element.element-with-title', true>;
    element4: Attribute.Component<'element.elements'>;
  };
}

export interface DayCareDayCare extends Schema.Component {
  collectionName: 'components_day_care_day_cares';
  info: {
    displayName: 'Day Care';
    description: '';
  };
  attributes: {
    uid: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementElementWithTitle extends Schema.Component {
  collectionName: 'components_element_element_with_titles';
  info: {
    displayName: 'elementWithTitle';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.Text;
    subSection: Attribute.String;
  };
}

export interface ElementElements extends Schema.Component {
  collectionName: 'components_element_elements';
  info: {
    displayName: 'elements';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.Text;
  };
}

export interface ElementTable extends Schema.Component {
  collectionName: 'components_element_tables';
  info: {
    displayName: 'table';
    description: '';
  };
  attributes: {
    Type: Attribute.String;
    Target: Attribute.Integer;
    Achievement: Attribute.Integer;
    AchievementPersent: Attribute.String;
  };
}

export interface FactContent extends Schema.Component {
  collectionName: 'components_fact_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    data: Attribute.String;
    description: Attribute.String;
  };
}

export interface FactName extends Schema.Component {
  collectionName: 'components_fact_names';
  info: {
    displayName: 'name';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ListList extends Schema.Component {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    item: Attribute.String;
  };
}

export interface ListTitle extends Schema.Component {
  collectionName: 'components_list_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface OtherProgramOtherProgram extends Schema.Component {
  collectionName: 'components_other_program_other_programs';
  info: {
    displayName: 'Other Program';
    description: '';
  };
  attributes: {
    uid: Attribute.String;
    element1: Attribute.Component<'element.elements', true>;
    table: Attribute.Component<'element.table', true>;
    element2: Attribute.Component<'element.element-with-title'>;
    list: Attribute.Component<'list.list', true>;
    element3: Attribute.Component<'element.elements', true>;
  };
}

export interface PartnerCard extends Schema.Component {
  collectionName: 'components_partner_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface PartnerName extends Schema.Component {
  collectionName: 'components_partner_names';
  info: {
    displayName: 'Name';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface PartnershipProgramDayCare extends Schema.Component {
  collectionName: 'components_description_day_cares';
  info: {
    displayName: 'Partnership Program';
    description: '';
  };
  attributes: {
    uid: Attribute.String;
    element: Attribute.Component<'element.element-with-title'>;
    list1: Attribute.Component<'list.list', true>;
    title: Attribute.Component<'list.title'>;
    list2: Attribute.Component<'list.list', true>;
  };
}

export interface ProgramDescription extends Schema.Component {
  collectionName: 'components_program_descriptions';
  info: {
    displayName: 'description';
    description: '';
  };
  attributes: {
    about: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ProgramProgram extends Schema.Component {
  collectionName: 'components_program_programs';
  info: {
    displayName: 'name';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'consultancy-service.consultancy-service': ConsultancyServiceConsultancyService;
      'content.content': ContentContent;
      'day-care.day-care': DayCareDayCare;
      'element.element-with-title': ElementElementWithTitle;
      'element.elements': ElementElements;
      'element.table': ElementTable;
      'fact.content': FactContent;
      'fact.name': FactName;
      'hero.hero': HeroHero;
      'list.list': ListList;
      'list.title': ListTitle;
      'other-program.other-program': OtherProgramOtherProgram;
      'partner.card': PartnerCard;
      'partner.name': PartnerName;
      'partnership-program.day-care': PartnershipProgramDayCare;
      'program.description': ProgramDescription;
      'program.program': ProgramProgram;
    }
  }
}
