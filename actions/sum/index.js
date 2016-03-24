exports.handler = function (event, context) {
  var results = {};
  if(!event.queryParameters) event.queryParameters = {}; // to handle the difference of dev and prod
  results.x = event.queryParameters.x || 0;
  results.y = event.queryParameters.y || 0;

  results.z = Number(results.x) + Number(results.y);
  context.succeed(results);
};
