import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasgna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://th.bing.com/th/id/OIP.YUtHmF1MXI9vBR4N5w_gDwHaFi?pid=ImgDet&rs=1",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Pakistani dish with tenderloin chicken off the sizzler",
    price: "$19.20",
    image:
      "https://th.bing.com/th/id/OIP.21xfGQ9jUczQhBfBTgASHwHaEJ?pid=ImgDet&rs=1",
  },
  {
    title: "Pepperoni Pizza",
    description:
      "Indulge in the classic combination of zesty pepperoni, melted cheese, and mouthwatering tomato sauce on our delectable pizza.",
    price: "$12.50",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/19/49/35/81/pizza.jpg",
  },
  {
    title: "Yaseen Shawarma",
    description:
      "Experience a flavor-packed delight with our iconic Popeyes chicken sandwich, featuring crispy chicken, tangy pickles, and a toasted bun.",
    price: "$9.99",
    image: "https://i.iheart.com/v3/re/new_assets/5db737114beb39a14f502f6c",
  },
  {
    title: "Chicken Sandwich",
    description:
      "Satisfy your cravings with delectable medley of tender, marinated meats, fresh vegetables, and mouthwatering sauces wrapped in a warm pita.",
    price: "$25.99",
    image:
      "https://th.bing.com/th/id/OIP.WQWk4KWCd494g4-Vt9f9lAHaEK?pid=ImgDet&rs=1",
  },
];

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
};

export default RestaurantDetail;
