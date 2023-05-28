import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Alert, Linking} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const images = [
  require('./assets/img1.jpg'),
  require('./assets/img2.jpg'),
  require('./assets/img3.jpg'),
  require('./assets/img4.jpg')
];

const adsData = [
  {
    id: 1,
    title: 'Corte e Sobrancelha',
    image: require('./assets/imgpr-02.jpg')
  },
  {
    id: 2,
    title: 'Tranças e Maquiagem',
    image: require('./assets/imgpr-01.jpg')
  }
];



const renderAd = ({ item }) => {
  



  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};
export default function App() {

    // Função para exibir o alerta ao iniciar o aplicativo
    useEffect(() => {
      // Função para exibir o alerta ao iniciar o aplicativo
      const showAlert = () => {
        Alert.alert(
          '',
          'Deseja fazer um agendamento de imediato?',
          [
            {
              text: 'Não',
              style: 'cancel',
            },
            {
              text: 'Sim',
              onPress: () => {
                // Redirecionar para um link
                Linking.openURL('https://api.whatsapp.com/send/?phone=%2B14155238886&text=join+learn-over&type=phone_number&app_absent=0');
              },
            },
          ],
          { cancelable: false }
        );
      };
  
      // Exibir o alerta ao iniciar o aplicativo
      showAlert();
    }, []);
  
  const renderCarouselItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item} style={styles.carouselImage} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.navBar}>
        {/* Logo e itens de navegação */}
        <Image source={require('./assets/logo-bg.png')} style={styles.logo} />
        <View style={styles.navItems}>
         
        <TouchableOpacity style={styles.button} onPress={() => {
                Linking.openURL('https://api.whatsapp.com/send/?phone=%2B14155238886&text=join+learn-over&type=phone_number&app_absent=0');
              }} >
      <Text style={styles.buttonText}>Agendamento</Text>
    </TouchableOpacity>
        
        </View>
      </View>
      <View style={styles.carouselContainer}>
      <Text style={styles.TextCarousel}>Nossos Penteados</Text>
        <Carousel
          data={images}
          renderItem={renderCarouselItem}
          sliderWidth={400}
          itemWidth={200}
        />
         <Image source={require('./assets/icon-edit.png')} style={styles.logoEdit} />
       <Text style={styles.sloganText}>O que te salva na hora do sufoco</Text>
      </View>
      <View>

      <Text style={styles.TextCarousel}>Nossos Serviços</Text>
          <FlatList
    data={adsData}
    renderItem={renderAd}
    keyExtractor={item => item.id.toString()}
    numColumns={2}
  />
      </View>
      
      <StatusBar style="auto" hidden={true} />
      <View>
 
      </View>
    </View>
    

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
    margin: 0
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
    backgroundColor: '#d85daf'
  },
  logo: {
    width: 100,
    height: 90,
  },
  navItems: {
    flexDirection: 'row'
  },
  
navItem: {
    marginLeft: 20,
    marginRight: 2
  },
  navItemText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24
  },
  button: {
    backgroundColor: '#f582ce',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navItemTextServ: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#fff'
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   paddingBottom: 50
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carouselImage: {
    width: 220,
    height: 200,
    resizeMode: 'cover'
  },
  TextCarousel:{
    fontSize: 22,
    margin: 10,
    color: '#d85daf',
    fontWeight: 'bold',
    fontFamily: 'monospace',

  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal: 10
  },
  logoEdit:{
    height: 60,
    width: 210,
  paddingTop: 10    
  },
  image: {
    width: '100%',
    height: 130,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  cardContent: {
    padding: 10
  },
  title: {
    fontSize: 12,
 
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'

  },
  description: {
    fontSize: 11
  },
  sloganText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d85daf',
    marginTop: 10,
    textAlign: 'center'
  }

});
