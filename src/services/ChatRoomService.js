import { CometChat } from "@cometchat-pro/chat";

const appID = "200896763832f5d4";
const region = "US";
const authKey = "36b4c86381005c124021ec67b1dc7a52d20439a5";
var name = "Kevin";


const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();

export function initChatRoom () {
  CometChat.init(appID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
    },
    error => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );
}

export function createUser(userId){
  var user = new CometChat.User(userId);
  user.setName(name);
  CometChat.createUser(user, authKey).then(
    user => {
        console.log("user created", user);
    },error => {
        console.log("error", error);
    }
)
}

export function login(userId){
  CometChat.login(userId, authKey).then(
    user => {
      console.log("Login Successful:", { user });    
    },
    error => {
      console.log("Login failed with exception:", { error });    
    }
  );
}