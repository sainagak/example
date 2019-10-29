$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_H2a.06.17/Desktop/week3/casestudyproject/features/Casestudy4.feature");
formatter.feature({
  "name": "invalid cart value",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "empty cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cart"
    }
  ]
});
formatter.step({
  "name": "alexa homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Casestudy4.alexa_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alexa clicks on login link",
  "keyword": "And "
});
formatter.match({
  "location": "Casestudy4.alexa_clicks_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alexa enters credentials in box",
  "keyword": "When "
});
formatter.match({
  "location": "Casestudy4.alexa_enters_credentials_in_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alexa logins and clicks on shoping cart",
  "keyword": "And "
});
formatter.match({
  "location": "Casestudy4.alexa_logins_and_clicks_on_shoping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alexa will see your cart is empty",
  "keyword": "And "
});
formatter.match({
  "location": "Casestudy4.alexa_will_see_your_cart_is_empty()"
});
formatter.result({
  "status": "passed"
});
});