var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "3baa47a8549145ffb79ca653ab42a969",
  'q': "Obama",
  'begin_date': "19000101",
  'end_date': "20170420",
  'sort': "oldest",
  'fl': "headline,lead_paragraph,pub_date",
  'page': 1,
  'facet_field': "section_name"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});