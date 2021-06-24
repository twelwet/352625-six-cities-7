const getOfferAdapter = (offerFromServer) => {
  const {
    id,
    title,
    description,
    type,
    price,
    images,
    rating,
    bedrooms,
    goods,
    city,
    location,
  } = offerFromServer;

  const {id: hostId, name: hostName} = offerFromServer.host;

  return {
    id,
    title,
    description,
    type,
    price,
    previewImage: offerFromServer['preview_image'],
    images,
    rating,
    bedrooms,
    maxAdults: offerFromServer['max_adults'],
    goods,
    host: {
      id: hostId,
      name: hostName,
      isPro: offerFromServer.host['is_pro'],
      avatarUrl: offerFromServer.host['avatar_url'],
    },
    city,
    isPremium: offerFromServer['is_premium'],
    isFavourite: offerFromServer['is_favorite'],
    location,
  };
};

export default getOfferAdapter;
