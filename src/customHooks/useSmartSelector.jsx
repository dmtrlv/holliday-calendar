import { useSelector, shallowEqual } from 'react-redux';

const devoff = process.browser && window.location.search.indexOf('devoff=smartSelector') > 0;

function useSmartSelector(selector, comparator = shallowEqual) {
  const comparatorFunc = devoff ? undefined : comparator;
  return useSelector(selector, comparatorFunc);
}

export default useSmartSelector;
