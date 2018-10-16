export default interface Base {
  meta: {
    home: {
      title: string;
      description: string;
    };
    enterprise: {
      title: string;
      description: string;
    };
    platform: {
      title: string;
      description: string;
    };
    study: {
      title: string;
      description: string;
    };
    docs: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
    pricing: {
      title: string;
      description: string;
    };
  };
  common: {
    readMore: string;
  };
  nav: {
    home: string;
    products: string;
    pricings: string;
    blog: string;
    resources: string;
    contactUs: string;
    enterprise: string;
    enterpriseCompact: string;
    platform: string;
    documentation: string;
    caseStudy: string;
    console: string;
  };
  home: {
    hero: {
      title: string;
      content: string;
      contentTablet: string;
      buttonEnterprise: string;
      buttonPlatform: string;
    };
    subHeroes: {
      sub1: {
        title: string;
        content: string;
      };
      sub2: {
        title: string;
        content: string;
        button: string;
      };
      sub3: {
        title: string;
        content: string;
        button: string;
      };
    };
    cases: {
      title: string;
      case1: {
        name: string;
        company: string;
        title: string;
        subTitle: string;
        content1: string;
        content2: string;
        action: string;
      };
      case2: {
        name: string;
        company: string;
        title: string;
        subTitle: string;
        content1: string;
        content2: string;
        action: string;
      };
    };
    featured: string;
    blog: {
      title: string;
      viewAll: string;
    };
  };
  footer: {
    product: {
      title: string;
      platform: string;
      enterprise: string;
    };
    company: {
      title: string;
      contact: string;
      careers: string;
      blog: string;
    };
    resources: {
      title: string;
      documentation: string;
      caseStudies: string;
    };
    privacy: string;
    terms: string;
    copyright: string;
  };
  enterprise: {
    title: string;
    subTitle: string;
    subTitleTablet: string;
    button: string;
    subHeroes: {
      sub1: {
        title: string;
        content: string;
      };
      sub2: {
        title: string;
        content: string;
      };
    };
    media: {
      title: string;
      subTitle: string;
      icons: {
        icon1: {
          title: string;
          content: string;
        };
        icon2: {
          title: string;
          content: string;
        };
        icon3: {
          title: string;
          content: string;
        };
      };
    };
    cta: {
      title: string;
      subTitle: string;
      button: string;
    };
  };
  platform: {
    hero: {
      title: string;
      subTitle: string;
      subTitleTablet: string;
      button: string;
    };
    subHeroes: {
      sub1: {
        title: string;
        content: string;
      };
      sub2: {
        title: string;
        content: string;
      };
      sub3: {
        title: string;
        content: string;
      };
      sub4: {
        title: string;
        content: string;
      };
      sub5: {
        title: string;
        content: string;
      };
    };
    media: {
      title: string;
      subTitle: string;
      icons: {
        icon1: string;
        icon2: string;
        icon3: string;
        icon4: string;
        icon5: string;
        icon6: string;
      };
    };
    cta: {
      title: string;
      subTitle: string;
      button: string;
    };
  };
  pricing: {
    hero: {
      title: string;
      subTitle: string;
      subTitleTablet: string;
    };
    left: {
      title: string;
      subTitle: string;
      priceTitle: string;
      priceSubTitle: string;
      button: string;
      list: string[];
    };
    right: {
      title: string;
      subTitle: string;
      priceTitle: string;
      priceSubTitle: string;
      button: string;
      litsTitle: string;
      list: string[];
    };
    partnerTitle: string;
  };
  documentation: {
    title: string;
    subTitle: string;
    subTitleTablet: string;
  };
  caseStudy: {
    hero: {
      title: string;
      subTitle: string;
      subTitleTablet: string;
    };
    jemma: {
      title: string;
      subTitle: string;
      p1: string;
      p2: string;
      sub1: string;
      sub2: string;
      p3: string;
      p4: string;
      p5: string;
      sub3: string;
      p6: string;
      p7: string;
      sub4: string;
      p8: string;
      p9: string;
      sub5: string;
      p10: string;
      p11: string;
      p12: string;
      p13: string;
    };
    veronika: {
      title: string;
      subTitle: string;
      p1: string;
      p2: string;
      sub1: string;
      sub2: string;
      p3: string;
      p4: string;
      p5: string;
      sub3: string;
      p6: string;
      p7: string;
      sub4: string;
      p8: string;
      p9: string;
      p10: string;
      sub5: string;
      p11: string;
      p12: string;
      p13: string;
      p14: string;
      p15: string;
    };
    cta: {
      title: string;
      subTitle: string;
      button: string;
    };
  };
  contact: {
    hero: {
      title: string;
      subTitle: string;
    };
    box: {
      title: string;
      required: string;
      form: {
        name: string;
        company: string;
        email: string;
        businessType: string;
        phone: string;
        detail: string;
        button: string;
      };
      error: {
        name: string;
        company: string;
        email: string;
        businessType: string;
        phone: string;
        detail: string;
      };
    };
  };
}
