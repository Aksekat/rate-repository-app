import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const itemHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  imageContainer: {
    flexGrow: 0,
    paddingRight: 15
  },
  infoContainer: {
    flexGrow: 0,
    flexShrink: 1,
  },
  languageContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  languageText: {
    color: 'white', 
    backgroundColor: theme.colors.primary, 
    borderRadius: 5, 
    padding: 5
  }
});

const ItemHeader = ({ repository }) => {
  return (
    <View style={itemHeaderStyles.container}>
      <View style={itemHeaderStyles.imageContainer}>
        <Image style={itemHeaderStyles.image} source={{ uri: repository.ownerAvatarUrl }} />
      </View>
      <View style={itemHeaderStyles.infoContainer}>
        <Text fontWeight='bold' fontSize='subheading'>{repository.fullName}</Text>
        <Text color='textSecondary'>{repository.description}</Text>
        <View style={itemHeaderStyles.languageContainer}>
          <Text style={itemHeaderStyles.languageText}>{repository.language}</Text>
        </View>
      </View>
    </View>
  );
};

const itemFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  infoContainer: {
    alignItems: 'center',
  },
});

const ItemFooterInfo = ({ value, text }) => {
  if(value >= 1000) {
    value = String(Math.round(value/100)/10) + 'k';
  }
  return (
    <View style={itemFooterStyles.infoContainer}>
      <Text fontWeight='bold'>{value}</Text>
      <Text color='textSecondary'>{text}</Text>
    </View>
  );
};

const ItemFooter = ({ repository }) => {
  return (
    <View style={itemFooterStyles.container}>
      <ItemFooterInfo value={repository.stargazersCount} text='Stars' />
      <ItemFooterInfo value={repository.forksCount} text='Forks' />
      <ItemFooterInfo value={repository.reviewCount} text='Reviews' />
      <ItemFooterInfo value={repository.ratingAverage} text='Rating' />
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    alignItems: 'stretch',
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={itemStyles.container}>
      <ItemHeader repository={repository} />
      <ItemFooter repository={repository} />
    </View>
  );
};

export default RepositoryItem;