var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.093855867594529,
          "pitch": 0.1082098317709228,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7503767313158498,
          "pitch": 0.20588888610391187,
          "title": "雨水儲存系統",
          "text": "<img src=\"img/sample.jpg\" width=\"250\" />"
        }
      ]
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.1392221993140623,
        "pitch": 0.003991080584299311,
        "fov": 1.299695808558111
      },
      "linkHotspots": [
        {
          "yaw": 3.0572968690060485,
          "pitch": 0.09028877567055105,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "雨水儲存系統",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
