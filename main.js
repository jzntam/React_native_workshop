'use strict';

var React = require('react-native');
var { AppRegistry, View, StyleSheet, Text, Image, ActivityIndicatorIOS, ScrollView} = React;

var MyApp = React.createClass({

  getInitialState() {
    return {person: null};
  },

  componentDidMount() {
    fetch('https://swapi.co/api/people/1').
      then((result) => result.json()).
      then((person) => this.setState({person}));
  },

  render() {
    let { person } = this.state;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
        <Text>
          Migas synth ethical, banh mi cronut kitsch Pitchfork single-origin coffee tilde pop-up. Kickstarter mustache Williamsburg post-ironic, ugh gastropub whatever pork belly Echo Park hashtag drinking vinegar bespoke meh cardigan. Pinterest next level jean shorts stumptown fixie, gluten-free scenester banjo single-origin coffee food truck Thundercats drinking vinegar PBR&B asymmetrical crucifix. Try-hard paleo direct trade PBR&B chillwave art party beard tousled, migas gentrify disrupt mlkshk four loko. Echo Park cold-pressed +1, Truffaut four loko tattooed letterpress street art mumblecore selvage fixie retro bitters gentrify. Gentrify health goth art party, pug fingerstache try-hard viral. Etsy 8-bit deep v lumbersexual.
        </Text>
        <Text>
          Aesthetic post-ironic tousled, fingerstache mustache flexitarian migas cold-pressed tilde Neutra disrupt. Roof party PBR fap four dollar toast, seitan 8-bit forage DIY. Keffiyeh direct trade cold-pressed, Helvetica Portland small batch chillwave art party plaid fashion axe tofu letterpress American Apparel banjo skateboard. Sartorial slow-carb you probably havent heard of them selfies. Cliche sartorial wolf squid pour-over. +1 selfies Shoreditch, before they sold out salvia four dollar toast blog. Food truck ugh pickled chambray PBR, American Apparel gentrify deep v sustainable.
        </Text>
        <Text>
          Four dollar toast Kickstarter lomo +1 flannel. +1 DIY Williamsburg, artisan Truffaut sriracha organic PBR chia fingerstache. Pinterest gastropub gentrify semiotics, Shoreditch Portland church-key tattooed occupy. Vice gentrify sustainable listicle lumbersexual, fanny pack street art Odd Future Portland. Sustainable locavore vinyl before they sold out, try-hard biodiesel distillery keytar kitsch literally vegan dreamcatcher Brooklyn. VHS heirloom 90s umami four loko Carles. Cliche cold-pressed narwhal vinyl, tilde tofu migas pour-over readymade Godard craft beer.
        </Text>
        <Text>
          Slow-carb Williamsburg Echo Park meh, wolf 90s direct trade. DIY gentrify XOXO ugh raw denim Carles salvia narwhal master cleanse, umami retro Vice viral bespoke cronut. Occupy Carles four loko tilde, kale chips freegan sustainable ugh. Narwhal PBR&B artisan, YOLO tilde irony mumblecore kogi XOXO Vice. Williamsburg mixtape DIY, sustainable wayfarers shabby chic sartorial. Try-hard jean shorts umami, gastropub meh banh mi organic typewriter flexitarian Marfa trust fund before they sold out. Forage aesthetic Helvetica butcher artisan.
        </Text>
        <Text>
          Chillwave freegan PBR Etsy tofu, VHS Marfa raw denim cornhole plaid post-ironic banh mi Thundercats food truck. Banjo meditation street art Blue Bottle, skateboard viral mixtape bespoke squid four loko YOLO flannel. Beard asymmetrical Portland, bicycle rights plaid cray meditation keytar squid. Williamsburg Wes Anderson hashtag roof party American Apparel mixtape actually, lumbersexual vinyl. Four dollar toast synth forage raw denim try-hard before they sold out keffiyeh bicycle rights gastropub actually, Williamsburg pork belly mustache tattooed. Fanny pack polaroid seitan slow-carb, synth distillery Blue Bottle tofu yr tattooed church-key Neutra Intelligentsia DIY. Forage post-ironic hoodie Marfa Wes Anderson.
        </Text>
        <Text>
          Polaroid High Life VHS seitan, Odd Future ugh Echo Park Williamsburg. Hoodie sartorial cardigan, biodiesel messenger bag Pitchfork pour-over aesthetic listicle post-ironic tattooed you probably havent heard of them squid butcher selvage. Salvia wolf roof party, master cleanse quinoa jean shorts semiotics migas art party Etsy cronut. Art party XOXO church-key cronut messenger bag keytar migas Williamsburg Intelligentsia. Slow-carb Kickstarter Truffaut mixtape Schlitz beard. Forage drinking vinegar Brooklyn slow-carb, crucifix health goth tattooed Intelligentsia Odd Future pickled Tumblr gastropub photo booth keytar. Wayfarers synth XOXO American Apparel fashion axe Echo Park.
        </Text>
        <Text>
          Hoodie normcore vinyl, meggings four loko American Apparel Intelligentsia Etsy small batch farm-to-table pug cardigan readymade taxidermy. Brooklyn American Apparel tote bag fap synth flannel PBR trust fund. Schlitz Austin selvage Pitchfork heirloom small batch. Synth farm-to-table cred, fixie church-key heirloom meditation you probably havent heard of them taxidermy lo-fi. Art party umami biodiesel small batch XOXO. Jean shorts drinking vinegar gastropub, Pinterest try-hard photo booth direct trade stumptown Marfa squid High Life. Skateboard Helvetica polaroid, single-origin coffee selfies aesthetic American Apparel Thundercats four dollar toast.
        </Text>
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('main', () => MyApp);
