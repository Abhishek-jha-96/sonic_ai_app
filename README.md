# Sonic AI App

**Desciption**
This is an React-native application. The application is basically a text/speech to speech and modulation application.

**Tech stack**
React native (Typescript) and Expo.
Redux toolkit.

## Flows

1. Login Flow
- User can login with 2 auth-providers. 1. email and password. 2. google Oauth.
- User can Sign-up with 2 auth-providers. 1. email and password. 2. google Oauth.

2. Forgot password
- Click on the forgot password button and request for password change.
- with the given link can change password to new password.

3. Complete profile
- after user is registered it will be sent to the complete profile flow which is required flow.
- only once done with the profile completion it can access the application.

4. Permissions
- After Complete profile, the modal for permission (like file, message, notification)

5. Dashboard
- there are 3 sections represent the AI tasks.
- - Script to Speech (Text to Speech).
- - AI Voice Generator (Speech to Speech).
- - AI Voice Change (Modulation).

- bottom nav-bar with 2 options 
- - home, above dashboard section.
- - project, previously created projects.

- top avatar, to go into profile and can update details related to user.


## Data Fetching

- User Creation
Endpoint: BASE_URL/user
Method: POST
Body: 
```json 
{
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "password": "john@doe",
    "auth_provider": "email"
}
```
- User Details Fetching
Endpoint: BASE_URL/user/<id>
Method: GET

