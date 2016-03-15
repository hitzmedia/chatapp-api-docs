define({ "api": [
  {
    "type": "post",
    "url": "/join/finish",
    "title": "Finish registration",
    "name": "PostFinish",
    "group": "Join",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Verify phone number and finaly authentificate user. If request successful, resource gives information about the user, along with the access token.<br>Format of response you can see on <a href=\"#api-OAuth-Authorize\">OAuth2 – Issue Access Token</a> reference.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passcode",
            "description": "<p>Verification code.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>Request parameters have not been validated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasscodeNotFounded",
            "description": "<p>Passcode not registered in system.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyVerified",
            "description": "<p>User that owns passcode already verified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationFailed",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"validation_failed\",\n    \"error_desc\": \"Validation failed.\",\n    \"errors\": {\n      \"phone_number\": [\n        \"The passcode field is required.\"\n      ]\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "PasscodeNotFounded",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"passcode_not_founded\",\n    \"error_desc\": \"Confirmation code not founded.\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "UserAlreadyVerified",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"user_already_verified\",\n    \"error_desc\": \"User already verified.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/JoinController.php",
    "groupTitle": "Join"
  },
  {
    "type": "post",
    "url": "/join",
    "title": "Create user account",
    "name": "PostIndex",
    "group": "Join",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Create new user account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Local phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number_country",
            "description": "<p>ISO 3166-1 Country Code.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User Phone number in E164 format.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Modification date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Registration date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"phone\": \"+380636144114\",\n    \"updated_at\": \"2016-03-15 18:08:00\",\n    \"created_at\": \"2016-03-15 18:08:00\",\n    \"id\": 777\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationFailed",
            "description": "<p>Request parameters have not been validated.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhoneAlreadyRegistered",
            "description": "<p>Passed phone number is already registered in app.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationFailed",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"validation_failed\",\n    \"error_desc\": \"Validation failed.\",\n    \"errors\": {\n      \"phone_number\": [\n        \"The phone number field contains an invalid number.\"\n      ]\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "PhoneAlreadyRegistered",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"error_type\": \"phone_already_registered\",\n    \"error_desc\": \"Passed phone number already registered.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/JoinController.php",
    "groupTitle": "Join"
  },
  {
    "type": "post",
    "url": "/oauth/authorize",
    "title": "Get access token",
    "name": "Authorize",
    "group": "OAuth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get access token string, TTL, refresh token and token owner info.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>E164 phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>One-off passcode from sms.</p>"
          }
        ]
      }
    },
    "filename": "./endpoints/OAuth.php",
    "groupTitle": "OAuth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access Token string.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "access_token_expiration",
            "description": "<p>Access Token TTL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Refresh Token string.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Token owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.phone_number",
            "description": "<p>User Phone number in E164 format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.sex",
            "description": "<p>User sex. One of three values is returned: <ul><li><code>1</code> — female;</span></li><li><code>2</code> — male;</span></li><li><code>0</code> — not specified.</span></li></ul></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.bdate",
            "description": "<p>User birthday on format yyy-mm-dd.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.has_photo",
            "description": "<p>Information whether the user's photo is available.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.photo_50",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.photo_100",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.photo_200_orig",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.online",
            "description": "<p>Information whether the user is online. Returned values: 1 — online, 0 — offline.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.last_seen",
            "description": "<p>Last visit date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.deactivated",
            "description": "<p>Information whether the user is deactivated. Returned values: 1 — yes, 0 — no.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"access_token\": \"...\",\n    \"access_token_expiration\": 3600,\n    \"refresh_token\": \"...\",\n    \"user\": {\n      \"id\": 6,\n      \"first_name\": \"...\",\n      \"last_name\": \"...\",\n      \"phone\": \"...\",\n      \"phone_verified\": 1,\n      \"sex\": 0,\n      \"bdate\": null,\n      \"photo_50\": null,\n      \"photo_100\": null,\n      \"photo_200_orig\": null,\n      \"created_at\": \"2016-03-15 20:26:09\",\n      \"updated_at\": \"2016-03-15 20:38:36\",\n      \"last_seen\": \"0000-00-00 00:00:00\",\n      \"deactivated\": 0\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingRequiredParams",
            "description": "<p>One or more required parameter was not provided in the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingRequiredParams",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"error_type\": \"oauth_error\",\n    \"error_msg\": \"The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. Check the \"...\" parameter.\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/oauth/refresh-token",
    "title": "Refresh access token",
    "name": "GetUser",
    "group": "OAuth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get new access token using refresh token. If the token is valid, a response is returned in the same format as the resource <a href=\"#api-OAuth-Authorize\">OAuth2 – Issue Access Token</a>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>A valid refresh token.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRefreshToken",
            "description": "<p>Refresh token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingRequiredParams",
            "description": "<p>One or more required parameter was not provided in the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidRefreshToken",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"error_type\": \"oauth_error\",\n    \"error_msg\": \"The refresh token is invalid.\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "MissingRequiredParams",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"error_type\": \"oauth_error\",\n    \"error_msg\": \"The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. Check the \"...\" parameter.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/OAuth.php",
    "groupTitle": "OAuth"
  },
  {
    "type": "get",
    "url": "/v1/users/self",
    "title": "Get current user",
    "name": "GetSelf",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get information about a owner of access token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>A valid access token.</p>"
          }
        ]
      }
    },
    "filename": "./endpoints/UserController.php",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>User Phone number in E164 format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sex",
            "description": "<p>User sex. One of three values is returned: <ul><li><code>1</code> — female;</span></li><li><code>2</code> — male;</span></li><li><code>0</code> — not specified.</span></li></ul></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bdate",
            "description": "<p>User birthday on format yyy-mm-dd.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "has_photo",
            "description": "<p>Information whether the user's photo is available.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_50",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_100",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_200_orig",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "online",
            "description": "<p>Information whether the user is online. Returned values: 1 — online, 0 — offline.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_seen",
            "description": "<p>Last visit date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "deactivated",
            "description": "<p>Information whether the user is deactivated. Returned values: 1 — yes, 0 — no.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 777,\n    \"first_name\": \"Snoop\",\n    \"last_name\": \"Dogg\",\n    \"phone_number\": \"+12025550177\",\n    \"sex\": 2,\n    \"bdate\": \"1971-10-20\",\n    \"has_photo\": 1,\n    \"photo_50\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"photo_100\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"photo_200_orig\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"online\": 0,\n    \"last_seen\": \"2016-03-12 20:37:14\",\n    \"registered_at\": \"2016-03-12 00:00:00\",\n    \"deactivated\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Missed <code>access_token</code> parameter or invalid token passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n    \"status_code\": 401\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/v1/users/{user-id}",
    "title": "Get user by id",
    "name": "GetUser",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get information about a user with passed ID.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>A valid access token.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage",
        "content": "http://api.chatapp.com/v1/users/777",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>user-id</code> of the user was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Missed <code>access_token</code> parameter or invalid token passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n    \"message\": \"User not found.\",\n    \"status_code\": 404\n  }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n    \"status_code\": 401\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/UserController.php",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>User Phone number in E164 format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sex",
            "description": "<p>User sex. One of three values is returned: <ul><li><code>1</code> — female;</span></li><li><code>2</code> — male;</span></li><li><code>0</code> — not specified.</span></li></ul></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bdate",
            "description": "<p>User birthday on format yyy-mm-dd.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "has_photo",
            "description": "<p>Information whether the user's photo is available.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_50",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_100",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo_200_orig",
            "description": "<p>User photo link.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "online",
            "description": "<p>Information whether the user is online. Returned values: 1 — online, 0 — offline.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_seen",
            "description": "<p>Last visit date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "deactivated",
            "description": "<p>Information whether the user is deactivated. Returned values: 1 — yes, 0 — no.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 777,\n    \"first_name\": \"Snoop\",\n    \"last_name\": \"Dogg\",\n    \"phone_number\": \"+12025550177\",\n    \"sex\": 2,\n    \"bdate\": \"1971-10-20\",\n    \"has_photo\": 1,\n    \"photo_50\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"photo_100\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"photo_200_orig\": \"http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg\",\n    \"online\": 0,\n    \"last_seen\": \"2016-03-12 20:37:14\",\n    \"registered_at\": \"2016-03-12 00:00:00\",\n    \"deactivated\": 0\n  }\n}",
          "type": "json"
        }
      ]
    }
  }
] });
