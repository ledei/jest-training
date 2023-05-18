function saveLocalValue(ref, value) {
  value = JSON.stringify(value);

  localStorage.setItem(ref, value);
}

function getLocalValue(ref) {
  let value = localStorage.getItem(ref);

  return JSON.parse(value);
}

const memoryService = { saveLocalValue, getLocalValue };
export default memoryService;
