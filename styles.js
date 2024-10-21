import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E90ff',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: 'flex-end',
    margin: 5,
  },
  searchInput: {
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#ECECEC',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    paddingBottom: 80,
  },
  placeItem: {
    flex: 1,
    margin: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  placeImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  placeTextContainer: {
    padding: 8,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeDescription: {
    fontSize: 12,
    color: '#A9A9A9',
    textAlign: 'center',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailsImage: {
    width: '100%',
    height: 200,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  detailsRating: {
    fontSize: 18,
    color: 'gold',
  },
  detailsReview: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#A9A9A9',
  },
  detailsDescription: {
    padding: 10,
    color: '#A9A9A9',
  },
  photosTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  photoItem: {
    margin: 5,
    borderRadius: 8,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
  },
  activeNavText: {
    color: '#007BFF',
  },
  spacer: {
    height: 60,
  },
});

export default styles;
