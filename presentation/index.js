// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Fit,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

import Marquee from 'react-marquee'

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  netscape: require('../assets/netscape.jpg'),
  brendan: require('../assets/brendan_eich.jpg'),
  js1995: require('../assets/js_1995_logo.png'),
  nodejsServer: require('../assets/nodejs_server.png'),
  ryan: require('../assets/ryan_dahl.jpg'),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              The history of node 
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              1995
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              <blink>The blink tag</blink>
            </Heading>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
               <Marquee text="The marquee tag is a very important element that all developers should learn how to use. It is the large knife in the swiss army knife of a web developers toolkit." />
            </Heading>
           
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote >What if the only limit to how annoying you can make your webpage.... was your imagination?</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.brendan} height="293px"
                  margin="0 40px 0"
                />
              </Fit>
              <Fill>
                <Heading size={1} caps fit>
                  Brendan Eich
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote >You have 10 days, make us a language</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4} caps fit textColor="black">
              Mocha
            </Heading>
            <Appear fid="1">
              <Heading size={4} caps fit textColor="black">
                Livescript
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.brendan} height="293px"
                  margin="0 40px 0"
                />
              </Fit>
              <Fill>
                <Heading size={1} caps fit>
                  Javascript
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>Netscape built this in a cave in 10 days!</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>Let's just flood the market</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>
          
          <Slide transition={["slide"]} bgDarken={0.75}>
            <Heading>
              JScript
            </Heading>
            <Heading>
              J++
            </Heading>
            <Heading>
              vbscript
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.brendan} height="293px"
                  margin="0 40px 0"
                />
              </Fit>
              <Fill>
                <Heading size={1} caps fit>
                  Douglas Crockford
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgDarken={0.75}>
            <Heading>
              JScript == Javascript
            </Heading>
            <Text>(pretty much)</Text>
          </Slide>
          
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit>Browser wars</Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
                <Heading>VS</Heading>
              <Fill>
              </Fill>
              <Fill>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>Your fighting is hurting poor javascript. Let's make a standard</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>I Agree</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

           <Slide transition={["fade"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>I Agree</Quote>
                  <Cite>with their fingers crossed behind their back</Cite>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit>Browser wars</Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
              <Fill>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
              <Fill>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>This is great, let's basically turn it into c#</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>How about no</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              The JS Dark Ages
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              2005
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.brendan} height="293px"
                />
              </Fit>
              <Fill>
               <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.brendan} height="293px"
                />
              </Fit>
              <Fill>
               <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.brendan} height="293px"
                />
              </Fit>
              <Fill>
               <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.brendan} height="293px"
                  margin="0 40px 0"
                />
              </Fit>
              <Fill>
                <Heading size={1} caps fit>
                  Jesse James Garnett
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit>
              AJAX
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit>
              The Javascript Renaissance
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text size={4} caps fit textColor="black">
              Jquery
            </Text>
            <Appear fid="1">
              <Text size={4} caps fit textColor="black">
                Dojo
              </Text>
            </Appear>
            <Appear fid="2">
              <Text size={4} caps fit textColor="black">
                YUI
              </Text>
            </Appear>
            <Appear fid="3">
              <Text size={4} caps fit textColor="black">
                Prototype
              </Text>
            </Appear>
            <Appear fid="4">
              <Text size={4} caps fit textColor="black">
                Mootools
              </Text>
              <Text size={4} caps fit textColor="black">
                MochiKit
              </Text>
              <Text size={4} caps fit textColor="black">
                Scriptaculous
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit>
              WEB 2.0
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              2009
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
                ~~ES3.1~~
                ES5
              `}
            </Markdown>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              HARMONY
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.brendan} height="293px"
                  margin="0 40px 0"
                />
              </Fit>
              <Fill>
                <Heading size={1} caps fit>
                  Ryan Dahl
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>How about no</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
