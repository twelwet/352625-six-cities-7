import {offers} from './offers.js';
import {loadOffersPending, loadOffersFulfilled, loadOffersRejected, updateOffer} from '../action.js';
import {Status} from '../../constants';

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {
    const initialState = {
      status: Status.IDLE,
      data: [],
      error: {
        message: null,
      },
    };

    expect(offers(undefined, {})).toEqual(initialState);
  });

  it('loadOffersPending should change status to PENDING', () => {
    const stateBefore = {
      status: Status.IDLE,
      data: [],
      error: {
        message: null,
      },
    };

    const state = {
      status: Status.PENDING,
      data: [],
      error: {
        message: null,
      },
    };

    expect(offers(stateBefore, loadOffersPending())).toEqual(state);
  });

  it('loadOffersFulfilled should add data and change status to FULFILLED', () => {
    const stateBefore = {
      status: Status.PENDING,
      data: [],
      error: {
        message: null,
      },
    };

    const state = {
      status: Status.FULFILLED,
      data: [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}],
      error: {
        message: null,
      },
    };

    expect(offers(stateBefore, loadOffersFulfilled([
      {id: 1, title: 'offer1'},
      {id: 2, title: 'offer2'},
      ]))).toEqual(state);
  });

  it('loadOffersRejected should add error and change status to REJECTED', () => {
    const stateBefore = {
      status: Status.PENDING,
      data: [],
      error: {
        message: null,
      },
    };

    const state = {
      status: Status.REJECTED,
      data: [],
      error: {
        message: 'Error message',
      },
    };

    expect(offers(stateBefore, loadOffersRejected('Error message'))).toEqual(state)
  });

  it('updateOffer should update one offer in data', () => {
    const updatedOffer = {id: 2, title: 'Updated title'};

    const stateBefore = {
      status: Status.FULFILLED,
      data: [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}, {id: 3, title: 'offer3'}],
      error: {
        message: null,
      },
    };

    const state = {
      status: Status.FULFILLED,
      data: [{id: 2, title: 'Updated title'}, {id: 1, title: 'offer1'}, {id: 3, title: 'offer3'}],
      error: {
        message: null,
      },
    };

    expect(offers(stateBefore, updateOffer(updatedOffer))).toEqual(state);
  });
});
