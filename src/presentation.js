/* eslint-disable import/no-webpack-loader-syntax */
// Import React
import React from 'react';
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';

// Require CSS
require('normalize.css');

const images = {
  chatSchrodinger: require('./assets/chat-schrodinger.jpg'),
  chatSchrodingerExplanation: require('./assets/cat-schrodinger-explanation.gif'),
  doubtfull: require('./assets/doubtfull.png'),
  blueScreen: require('./assets/bluescreen.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

const BigCodePane = styled(CodePane)`
  font-size: 2rem;
`;

const RedListItem = styled(ListItem)`
  color: red;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Null, undefined and maybe,
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            a tale of uncertainty
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>What is uncertainty ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Which is not of a fixed nature.</Heading>
          <Heading fit>Ce qui n'est pas d'une nature bien arrêté</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src={images.chatSchrodinger.replace('/', '')} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src={images.chatSchrodingerExplanation.replace('/', '')} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Most popular languages 2019</Heading>
          <List ordered>
            <ListItem>Javascript</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>PHP</ListItem>
            <ListItem>C++</ListItem>
            <ListItem>C</ListItem>
            <ListItem>Ruby</ListItem>
            <ListItem>Go</ListItem>
            <ListItem>Swift</ListItem>
            <ListItem>Kotlin</ListItem>
          </List>
          <Link
            target="_blank"
            href="https://insights.stackoverflow.com/survey/2019#most-popular-technologies"
          >
            stackoverflow - 2019#most-popular-technologies
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>There is one common point between this languages</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>null</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>nill</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>None</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading>What is the problem with null ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Java</Heading>
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/ok.java')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Java</Heading>
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/null.java')}
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>Every time you use a value it may not exist.</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>For all those 10 most popular languages.</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>What does it mean for an application ?</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Image src={images.blueScreen.replace('/', '')} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List ordered>
            <ListItem>Crash</ListItem>
            <ListItem>Inconsistent behavior</ListItem>
            <ListItem>Application stuck in a specific state</ListItem>
            <ListItem>...</ListItem>
          </List>
          <Text textColor="tertiary">
            All those issue are more or less hard to debug and fix
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>How does those errors appear ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>How does null value appear ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List ordered>
            <RedListItem>Javascript</RedListItem>
            <ListItem>Python</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>PHP</ListItem>
            <ListItem>C++</ListItem>
            <ListItem>C</ListItem>
            <ListItem>Ruby</ListItem>
            <ListItem>Go</ListItem>
            <ListItem>Swift</ListItem>
            <ListItem>Kotlin</ListItem>
          </List>
          <Link
            target="_blank"
            href="https://insights.stackoverflow.com/survey/2019#most-popular-technologies"
          >
            stackoverflow - 2019#most-popular-technologies
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Lets focus on Javascript</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>Why ?</Heading>
          <List>
            <ListItem>Im a javascript developper</ListItem>
            <ListItem>The language have a NULL</ListItem>
            <ListItem>And also UNDEFINED</ListItem>
          </List>
          <Text textColor="tertiary">We are so lucky</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>How does null value appear ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Typo</Heading>
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/typo.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>A linter or a compiler should save you</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading>It should not happen</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/find.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>It should not happen</Heading>
          <List>
            <ListItem>Should be already been loaded</ListItem>
            <ListItem>Loading should not fail</ListItem>
            <ListItem>there is no way we have inconsistent data</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Image src={images.doubtfull.replace('/', '')} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>
            A program <strong style={{ color: 'red' }}>consume</strong> many
            values that may exist or not
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>
            A program <strong style={{ color: 'red' }}>produce</strong> many
            values that may exist or not
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List>
            <ListItem>Because of non existant input values</ListItem>
            <ListItem>values of wrong shape</ListItem>
            <ListItem>Mistake</ListItem>
            <ListItem>Or impossible calculations</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>How to deal with it ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>For each function check the parameters</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/check.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>It unsustainable</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading>Each time you check for a value existance</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading>You should have to make a decision</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/checkplus.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List>
            <ListItem>return undefined or null</ListItem>
            <ListItem>throw an error</ListItem>
            <ListItem>return an error</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Tip number 1</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Consider that your functions</Heading>
          <Heading fit>should not consume nullable</Heading>
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/nocheck.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>
            Consider that your functions may produce nullable value
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <List>
            <ListItem>find</ListItem>
            <ListItem>get</ListItem>
            <ListItem>➗</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>How is this supposed to help ?</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Deal with dangerous nullable values</Heading>
          <Heading fit>in a few known place</Heading>
          <List>
            <ListItem>this way you take less decision</ListItem>
            <ListItem>if an error happen you know were to look at</ListItem>
            <ListItem>rest of your code can be simple</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Tip number 2</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Switch to a non top ten language,</Heading>
          <Heading fit>that do not have null concept in it</Heading>
          <List>
            <ListItem>Purescript</ListItem>
            <ListItem>Elm</ListItem>
            <ListItem>ReasonML</ListItem>
          </List>
          <Text>No Null == Less Problems</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Easier said than done.</Heading>
          <Heading>OK</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Check those language on how</Heading>
          <Heading fit>they deal with non existant values</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>And adapt it to javascript</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading>Remember our famous cat ?</Heading>
          <Image src={images.chatSchrodinger.replace('/', '')} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Maybe = Just value | Nothing</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Lets build a smart cardboard box</Heading>
          <List>
            <ListItem>Should be easy to build</ListItem>
            <ListItem>
              Force us to handle the case where the value does not exist
            </ListItem>
            <ListItem>Lets call it Maybe</ListItem>
            <ListItem>It could be Just a value</ListItem>
            <ListItem>Or Nothing</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/example-simple.text')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/simple-8lo6b?fontsize=14"
            title="Simple"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Lets enhance again this Maybe thing</Heading>
          <List>
            <ListItem>Transforming the value should be easier</ListItem>
            <ListItem>Without having to rely on fold everytime</ListItem>
            <ListItem>Without loosing safety</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/map.js')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Lets call it map</Heading>
          <List>
            <ListItem>
              Should apply safely the function to the maybe value
            </ListItem>
            <ListItem>Should return the same kind of "container"</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/example-map.text')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/map-qtjyo?fontsize=14"
            title="Map"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Multiple Maybe value</Heading>
          <List>
            <ListItem>Produce a value from two maybe or more Maybe</ListItem>
            <ListItem>Without having to consider all case by hand</ListItem>
            <ListItem>While still producing value in our safe maybe</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Ap</Heading>
          <List>
            <ListItem>Apply a function from inside a Maybe</ListItem>
            <ListItem>To a data inside another Maybe</ListItem>
            <ListItem>To produce a new Maybe</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/example-ap.text')}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/example-ap2.text')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/applicative-yycuc?fontsize=14"
            title="Ap"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>Producing a Nothing from a Just</Heading>
          <Heading fit>Example is data validation</Heading>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          align="flex-start center"
        >
          <BigCodePane
            className="code__big"
            lang="javascript"
            source={require('!raw-loader!./assets/example-chain.text')}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <iframe
            src="https://codesandbox.io/embed/complete-2bzlx?fontsize=14"
            title="Chain"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            style={{
              width: '1000px',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>We have pretty much covered our bases</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>A few libs that provide</Heading>
          <Heading fit>Maybe/Option and more</Heading>
          <List>
            <ListItem>https://monet.github.io/monet.js/</ListItem>
            <ListItem>https://folktale.origamitower.com/</ListItem>
            <ListItem>https://gcanti.github.io/fp-ts/</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Handling async resource - Dataway</Heading>
          <List>
            <ListItem>Modeled with 4 state</ListItem>
            <ListItem>NotAsked, Loading, Failure, Success</ListItem>
            <ListItem>Written in typescript with solid type def</ListItem>
            <ListItem>https://github.com/iadvize/dataway</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>Axel CATELAND</Heading>
          <Heading>
            <Link target="_blank" href="https://twitter.com/catelandaxel">
              @catelandaxel
            </Link>
          </Heading>
          <Heading fit>Working at Iadvize</Heading>
          <Heading>
            <Link target="_blank" href="https://twitter.com/iadvize/">
              @iadvize
            </Link>
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading fit>Questions</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading fit>value?.anotherOne?.more</Heading>
        </Slide>
      </Deck>
    );
  }
}
