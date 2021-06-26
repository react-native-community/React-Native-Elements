import React from 'react';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl">
        <div className="container ">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col col--3 col--offset-1">
              <img src="/img/app-preview3.png" />
            </div>
            <div className="col col--8 text--center">
              <h1 className="hero__title gradient clip-text">The Demo App</h1>
              <p className="p--desc">
                To see React Native Elements in action, play a live demo
                published on Expo Go or run it by cloning a GitHub repo. Compose
                the application from available screens, add backend integration,
                and you will end up with an A-grade cross-platform mobile
                application.
              </p>
              <Link
                className={
                  'button button--secondary button--outline button--lg heroButton margin-horiz--sm margin-vert--sm'
                }
                to={'https://expo.io/@flyingcircle/react-native-elements-app'}
              >
                Run on Expo Go
              </Link>
              <Link
                className={
                  'button button--secondary button--lg heroButton margin-horiz--sm margin-vert--sm'
                }
                to={
                  'https://github.com/react-native-elements/react-native-elements-app'
                }
              >
                View on Github
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;