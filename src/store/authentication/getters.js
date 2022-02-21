import { Web } from '@/assets/js/sip-0.20.0'
import { h } from 'vue'
import router from '@/router/index'
// import { warningSwal } from "@/commonMethods/commonMethod";
import state  from './state';
import { notification, Button } from "ant-design-vue";


export function videoCall(){
const key = `open${Date.now()}`;
console.log('loginDetails=>',state.loggedInUser.user.sipId);
state.options= Web.SimpleUserOptions = {
    aor:`sip:${state.loggedInUser.user.sipId}@dev.icc-heaalth.com`,
    media: {
      constraints: {
        // This demo is making "video only" calls
        audio: true,
        video: true
      },
    },
    delegate: {
        onCallReceived: async () => {
        //   console.log('Incoming Call!');
          // console.log('simpleUser',simpleUser);
         // simpleUser.answer();
        //  notification.open(simpleUser.session.incomingInviteRequest.message.from._displayName).then((response) => {
        //     if (response == true) {
        //         state.simpleUser =simpleUser
        //         router.push('/video-call')
        //     } else {
        //         simpleUser.hangup()
        //     }
        // })

        

      notification.open({
        message: <h3>Call from...</h3>,
        description: <h1>{`${simpleUser.session.incomingInviteRequest.message.from._displayName}`} </h1>,
        btn: [
            h(Button,{
                onClick: () => {simpleUser.hangup(),notification.close(key)},
              },
              "Cancel "
            ),
            h(Button,{
                type: "primary",
                onClick: () =>  {state.simpleUser = simpleUser,
                        router.push('/video-call'),notification.close(key)}
              },
              "Accept"
            ),
           
          ],
          key,
        onClose: ()=>{simpleUser.hangup(),notification.close(key)},
       duration:null,
       placement:'bottomRight'
        
      })
     
        }
      },
    userAgentOptions: {
      // logLevel: "debug",
      displayName:state.loggedInUser.user.sipId,
      authorizationPassword:"123456",
      authorizationUsername:state.loggedInUser.user.sipId,
      sessionDescriptionHandlerFactoryOptions: {
        peerConnectionOptions: {
          rtcConfiguration : {
              iceServers: [{
                urls: "stun:stun.xten.com"
              }, {
                urls: "turn:numb.viagenie.ca",
                username: "mailto:webrtc@live.com",
                credential: "muazkh"
              }]
            },
        },
      },
    }
  };


   // Construct a SimpleUser instance
   const simpleUser = new Web.SimpleUser(state.server, state.options);
   // Connect to server and place call
   simpleUser.connect()
     .then(() => {
         // console.log("hello");
         simpleUser.register();
     })
     .catch((error) => {
         console.log(error);
     });
 // }

}
