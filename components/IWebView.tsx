import { WebView } from "react-native-webview";
import { styled, YStack } from "tamagui";

export const IWebView = styled(WebView, {
  name: "MyStack",
  flex: 1,
  justifyContent: "space-between",
  padding: "$4",
  space: "$true"
});
