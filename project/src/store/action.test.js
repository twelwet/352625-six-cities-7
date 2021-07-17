import {
  ActionType,
  changeCity,
  loadOffersPending,
  loadOffersFulfilled,
  loadOffersRejected,
  loadFavouritesPending,
  loadFavouritesFulfilled,
  loadFavouritesRejected,
  updateOfferFulfilled,
  updateOfferRejected,
  loadOfferPending,
  loadOfferFulfilled,
  loadOfferRejected,
  loadNeighborOffersPending,
  loadNeighborOffersFulfilled,
  loadNeighborOffersRejected,
  loadCommentsPending,
  loadCommentsFulfilled,
  loadCommentsRejected,
  pushCommentIdle,
  pushCommentPending,
  pushCommentRejected,
  requireAuth,
  loginPending,
  loginFulfilled,
  loginRejected,
  logout,
  saveComments,
  redirectToRoute
} from './action.js';


describe('Action `changeCity`', () => {
  it(`action creator ${ActionType.CHANGE_CITY} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris',
    };

    expect(changeCity('Paris')).toEqual(expectedAction);
  });
});


describe('Action `loadOffers`', () => {
  it(`action creator ${ActionType.LOAD_OFFERS_PENDING} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_PENDING,
    };

    expect(loadOffersPending()).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOAD_OFFERS_FULFILLED} returns correct action`, () => {
    const offers = [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}, {id: 3, title: 'offer3'}];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_FULFILLED,
      payload: offers,
    };

    expect(loadOffersFulfilled(offers)).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOAD_OFFERS_REJECTED} returns correct action`, () => {
    const errorMessage = 'Something went wrong';
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_REJECTED,
      payload: errorMessage,
    };

    expect(loadOffersRejected(errorMessage)).toEqual(expectedAction);
  });
});


describe('Action `loadFavourites`', () => {
  it(`action creator ${ActionType.LOAD_FAVOURITES_PENDING} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVOURITES_PENDING,
    };

    expect(loadFavouritesPending()).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOAD_FAVOURITES_FULFILLED} returns correct action`, () => {
    const offers = [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}, {id: 3, title: 'offer3'}];
    const expectedAction = {
      type: ActionType.LOAD_FAVOURITES_FULFILLED,
      payload: offers,
    };

    expect(loadFavouritesFulfilled(offers)).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOAD_FAVOURITES_REJECTED} returns correct action`, () => {
    const errorMessage = 'Something went wrong';
    const expectedAction = {
      type: ActionType.LOAD_FAVOURITES_REJECTED,
      payload: errorMessage,
    };

    expect(loadFavouritesRejected(errorMessage)).toEqual(expectedAction);
  });
});


describe('Action `updateOfferFulfilled`', () => {
  it(`action creator ${ActionType.UPDATE_OFFER_FULFILLED} returns correct action`, () => {
    const offer = {id: 1, title: 'offer1', isFavourite: true};
    const expectedAction = {
      type: ActionType.UPDATE_OFFER_FULFILLED,
      payload: offer,
    };

    expect(updateOfferFulfilled(offer)).toEqual(expectedAction);
  });
});


describe('Action `updateOfferRejected`', () => {
  it(`action creator ${ActionType.UPDATE_OFFER_REJECTED} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFER_REJECTED,
    };

    expect(updateOfferRejected()).toEqual(expectedAction);
  });
});


describe('Action `loadOffer`', () => {
  it(`action creator ${ActionType.LOAD_OFFER_PENDING} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER_PENDING,
    };

    expect(loadOfferPending()).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOAD_OFFER_FULFILLED} returns correct action`, () => {
    const offer = {id: 1, title: 'offer1'};
    const expectedAction = {
      type: ActionType.LOAD_OFFER_FULFILLED,
      payload: offer,
    };

    expect(loadOfferFulfilled(offer)).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOAD_OFFER_REJECTED} returns correct action`, () => {
    const errorMessage = 'Something went wrong';
    const expectedAction = {
      type: ActionType.LOAD_OFFER_REJECTED,
      payload: errorMessage,
    };

    expect(loadOfferRejected(errorMessage)).toEqual(expectedAction);
  });
});


describe('Action `loadNeighborOffers`', () => {
  it(`action creator ${ActionType.LOAD_NEIGHBOR_OFFERS_PENDING} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_NEIGHBOR_OFFERS_PENDING,
    };

    expect(loadNeighborOffersPending()).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOAD_NEIGHBOR_OFFERS_FULFILLED} returns correct action`, () => {
    const offers = [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}, {id: 3, title: 'offer3'}];
    const expectedAction = {
      type: ActionType.LOAD_NEIGHBOR_OFFERS_FULFILLED,
      payload: offers,
    };

    expect(loadNeighborOffersFulfilled(offers)).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOAD_NEIGHBOR_OFFERS_REJECTED} returns correct action`, () => {
    const errorMessage = 'Something went wrong';
    const expectedAction = {
      type: ActionType.LOAD_NEIGHBOR_OFFERS_REJECTED,
      payload: errorMessage,
    };

    expect(loadNeighborOffersRejected(errorMessage)).toEqual(expectedAction);
  });
});


describe('Action `loadComments`', () => {
  it(`action creator ${ActionType.LOAD_COMMENTS_PENDING} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS_PENDING,
    };

    expect(loadCommentsPending()).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOAD_COMMENTS_FULFILLED} returns correct action`, () => {
    const comments = [{id: 1, title: 'comment1'}, {id: 2, title: 'comment2'}, {id: 3, title: 'comment3'}];
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS_FULFILLED,
      payload: comments,
    };

    expect(loadCommentsFulfilled(comments)).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOAD_COMMENTS_REJECTED} returns correct action`, () => {
    const errorMessage = 'Something went wrong';
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS_REJECTED,
      payload: errorMessage,
    };

    expect(loadCommentsRejected(errorMessage)).toEqual(expectedAction);
  });
});


describe('Action `pushComment`', () => {
  it(`action creator ${ActionType.PUSH_COMMENT_IDLE} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.PUSH_COMMENT_IDLE,
    };

    expect(pushCommentIdle()).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.PUSH_COMMENT_PENDING} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.PUSH_COMMENT_PENDING,
    };

    expect(pushCommentPending()).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.PUSH_COMMENT_REJECTED} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.PUSH_COMMENT_REJECTED,
    };

    expect(pushCommentRejected()).toEqual(expectedAction);
  });
});


describe('Action `requireAuth`', () => {
  it(`action creator ${ActionType.REQUIRE_AUTH} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRE_AUTH,
      payload: 'AUTH',
    };

    expect(requireAuth('AUTH')).toEqual(expectedAction);
  });
});


describe('Action `login`', () => {
  it(`action creator ${ActionType.LOGIN_PENDING} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOGIN_PENDING,
    };

    expect(loginPending()).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOGIN_FULFILLED} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOGIN_FULFILLED,
    };

    expect(loginFulfilled()).toEqual(expectedAction);
  });

  it(`action creator ${ActionType.LOGIN_REJECTED} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOGIN_REJECTED,
    };

    expect(loginRejected()).toEqual(expectedAction);
  });
});


describe('Action `logout`', () => {
  it(`action creator ${ActionType.LOGOUT} returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });
});


describe('Action `saveComments`', () => {
  it(`action creator ${ActionType.SAVE_COMMENTS} returns correct action`, () => {
    const comments = [{id: 1, title: 'comment1'}, {id: 2, title: 'comment2'}, {id: 3, title: 'comment3'}];
    const expectedAction = {
      type: ActionType.SAVE_COMMENTS,
      payload: comments,
    };

    expect(saveComments(comments)).toEqual(expectedAction);
  });
});


describe('Action `redirectToRoute`', () => {
  it(`action creator ${ActionType.REDIRECT_TO_ROUTE} returns correct action`, () => {
    const url = 'http://example.com';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });
});
