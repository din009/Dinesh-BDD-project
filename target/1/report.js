$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Validate NTL Taxi homepage",
  "description": "",
  "id": "validate-ntl-taxi-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as \u003cURL\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as \u003cUSERNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as \u003cMOBILENUM\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as \u003cPICADD\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as \u003cDROPADD\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as \u003cVECHICLETYPE\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "USERNAME",
        "MOBILENUM",
        "PICADD",
        "DROPADD",
        "VECHICLETYPE"
      ],
      "line": 13,
      "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;1"
    },
    {
      "cells": [
        "FireFox",
        "http://www.ntltaxi.com/",
        "abcd",
        "1234567890",
        "Adyar",
        "Tambaram",
        "Sedan"
      ],
      "line": 14,
      "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;2"
    },
    {
      "cells": [
        "FireFox",
        "http://www.ntltaxi.com/",
        "abcd1",
        "1234567890",
        "Adyar",
        "Tambaram",
        "Sedan"
      ],
      "line": 15,
      "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;3"
    },
    {
      "cells": [
        "FireFox",
        "http://www.ntltaxi.com/",
        "abcd2",
        "1234567890",
        "Adyar",
        "Tambaram",
        "Sedan"
      ],
      "line": 16,
      "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;4"
    },
    {
      "cells": [
        "FireFox",
        "http://www.ntltaxi.com/",
        "abcd3",
        "1234567890",
        "Adyar",
        "Tambaram",
        "Sedan"
      ],
      "line": 17,
      "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 9473242234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 2104015400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 133800530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 770741317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 98664708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 112092341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 407854933,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 789015,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded0.jpg");
formatter.after({
  "duration": 747264206,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 117818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 621908441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 152591169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 86513788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 75063620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 75449918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 304158506,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 398613,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded1.jpg");
formatter.after({
  "duration": 781150411,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 100167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 564247498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 111130497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 77515644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 62305543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 106198944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 302802975,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 397791,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded2.jpg");
formatter.after({
  "duration": 598728544,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 94008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 559218243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 72319307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 70941198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 147656332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 104035104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 378865386,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 519716,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded3.jpg");
formatter.after({
  "duration": 634617256,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 70609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 667170099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 87990010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 75819384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 59634713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 69452660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 294282676,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 483180,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded4.jpg");
formatter.after({
  "duration": 720808376,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 91956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 680598141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 85277307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 88992905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 75721270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 68933766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 344138029,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 294752,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded5.jpg");
formatter.after({
  "duration": 595098744,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 82514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 671627913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 73739289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 74216311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 66985859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 81273114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 275250652,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 227016,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded6.jpg");
formatter.after({
  "duration": 560607436,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 122745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 889952039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 98911840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 102655764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 80657748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 86444409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 298195732,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 330057,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded7.jpg");
formatter.after({
  "duration": 563586565,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd2",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 86209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 603449500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd2",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 90871435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 81363839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 74546778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 88237141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 297754015,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 215111,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded8.jpg");
formatter.after({
  "duration": 665268168,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd2",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 113303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 587471320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd2",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 98025942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 68354114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 71244982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 71976936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 284519327,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 376034,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded9.jpg");
formatter.after({
  "duration": 792036936,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd2",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 152712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 675116494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd2",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 231431965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 207143669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 91669893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 74863697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 336405923,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 364540,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded10.jpg");
formatter.after({
  "duration": 692664495,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd2",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 193354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 685722637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd2",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 90629640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 95178590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 74680607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 64046139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 444415252,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 330056,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded11.jpg");
formatter.after({
  "duration": 666424188,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 86209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 633132412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd3",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 70021638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 82744821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 71137426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 70451451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 303745115,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 419960,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded12.jpg");
formatter.after({
  "duration": 755042700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 149429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 1159733771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd3",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 88439937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 94461825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 83775221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 70076648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 418836288,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 282026,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded13.jpg");
formatter.after({
  "duration": 612432455,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 92367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 720076012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd3",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 75805015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 95373175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 88640270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 88795035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 443929199,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 451569,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded14.jpg");
formatter.after({
  "duration": 732353372,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify whether user is able to register",
  "description": "",
  "id": "validate-ntl-taxi-homepage;verify-whether-user-is-able-to-register;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as FireFox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Username as abcd3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobilenum as 1234567890",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Pickup Address as Adyar",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Drop Address as Tambaram",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select vechicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FireFox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 1346910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 582010611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd3",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 96471311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "HomePageTest.EnterMobilenum(String)"
});
formatter.result({
  "duration": 75611251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adyar",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 68731381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tambaram",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 73194122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 24
    }
  ],
  "location": "HomePageTest.selectVechicletype(String)"
});
formatter.result({
  "duration": 339084963,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclickbookbutton()"
});
formatter.result({
  "duration": 1023832,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat stepDefinition.HomePageTest.Dontclickbookbutton(HomePageTest.java:74)\r\n\tat ✽.But Don\u0027t click book button(Homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/jpeg", "embedded15.jpg");
formatter.after({
  "duration": 670448905,
  "status": "passed"
});
});