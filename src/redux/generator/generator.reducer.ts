import { FETCH_RANDOM_JOKES } from './generator.action-types';

export default (state = [], { type, data }: { type: string; data: any }) => {
  switch (type) {
    case FETCH_RANDOM_JOKES:
      return data;
    default:
      return state;
  }
};
