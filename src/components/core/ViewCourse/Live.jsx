import React, { useEffect } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Live = () => {
  useEffect(() => {
    const getUrlParams = (url) => {
      let urlStr = url.split('?')[1];
      const urlSearchParams = new URLSearchParams(urlStr);
      const result = Object.fromEntries(urlSearchParams.entries());
      return result;
    };

    const roomID = getUrlParams(window.location.href)['roomID'] || (Math.floor(Math.random() * 10000) + "");
    const userID = Math.floor(Math.random() * 10000) + "";
    const userName = "userName" + userID;
    const appID = 1941968329;
    const serverSecret = "604abc25179fd1ee6135ff9e1bd6b424";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);

    let role = getUrlParams(window.location.href)['role'] || 'Host';
    role = role === 'Host' ? ZegoUIKitPrebuilt.Host : ZegoUIKitPrebuilt.Audience;
    let config = {}
    if (role === 'Host') {
      config = {
        turnOnCameraWhenJoining: true,
        showMyCameraToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: true,
        showTextChat: true,
        showUserList: true,
      }
    }
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: document.querySelector("#root"),
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: { role },
      },
      sharedLinks: [{
        name: 'Join as an audience',
        url: window.location.protocol + '//' +
          window.location.host +
          window.location.pathname +
          '?roomID=' +
          roomID +
          '&role=Audience',
      }],
      ...config
    });
  }, []);

  // return <div id="root" style={{ width: '100vw', height: '100vh' }} />;
}

export default Live;
