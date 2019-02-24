export default (filterId, filterName, inputState = ``, count) => `
<input 
  type="radio" id="filter__${ filterId }" 
  class="filter__input visually-hidden" 
  name="filter" 
  ${inputState}
>
<label 
  for="filter__${ filterId }" 
  class="filter__label">${ filterName }
  <span class="filter__${ filterId }-count">${ count }</span>
</label>
`;
