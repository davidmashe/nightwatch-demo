const BINPATH = './node_modules/nightwatch/bin/'; 

const config = {
  "src_folders": ["tests"],
  "output_folder": "./reports",
  "selenium": {
    "start_process": true,
    "server_path": BINPATH + "selenium.jar",
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver" : BINPATH + "chromedriver"
    }
  },
  //"test_workers" : {"enabled" : true, "workers" : "auto"},
  "test_settings": {
    "local": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "screenshots": {
        "enabled": true,
        "path": "./screenshots/"
      }, 
      "globals": {"waitForConditionTimeout": 15000},
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            `Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46
            (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3`,
            "--window-size=1200,1500"
          ]
        },
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "chrome": { 
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
module.exports = config;
