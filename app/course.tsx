import { WebView } from "react-native-webview";
import { styled, YStack } from "tamagui";

const IWebView = styled(WebView, {
  name: "CourseWebView",
  flex: 1,
  justifyContent: "space-between",
  padding: "$4",
  space: "$true"
});

export default function Course() {
  return (
    <IWebView
      source={{ uri: "https://www.baidu.com/" }}
      originWhitelist={["*"]}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      scrollEnabled={true}
      startInLoadingState={true}
    />
  );
}
