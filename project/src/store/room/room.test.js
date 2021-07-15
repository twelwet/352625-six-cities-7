import {room} from './room.js';
import {
  loadOfferPending,
  loadOfferFulfilled,
  loadOfferRejected,
  loadCommentsPending,
  loadCommentsFulfilled,
  loadCommentsRejected,
  saveComments,
  loadNeighborOffersPending,
  loadNeighborOffersFulfilled,
  loadNeighborOffersRejected
} from '../action';
import {Status} from '../../constants.js';

describe('Reducer: room', () => {
  it('without additional parameters should return initial state', () => {
    const initialState = {
      offer: {
        status: Status.IDLE,
        data: {},
        error: {
          message: null,
        },
      },
      reviews: {
        status: Status.IDLE,
        data: [],
        error: {
          message: null,
        },
      },
      neighborOffers: {
        status: Status.IDLE,
        data: [],
        error: {
          message: null,
        },
      },
    };

    expect(room(undefined, {})).toEqual(initialState);
  });

  it('loadOfferPending should change offer.status to PENDING', () => {
    const stateBefore = {
      offer: {
        status: Status.IDLE,
        data: {},
        error: {
          message: null,
        },
      },
      reviews: {},
      neighborOffers: {},
    };

    const state = {
      offer: {
        status: Status.PENDING,
        data: {},
        error: {
          message: null,
        },
      },
      reviews: {},
      neighborOffers: {},
    };

    expect(room(stateBefore, loadOfferPending())).toEqual(state);
  });

  it('loadOfferFulfilled should add data and change status to FULFILLED', () => {
    const stateBefore = {
      offer: {
        status: Status.PENDING,
        data: {},
        error: {
          message: null,
        },
      },
      reviews: {},
      neighborOffers: {},
    };

    const state = {
      offer: {
        status: Status.FULFILLED,
        data: {id: 1, title: 'offer1'},
        error: {
          message: null,
        },
      },
      reviews: {},
      neighborOffers: {},
    };

    expect(room(stateBefore, loadOfferFulfilled({id: 1, title: 'offer1'}))).toEqual(state);
  });

  it('loadOfferRejected should add error and change status to REJECTED', () => {
    const stateBefore = {
      offer: {
        status: Status.PENDING,
        data: {},
        error: {
          message: null,
        },
      },
      reviews: {},
      neighborOffers: {},
    };

    const state = {
      offer: {
        status: Status.REJECTED,
        data: {},
        error: {
          message: 'Error message',
        },
      },
      reviews: {},
      neighborOffers: {},
    };

    expect(room(stateBefore, loadOfferRejected('Error message'))).toEqual(state);
  });

  it('loadCommentsPending should change reviews.status to PENDING', () => {
    const stateBefore = {
      reviews: {
        status: Status.IDLE,
        data: [],
        error: {
          message: null,
        },
      },
      offer: {},
      neighborOffers: {},
    };

    const state = {
      reviews: {
        status: Status.PENDING,
        data: [],
        error: {
          message: null,
        },
      },
      offer: {},
      neighborOffers: {},
    };

    expect(room(stateBefore, loadCommentsPending())).toEqual(state);
  });

  it('loadCommentsFulfilled should add data and change status to FULFILLED', () => {
    const stateBefore = {
      reviews: {
        status: Status.PENDING,
        data: [],
        error: {
          message: null,
        },
      },
      offer: {},
      neighborOffers: {},
    };

    const state = {
      reviews: {
        status: Status.FULFILLED,
        data: [{id: 1, title: 'comment1'}, {id: 2, title: 'comment2'}],
        error: {
          message: null,
        },
      },
      offer: {},
      neighborOffers: {},
    };

    expect(room(stateBefore, loadCommentsFulfilled([
      {id: 1, title: 'comment1'},
      {id: 2, title: 'comment2'},
    ]))).toEqual(state);
  });

  it('loadCommentsRejected should add error and change status to REJECTED', () => {
    const stateBefore = {
      reviews: {
        status: Status.PENDING,
        data: [],
        error: {
          message: null,
        },
      },
      offer: {},
      neighborOffers: {},
    };

    const state = {
      reviews: {
        status: Status.REJECTED,
        data: [],
        error: {
          message: 'Error message',
        },
      },
      offer: {},
      neighborOffers: {},
    };

    expect(room(stateBefore, loadCommentsRejected('Error message'))).toEqual(state);
  });

  it('saveComments should update comments list', () => {
    const stateBefore = {
      reviews: {
        status: Status.FULFILLED,
        data: [{id: 1, title: 'comment1'}, {id: 2, title: 'comment2'}],
        error: {
          message: null,
        },
      },
      offer: {},
      neighborOffers: {},
    };

    const state = {
      reviews: {
        status: Status.FULFILLED,
        data: [{id: 1, title: 'comment1'}, {id: 2, title: 'comment2'}, {id: 3, title: 'comment3'}],
        error: {
          message: null,
        },
      },
      offer: {},
      neighborOffers: {},
    };

    expect(room(stateBefore, saveComments([
      {id: 1, title: 'comment1'},
      {id: 2, title: 'comment2'},
      {id: 3, title: 'comment3'}]))).toEqual(state);
  });

  it('loadNeighborOffersPending should change neighborOffers.status to PENDING', () => {
    const stateBefore = {
      neighborOffers: {
        status: Status.IDLE,
        data: [],
        error: {
          message: null,
        },
      },
      offer: {},
      reviews: {},
    };

    const state = {
      neighborOffers: {
        status: Status.PENDING,
        data: [],
        error: {
          message: null,
        },
      },
      offer: {},
      reviews: {},
    };

    expect(room(stateBefore, loadNeighborOffersPending())).toEqual(state);
  });

  it('loadNeighborOffersFulfilled should add data and change status to FULFILLED', () => {
    const stateBefore = {
      neighborOffers: {
        status: Status.PENDING,
        data: [],
        error: {
          message: null,
        },
      },
      offer: {},
      reviews: {},
    };

    const state = {
      neighborOffers: {
        status: Status.FULFILLED,
        data: [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}],
        error: {
          message: null,
        },
      },
      offer: {},
      reviews: {},
    };

    expect(room(stateBefore, loadNeighborOffersFulfilled([
      {id: 1, title: 'offer1'},
      {id: 2, title: 'offer2'}]))).toEqual(state);
  });

  it('loadNeighborOffersRejected should add error and change status to REJECTED', () => {
    const stateBefore = {
      neighborOffers: {
        status: Status.PENDING,
        data: [],
        error: {
          message: null,
        },
      },
      offer: {},
      reviews: {},
    };

    const state = {
      neighborOffers: {
        status: Status.REJECTED,
        data: [],
        error: {
          message: 'Error message',
        },
      },
      offer: {},
      reviews: {},
    };

    expect(room(stateBefore, loadNeighborOffersRejected('Error message'))).toEqual(state);
  });
});
