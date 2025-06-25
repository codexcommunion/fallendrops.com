import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Access Internal Documents',
    Svg: require('@site/static/img/undraw_firewall_cfej.svg').default,
    description: (
      <>
        Review leaked memoranda, communications, protocols, classified briefings, and more... sourced from the infernal networks of the Lowerarchy.
      </>
    ),
  },
  {
    title: 'Structured Intelligence Archive',
    Svg: require('@site/static/img/undraw_file-search_cbur.svg').default,
    description: (
      <>
        Each file is categorized via metadata, enabling targeted review of operational practices, strategic directives, and case-level documentation.
      </>
    ),
  },
  {
    title: 'Immutable Drop Integrity',
    Svg: require('@site/static/img/undraw_version-control_e4yu.svg').default,
    description: (
      <>
        Data Files available in multiple forms, including original formats as well as web optimized versions for easy and safe access.
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
