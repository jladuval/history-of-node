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
  ryan: require('../assets/ryan_dahl.jpg')
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
              <Fill>
                <Heading>VS</Heading>
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
            <Heading caps fit>Ecmascript</Heading>
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
            <Text size={1} caps textColor="black">
              Jquery
            </Text>
            <Appear fid="1">
              <Text size={1} caps  textColor="black">
                Dojo
              </Text>
            </Appear>
            <Appear fid="2">
              <Text size={1}  caps textColor="black">
                YUI
              </Text>
            </Appear>
            <Appear fid="3">
              <Text size={1} caps  textColor="black">
                Prototype
              </Text>
            </Appear>
            <Appear fid="4">
              <div>
                <Text size={1} caps textColor="black">
                  Mootools
                </Text>
                <Text size={1}  caps textColor="black">
                  MochiKit
                </Text>
                <Text size={1} caps textColor="black">
                  Scriptaculous
                </Text>
              </div>
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
              HARMONY
            </Heading>
            <Heading caps fit size={2} textColor="primary">
              ES3.1 == ES5
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
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
                  src={images.ryan} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>I wrote 8000 lines of C code so that you peasants can stop blocking your threads with I/O</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>That is a great idea</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>It's called node and you write it in javascript</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>LOL JAVASCRIPT. No thanks.</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>Check this out, I call it npm</Quote>
                  <Cite>Isaac Schlueter</Cite>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>lol..javascript...</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>Check this out, I call it express</Quote>
                  <Cite>TJ Holowaychuk, 2010</Cite>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>Check this out, I call it socket.io</Quote>
                  <Cite>Guillermo Rauch, 2010</Cite>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
             <Heading caps fit size={1} textColor="primary">
              Strong community
            </Heading>
            <Image
              src={images.ryan}
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Heading caps fit size={1} textColor="primary">
              2011
            </Heading>
            <Text size={1} caps textColor="black">
              Windows Support
            </Text>
            <Appear fid="1">
              <Text size={1} caps  textColor="black">
                linkedIn
              </Text>
            </Appear>
            <Appear fid="2">
              <Text size={1}  caps textColor="black">
                Uber
              </Text>
            </Appear>
            <Appear fid="3">
              <Text size={1} caps  textColor="black">
                npm 1.0
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit>
              2012
            </Heading>
          </Slide>

           <Slide transition={["slide"]} bgColor="black">
             <Heading caps fit size={1} textColor="primary">
              Ummmm... Ryan?
            </Heading>
            <Image
              src={images.ryan}
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Heading caps fit size={1} textColor="primary">
              2012
            </Heading>
            <Text size={1} caps textColor="black">
              Isaac steps in as head of node
            </Text>
            <Appear fid="1">
              <Text size={1} caps  textColor="black">
                v0.8 - Performance for a bunch of I/O tasks increases by almost 50%
              </Text>
            </Appear>
            <Appear fid="2">
              <Text size={1}  caps textColor="black">
                Hapi
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Heading caps fit size={1} textColor="primary">
              2013
            </Heading>
            <Text size={1} caps textColor="black">
              MEAN stack
            </Text>
            <Appear fid="1">
              <Text size={1} caps  textColor="black">
                Ebay starts using node
              </Text>
            </Appear>
            <Appear fid="2">
              <Text size={1}  caps textColor="black">
                Paypal start using node
              </Text>
            </Appear>
            <Appear fid="3">
              <Text size={1} caps  textColor="black">
                koa released
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit>
              2014
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps  textColor="black">
                POWER STRUGGLES
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>Node needs to be stable, reliable, and dependable.</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                />
              </Fit>
              <Fill>
                <BlockQuote textSize={"20px"}>
                  <Quote>Node needs to be fast and scrappy, and keep moving as quickly as possible.</Quote>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                  margin="0 40px 0"
                />
              </Fit>
              <Fill>
                <Heading size={1} caps fit>
                  T.J. Fontaine
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Layout>
              <Fit>
                <Image
                  src={images.ryan} height="293px"
                  margin="0 40px 0"
                />
              </Fit>
              <Fill>
                <Heading size={1} caps fit>
                  iojs
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Heading caps fit size={1} textColor="primary">
              iojs
            </Heading>
            <Text size={1} caps textColor="black">
              Uber immediately puts it straight into production (easy there)
            </Text>
            <Appear fid="1">
              <Text size={1} caps  textColor="black">
                Latest version of V8
              </Text>
            </Appear>
            <Appear fid="2">
              <Text size={1}  caps textColor="black">
                Semantic Versioning
              </Text>
            </Appear>
            <Appear fid="3">
              <Text size={1} caps  textColor="black">
                Open Governance
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit>Place your bets now</Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
              <Fill>
                <Heading>VS</Heading>
              </Fill>
              <Fill>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit>IOJS wins</Heading>
            <Image
                src={images.netscape} height="293px"
              />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Heading caps fit size={1} textColor="primary">
              2015
            </Heading>
            <Text size={1} caps textColor="black">
              iojs and node will merge
            </Text>
            <Appear fid="1">
              <Text size={1} caps  textColor="black">
                Node will opt for an open governance model
              </Text>
            </Appear>
            <Appear fid="2">
              <Text size={1}  caps textColor="black">
                And we will go from 0.12 to v4...
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit>
              2016
            </Heading>
          </Slide>
          
          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit>How to break npm</Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.netscape} height="293px"
                />
              </Fill>
              <Fill>
                <Heading>+</Heading>
              </Fill>
              <Fill>
                <Text>npm unpublish</Text>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Heading caps fit size={1} textColor="primary">
              2016 (the year of facebook)
            </Heading>
            <Text size={1} caps textColor="black">
              yarn
            </Text>
            <Appear fid="1">
              <Text size={1} caps  textColor="black">
                graphql
              </Text>
            </Appear>
            <Appear fid="2">
              <Text size={1}  caps textColor="black">
                React starts dominating everything
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit>
              2017 (you are here)
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
