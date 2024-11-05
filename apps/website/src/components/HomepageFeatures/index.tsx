import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visually equivalent to Joy UI',
    description: (
      <>
        Tailwind-Joy was designed to be a one-to-one replacement for components
        of Joy UI.
      </>
    ),
  },
  {
    title: 'Less configuration',
    description: (
      <>
        Just add a few modules to your TailwindCSS configuration and you're
        ready to go.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--2')} />
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
          <div className={clsx('col col--2')} />
        </div>
      </div>
    </section>
  );
}
