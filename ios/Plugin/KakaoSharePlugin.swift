import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(KakaoSharePlugin)
public class KakaoSharePlugin: CAPPlugin {
    private let implementation = KakaoShare()

    @objc func initSDK(_ call: CAPPluginCall) {
        let appKey = call.getString("appKey") ?? ""
        implementation.initSDK(appKey)
    }

    @objc func sendDefault(_ call: CAPPluginCall) {
        let content = call.getObject("content") ?? [:]
        if let link = content["link"] as? JSObject {
            let templateJsonString =
                                """
                                {
                                    "object_type": "feed",
                                    "content": {
                                        "title": "\(content["title"] ?? "")",
                                        "description": "\(content["description"] ?? "")",
                                        "image_url": "\(content["imageUrl"] ?? "")",
                                        "link": {
                                            "mobile_web_url": "\(link["mobileWebUrl"] ?? "")",
                                            "web_url": "\(link["webUrl"] ?? "")"
                                        }
                                    },
                                    "buttons": [
                                        {
                                            "title": "라이프리로 이동",
                                            "link": {
                                                "mobile_web_url": "\(link["mobileWebUrl"] ?? "")",
                                                "web_url": "\(link["webUrl"] ?? "")"
                                            }
                                        }
                                    ]
                                }
                                """
            let templateJsonStringData =
                    templateJsonString.data(using: .utf8)!

                    implementation.shareDefault(templateJsonStringData, viewController: (self.bridge?.viewController)!)
        }
        
        
    }
}
