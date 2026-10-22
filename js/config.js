window.ALAD_CONFIG = {
  "stageWidth": 576,
  "stageHeight": 576,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": false,
  "clockTimezone": "America/Lima",
  "projectId": "p_mvk675twtc9gwk",
  "backgrounds": [
    {
      "id": "b_mvk5qahcury3n8",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvk675twtc9gwk/1792712059446_alac_1202_576x576_dia.mp4",
      "duration": 7,
      "breakpoints": [
        "bp_mvk3nsmdw3hs6l"
      ],
      "condition": null
    },
    {
      "id": "b_mvk5qf7vrdf8wl",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvk675twtc9gwk/1792712059449_alac_1202_576x576_tarde.mp4",
      "duration": 7,
      "breakpoints": [
        "bp_mvk3nsmdw3hs6l"
      ],
      "condition": null
    },
    {
      "id": "b_mvk5qgv786xtiu",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvk675twtc9gwk/1792712059451_alac_1202_576x576_noche.mp4",
      "duration": 7,
      "breakpoints": [
        "bp_mvk3nsmdw3hs6l"
      ],
      "condition": null
    }
  ],
  "resources": [],
  "weather": {
    "enabled": false,
    "lat": -12.0464,
    "lon": -77.0428,
    "city": "Lima",
    "unit": "celsius",
    "refresh": 15
  },
  "apiRefreshMin": 1,
  "breakpoints": [],
  "elements": [
    {
      "id": "e_mvk675twex4fon",
      "resourceId": "",
      "type": "clock",
      "enabled": true,
      "x": 4.4,
      "y": 7.9,
      "width": 65,
      "height": 23.2,
      "align": "center",
      "zIndex": 2,
      "fontSize": 120,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "Neue Haas Grotesk Display Pro 75 Bold",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {},
      "clockShowHours": true,
      "clockShowMinutes": true,
      "clockShowSeconds": false,
      "clock12": false,
      "showDate": false,
      "padZero": true,
      "clockShowAmPm": true
    },
    {
      "id": "e_mvk675tweq2mfw",
      "resourceId": "",
      "type": "ampm",
      "enabled": true,
      "x": 60.6,
      "y": 14.1,
      "width": 30.4,
      "height": 17.4,
      "align": "center",
      "zIndex": 2,
      "fontSize": 80,
      "fontWeight": "400",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "NHaasGroteskTXPro-55Rg",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {},
      "ampmUppercase": true
    }
  ]
};
