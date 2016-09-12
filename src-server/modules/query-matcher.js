export default function(query, doc) {
  query = query || {}
  doc = doc || {}

  for (const i in query) {
    if (i in doc === false)
      continue

    //if an array, check if any value matches
    const query_is_array = is(query[i], Array)
    if (query_is_array && !query[i].some(val => val == doc[i]))
      return false

    //otherwise check if the value matches
    else if (!query_is_array && query[i] != doc[i])
      return false
  }

  //true if params is a blank object or if all matches passed
  return true
}
