define({ "api": [
  {
    "type": "get",
    "url": "/users/self",
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
            "description": "<p>User sex.  One of three values is returned: <ul><li><code>1</code> — female;</span></li><li><code>2</code> — male;</span></li><li><code>0</code> — not specified.</span></li></ul></p>"
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
    },
    "filename": "./endpoints/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/{user-id}",
    "title": "Get user by id",
    "name": "GetUser",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "v0.0.1",
    "description": "<p>Get information about a user.</p>",
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
            "description": "<p>User sex.  One of three values is returned: <ul><li><code>1</code> — female;</span></li><li><code>2</code> — male;</span></li><li><code>0</code> — not specified.</span></li></ul></p>"
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>user-id</code> of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": {\n    \"message\": \"Failed to authenticate because of bad credentials or an invalid authorization header.\",\n    \"status_code\": 401\n  }\n}",
          "type": "json"
        },
        {
          "title": "User Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n    \"message\": \"User not found.\",\n    \"status_code\": 404\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./endpoints/UserController.php",
    "groupTitle": "Users"
  }
] });
