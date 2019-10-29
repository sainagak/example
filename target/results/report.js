$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_H2a.06.17/Desktop/week3/casestudyproject/features/casestudy2.feature");
formatter.feature({
  "name": "successful login with registered credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "loggin with registered credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user is on demo web shop page",
  "keyword": "Given "
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and  \"\u003cpwd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "he will be logged in",
  "keyword": "And "
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "pwd"
      ]
    },
    {
      "cells": [
        "xysampath@gmail.com",
        "kinnera123"
      ]
    },
    {
      "cells": [
        "xyganesh@gmail.com",
        "ganesh123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "loggin with registered credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user is on demo web shop page",
  "keyword": "Given "
});
formatter.match({
  "location": "Casestudy.user_is_on_demo_web_shop_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters \"xysampath@gmail.com\" and  \"kinnera123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "he will be logged in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "loggin with registered credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user is on demo web shop page",
  "keyword": "Given "
});
formatter.match({
  "location": "Casestudy.user_is_on_demo_web_shop_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d77.0.3865.120)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027HDC2-D-BJT4T72\u0027, ip: \u002710.211.154.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x010EEB13+1501971]\n\tOrdinal0 [0x0106F6D1+980689]\n\tOrdinal0 [0x00FF765F+489055]\n\tOrdinal0 [0x00FF02B5+459445]\n\tOrdinal0 [0x00FEFEA4+458404]\n\tOrdinal0 [0x00FEFA1D+457245]\n\tOrdinal0 [0x00FEF21D+455197]\n\tOrdinal0 [0x00FEEDE4+454116]\n\tOrdinal0 [0x00FEEDA5+454053]\n\tOrdinal0 [0x00FF374D+472909]\n\tOrdinal0 [0x00FEED5C+453980]\n\tOrdinal0 [0x00FEF6D1+456401]\n\tOrdinal0 [0x00FEF21D+455197]\n\tOrdinal0 [0x00FEEDE4+454116]\n\tOrdinal0 [0x00FEEDA5+454053]\n\tOrdinal0 [0x00FF2C67+470119]\n\tOrdinal0 [0x00FEED5C+453980]\n\tOrdinal0 [0x00FEF6D1+456401]\n\tOrdinal0 [0x00FEF21D+455197]\n\tOrdinal0 [0x00FEEDE4+454116]\n\tOrdinal0 [0x00FEEDA5+454053]\n\tOrdinal0 [0x00FEBA0C+440844]\n\tOrdinal0 [0x00FEED5C+453980]\n\tOrdinal0 [0x00FEEC44+453700]\n\tOrdinal0 [0x00FF8330+492336]\n\tOrdinal0 [0x00FAA108+172296]\n\tOrdinal0 [0x00FA942D+169005]\n\tOrdinal0 [0x00FA78EB+162027]\n\tOrdinal0 [0x00F90AC7+68295]\n\tOrdinal0 [0x00F91B40+72512]\n\tOrdinal0 [0x00F91AD9+72409]\n\tOrdinal0 [0x01088F37+1085239]\n\tGetHandleVerifier [0x0118D7ED+503293]\n\tGetHandleVerifier [0x0118D580+502672]\n\tGetHandleVerifier [0x011946AC+531644]\n\tGetHandleVerifier [0x0118DFFA+505354]\n\tOrdinal0 [0x01080606+1050118]\n\tOrdinal0 [0x0108047F+1049727]\n\tOrdinal0 [0x0108AF9B+1093531]\n\tOrdinal0 [0x0108B103+1093891]\n\tOrdinal0 [0x0108A095+1089685]\n\tBaseThreadInitThunk [0x74FA0419+25]\n\tRtlGetAppContainerNamedObjectPath [0x7743662D+237]\n\tRtlGetAppContainerNamedObjectPath [0x774365FD+189]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:122)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Stepdefinition.Casestudy.user_is_on_demo_web_shop_page(Casestudy.java:17)\r\n\tat ✽.user is on demo web shop page(C:/Users/Training_H2a.06.17/Desktop/week3/casestudyproject/features/casestudy2.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters \"xyganesh@gmail.com\" and  \"ganesh123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "he will be logged in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});