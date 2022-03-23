import { AntDesign } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Yamin",
    image:
      "https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-9/148800596_105113118281198_4339075872391344687_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeElzBai7F74rerlNCg_TqXs5gNdRGu28bzmA11Ea7bxvDbCgwttu9vh6LU8Ov6HQ7_lB2N-yDS0QJd3oISzr3G3&_nc_ohc=oOwtAQlAzA8AX-BSLGI&_nc_oc=AQmGyW_z7mf9R--wO4Ngcdp8S0U7YIjeD8eBb0JsIL6FugEskYNJGLu4AI0uYwvWrq8&_nc_ht=scontent.fdac135-1.fna&oh=00_AT_A95reehbsq-S5tOQW_UQi8gJA-66r8DijPbHjIle85Q&oe=625FD287",
  },
  {
    type: "contact",
    name: "Zoom",
    image:
      "https://www.onlywebinars.com/wp-content/uploads/2021/06/Zoom-Logo-PNG-Photo.png",
  },
  {
    type: "contact",
    name: "Google Meet",
    image:
      "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png",
  },
  {
    type: "contact",
    name: "Microsoft Teams",
    image: "https://www.fileeagle.com/data/2021/05/Microsoft-Teams.png",
  },
  {
    type: "contact",
    name: "Livestorm",
    image:
      "https://yt3.ggpht.com/VeXg6z_RgkC9IMu1asMdCZleAjc39wvFLWvgSl9zSv1Wg9iQXgqqM0YYo6NlNmHUw52yjjHx=s900-c-k-c0x00ffffff-no-rj",
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map((contact, index) => (
        <View key={index} style={styles.row}>
          {contact.type === "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image style={styles.image} source={{ uri: contact.image }} />
          )}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    height: 55,
    width: 55,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
