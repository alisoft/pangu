module.exports = {
  "test-runner": "jest",
  "configurations": {
    "ios.sim.debug": {
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/RNBApp.app",
      "build": "xcodebuild -workspace ios/RNBApp.xcworkspace -scheme RNBApp -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build -destination 'name=iPhone 11'",
      "type": "ios.simulator",
      "device": {
        "name": "iPhone 11",
        "os": "iOS 13.2"
      }
    },
    "ios.sim.release": {
      "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/RNBApp.app",
      "build": "xcodebuild -workspace ios/RNBApp.xcworkspace -scheme RNBApp -configuration Release -sdk iphonesimulator -derivedDataPath ios/build -destination 'name=iPhone 11'",
      "type": "ios.simulator",
      "device": {
        "name": "iPhone 11",
        "os": "iOS 13.2"
      }
    }
  }
};
