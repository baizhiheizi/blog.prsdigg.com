import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '早期读者奖励',
    // imageUrl: 'img/logo.svg',
    description: (
      <>
        PRSDigg 创新性地引入早期读者奖励机制，付费阅读的同时也是一种早期投资，
      当内容受到更多读者青睐的时候，早期读者作为会得到奖励。
      </>
    ),
  },
  {
    title: '链上存证',
    // imageUrl: 'img/pressone-logo.png',
    description: (
      <>
        所有 PRSDigg 平台上的文章都将在 PRESSone 主网签名存证。
      </>
    ),
  },
  {
    title: '闪电支付',
    // imageUrl: 'img/mixin-logo.png',
    description: (
      <>
        PRSDigg 使用 Mixin Network 作为底层支付网络，支持多种虚拟货币，即时到账，
      让收益无需等待。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Official Blog of PRSDigg">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('blog/')}>
              开始
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
